const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

const mongoose = require("mongoose");
const withAuth = process.env.MONGO_WITH_AUTH === "true";
const user = process.env.MONGO_USER || "root";
const password = process.env.MONGO_PASSWORD || "root";
const dbName = process.env.MONGO_DB_NAME || "visioconf";
const url = process.env.MONGO_URL || "localhost";
const port = process.env.MONGO_PORT || 27017;

if (withAuth) {
    mongoose
        .connect(`mongodb://${user}:${password}@${url}:${port}/${dbName}`, {
            authSource: "admin",
        })
        .then(() => console.log("MongoDB Database Connected"))
        .catch((err) => console.log(err));
} else {
    console.log(`mongodb://${url}:${port}/${dbName}`);
    mongoose
        .connect(`mongodb://${url}:${port}/${dbName}`)
        .then(() => console.log("MongoDB Database Connected"))
        .catch((err) => console.log(err));
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
