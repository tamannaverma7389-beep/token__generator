const Task = require('../models/task');
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service')

async function createTask(req, res) {
    const {title , description , projectId , assignedTo , status  , dueDate }= req.body;
    if (!title || !description || !projectId || !assignedTo || !status || !dueDate )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Task.create({title, description,  projectId, assignedTo, status , dueDate});
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id: result._id});
};
async function getAllTask(req ,res) {
    const allTask =  await Task.find();
    return res.json( {status: 'success'});
};
async function getTaskById(req,res) {
    const taskId = await Task.findById(req.params.id);
    const token = setUser(taskId)
    res.cookie("uid",token);
    return res.json( {status: 'success', data: data});
};

async function updateTask(req, res) {
    await Task.findByIdAndUpdate(req.params.id , req.body, { new: true });
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success', data: data});
};
async function deleteTask(req, res) {
    await Task.findByIdAndDelete(req.params.id);
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success',  data: data});
};
async function assignTaskToId(req, res) {
    await Task.findByIdAndUpdate({assignedTo: req.body.userId});
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success'});
};
async function changeTaskStatus(req, res) {
    await Task.findById(req.params.id , { status : req.body.status });
    const token = setUser()
    res.cookie("uid",token);
    return res.json( {status: 'success'});
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