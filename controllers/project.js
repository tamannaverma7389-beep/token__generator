const Project = require('../models/project');

async function createProject(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.title ||
        !body.description ||
        !body.createdBy ||
        !body.status
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Project.create({
      title : body.title,
      description: body.description,
      CreatedBy: body.createdBy,
      status: body.status,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getAllProject(req ,res) {
    const allProject =  await project.find();
      return res.json(allDbUser);
};
async function getProjectById(req,res) {
    const ProjectId = await projectid.findById(req.params.id);
    if(!ProjectId) return res.status(404).json({error: "user not found"});
     return res.json(ProjectId);
};

async function updateProject(req, res) {
    const Update = await update.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteUser(req, res) {
    const Delete = await deletes.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};
async function getProjectByUser(req, res) {
    const getUser = await user.find(request.params.user);
    return res.json({status: 'success'});
};

module.exports =  {
    createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteUser,
    getProjectByUser,
};