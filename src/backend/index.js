require("dotenv").config();
const app = require("./app");
const { createServer } = require("http");
const server = createServer(app);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
