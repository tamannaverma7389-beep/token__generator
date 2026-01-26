const Project = require('../models/project');

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
    const projects =  await project.find();
      return res.json(projects);
};
async function getProjectById(req,res) {
    const project = await project.findById(req.params.id);
    if(!project) return res.status(404).json({error: "user not found"});
     return res.json(project);
};

async function updateProject(req, res) {
    await project.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteUser(req, res) {
    await project.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};
async function getProjectByUser(req, res) {
    const getUser = await user.find(request.params.user);
    return res.json(getUser, {status: 'success'});
};

module.exports =  {
    createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteUser,
    getProjectByUser,
};