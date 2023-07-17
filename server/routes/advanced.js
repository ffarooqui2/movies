const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("/", (req, res) => {
    console.log("Hello from advanced.js")
    res.send("Hello from advanced.js")
});

module.exports = router;