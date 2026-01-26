const Task = require('../models/task');

async function createTask(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.title ||
        !body.description ||
        !body.projectId ||
        body.assignedTo ||
        body.status ||
        body.dueDate
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Task.create({
        title: body.title,
        description: body.description,
        projectId: body.projectId,
        assignedTo: body.assignedTo,
        status: body.status ,
        dueDate: body.dueDate,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getAllTask(req ,res) {
    const allTask =  await task.find();
      return res.json(allDbUser);
};
async function getTaskById(req,res) {
    const taskId = await task.findById(req.params.id);
    if(!User) return res.status(404).json({error: "user not found"});
     return res.json(Users);
};

async function updateTask(req, res) {
    const taskUpdate = await task.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteTask(req, res) {
    const taskDelete = await task.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};
async function assignTaskToId(req, res) {
    const assignTask = await task.find({assign: result._id});
    return res.json({status: 'success'});
};
async function changeTaskStatus(req, res) {
    const Users = await User.findById(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
module.exports =  {
    createTask,
    getAllTask,
    getTaskById,
    updateTask,
    deleteTask,
    assignTaskToId,
    changeTaskStatus,
};