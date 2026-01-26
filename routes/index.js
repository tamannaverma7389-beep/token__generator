const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const projectRouter = require('./project');
const taskRouter = require('./task');
const teamRouter = require('./team');
const commentRouter = require('./comment');


router.use("/users" , userRouter);
router.use("/team" , teamRouter);
router.use("/task" , taskRouter);
router.use("/project" , projectRouter);
router.use("/comment" , commentRouter);

module.exports = router;