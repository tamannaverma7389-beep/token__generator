const Team = require('../models/team');

async function createTeam(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.members ||
        !body.projectId
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Team.create({
      name : body.name,
      member: body.members,
      projectId: body.projectId,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function addMembersToTeam(req ,res) {
    const createTeam =  await teams.Add({name ,member,projectId,});
      return res.json(createTeam);
};
async function getTeamDetailsId(req,res) {
    const teamDetails = await detail.findById(req.params.id);
    if(!teamDetails) return res.status(404).json({error: "user not found"});
     return res.json(teamDetails);
};
async function removeTeam(req, res) {
    const teamRemove = await remove.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};

module.exports =  {
    createTeam,
    addMembersToTeam,
    getTeamDetailsId,
    removeTeam,
};