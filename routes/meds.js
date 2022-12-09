const express = require("express");
const router = express.Router();
const medsController = require("../controllers/meds");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



router.post("/createMed/:id", ensureAuth, medsController.createMed);



module.exports = router;
