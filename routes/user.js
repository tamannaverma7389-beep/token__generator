const express = require('express');
const router = express.Router();
const { getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    createNewUser,
    assignRole,} = require('../controllers/user');


router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", assignRole);

module.exports = router;