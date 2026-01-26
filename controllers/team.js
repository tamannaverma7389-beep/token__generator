const Team = require('../models/team');

async function createTeam(req, res) {
    const {name, members, projectId} = req.body;
    if (!name || !members || !projectId)  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Team.create({ name, members, projectId });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function addMembersToTeam(req ,res) {
    const createTeam =  await Team.Add({name ,members,projectId});
      return res.json(createTeam);
};
async function getTeamDetailsId(req,res) {
    const teamDetails = await Team.findById(req.params.id);
    if(!teamDetails) return res.status(404).json({error: "user not found"});
     return res.json(teamDetails);
};
async function removeTeam(req, res) {
    await remove.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};

module.exports =  {
    createTeam,
    addMembersToTeam,
    getTeamDetailsId,
    removeTeam,
};