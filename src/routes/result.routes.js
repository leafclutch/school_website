const router = require("express").Router();
const { checkResult } = require("../controllers/result.controller");

router.post("/check", checkResult);

module.exports = router;
