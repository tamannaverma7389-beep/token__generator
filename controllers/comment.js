const Comment = require('../models/comment');

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
    const comments = await task.findById({ taskId:req.params.id});
     return res.json(comments);
};

async function updateComment(req, res) {
    const commentUpdate = await Update.findByIdAndUpdate(req.params.id , req.body, {new: true });
    return res.json({status: 'success'});
};
async function deleteComment(req, res) {
    const commentDelete = await deletes.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};


module.exports =  {
    AddCommentToTask,
     getCommentByTaskId,
     updateComment,
     deleteComment
};