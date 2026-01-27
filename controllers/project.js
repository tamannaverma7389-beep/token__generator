const Project = require('../models/project');
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service')

async function createProject(req, res) {
    const {title,description, CreatedBy, status} = req.body;
    if ( !title || !description || !CreatedBy || !status)  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Project.create({title , description , CreatedBy, status});
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getAllProject(req ,res) {
    const projects =  await Project.find();
    res.json(projects)
};
async function getProjectById(req,res) {
    const project = await project.findById(req.params.id);
    if(!project) return res.status(404).json({error: "user not found"});
    const token = setUser(project)
    res.cookie("uid",token);
    return res.json( {status: 'success',} ,req.params.id);
};

async function updateProject(req, res) {
    await project.findByIdAndUpdate(req.params.id , req.body, { new: true });
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success'} ,req.params.id,req.body, {new:true});
};
async function deleteUser(req, res) {
    await project.findByIdAndDelete(req.params.id);
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success'});
};
async function getProjectByUser(req, res) {
    const getUser = await user.find(request.params.user);
    const token = setUser(getUser)
    res.cookie("uid",token);
    return res.json( {status: 'success'}, req.params.id, user=user.Id);
};

module.exports =  {
    createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteUser,
    getProjectByUser,
};