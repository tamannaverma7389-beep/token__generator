const express = require('express');
const router = express.Router();
const { createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteUser,
    getProjectByUser,} = require('../controllers/project');
const { get } = require('./comment');


router.get("/", getAllProject);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.patch("/:id", updateProject);
router.delete("/delete/:id", deleteUser);
router.get("/:user", getProjectByUser);

module.exports = router;