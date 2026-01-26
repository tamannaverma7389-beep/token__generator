const express = require('express');
const router = express.Router();
const { createTask,
    getAllTask,
    getTaskById,
    updateTask,
    deleteTask,
    assignTaskToId,
    changeTaskStatus,} = require('../controllers/task');


router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.post("/create", createTask);
router.patch("/:id", updateTask);
router.delete("/", deleteTask);
router.get("/:id", assignTaskToId);
router.patch("/", changeTaskStatus);

module.exports = router;