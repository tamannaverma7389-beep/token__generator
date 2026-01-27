const Team = require('../models/team');
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service')

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
    const createTeam =  await Team.findByIdAndUpdate();
    const token = setUser(createTeam)
    res.cookie("uid",token);
    return res.json( {status: 'success',  data: data});
};
async function getTeamDetailsId(req,res) {
    const teamDetails = await Team.findById(req.params.id);
    if(!teamDetails) return res.status(404).json({error: "user not found"});
    const token = setUser(teamDetails)
    res.cookie("uid",token);
    return res.json( {status: 'success', data: data});
};
async function removeTeam(req, res) {
    await Team.findByIdAndDelete(req.params.id);
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success'});
};

module.exports =  {
    createTeam,
    addMembersToTeam,
    getTeamDetailsId,
    removeTeam,
};