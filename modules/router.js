const { calculate } = require("./controller");
const router = require("express").Router();

router.post("/", calculate);

module.exports = router;