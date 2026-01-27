const Comment = require('../models/comment');
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service')

async function AddCommentToTask(req, res) {
    const {taskId, userId, message} = req.body;
    if (!taskId || !userId || !message)  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Comment.create({
      taskId,  userId,message,});
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getCommentByTaskId(req,res) {
    const comments = await Comment.findById({ taskId:req.params.id});
    return res.json( {status: 'success'});
};

async function updateComment(req, res) {
    const commentUpdate = await Comment.findByIdAndUpdate(req.params.id , req.body, {new: true });
    const token = setUser(commentUpdate)
    res.cookie("uid",token);
    return res.json( {status: 'success'},req.params.id,req.body, {new:true});
};
async function deleteComment(req, res) {
    const commentDelete = await Comment.findByIdAndDelete(req.params.id);
    const token = setUser(commentDelete)
    res.cookie("uid",token);
    return res.json( {status: 'success'}, req.params.id);
};


module.exports =  {
    AddCommentToTask,
     getCommentByTaskId,
     updateComment,
     deleteComment
};