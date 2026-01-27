const express = require('express');
const router = express.Router();
const {AddCommentToTask,
     getCommentByTaskId,
     updateComment,
     deleteComment} = require('../controllers/comment');


router.get("/:id", getCommentByTaskId);
router.post("/", AddCommentToTask);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment );

module.exports = router;