const router = require("express").Router();
const path = require("path");
// routes to the exercises html file
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// routes to the index html file
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// routes to the stats html file
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;