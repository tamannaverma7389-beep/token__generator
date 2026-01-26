const express = require('express');
const router = express.Router();
const{ createTeam,
    addMembersToTeam,
    getTeamDetailsId,
    removeTeam,} = require('../controllers/team');


router.get("/:id", getTeamDetailsId);
router.post("/create", createTeam);
router.post("/", addMembersToTeam);
router.delete("/:id", removeTeam);

module.exports = router;