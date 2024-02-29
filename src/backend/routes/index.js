const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    console.log("une requete sur /");
    res.send("Hello World!");
});

module.exports = router;
