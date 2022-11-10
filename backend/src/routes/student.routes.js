const express = require("express");

const { getAll, addOne } = require("../controllers/student.controller.js");

const router = express.Router();

router.get("/", getAll);
router.post("/", addOne);

module.exports = router;
