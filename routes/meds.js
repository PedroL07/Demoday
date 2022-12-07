const express = require("express");
const router = express.Router();
const medsController = require("../controllers/meds");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, commentsController.getComment);

router.post("/createMed/:id", ensureAuth, medsController.createMed);

// router.put("/likeComment/:id", commentsController.likePost);

// router.delete("/deleteComment/:id", commentsController.deletePost);

module.exports = router;
