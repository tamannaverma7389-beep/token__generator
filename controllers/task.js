const Task = require('../models/task');

async function createTask(req, res) {
    const {title , description , projectId , assignedTo , status  , dueDate }= req.body;
    if (!title || !description || !projectId || !assignedTo || !status || !dueDate )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Task.create({title, description,  projectId, assignedTo, status , dueDate});
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id: task._id});
};
async function getAllTask(req ,res) {
    const allTask =  await Task.find();
      return res.json(allTask);
};
async function getTaskById(req,res) {
    const taskId = await Task.findById(req.params.id);
    return res.json(taskId);
};

async function updateTask(req, res) {
    await Task.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteTask(req, res) {
    await Task.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};
async function assignTaskToId(req, res) {
    const assignTask = await Task.find({assign: result._id});
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