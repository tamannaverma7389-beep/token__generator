const Comment = require('../models/comment');

async function AddCommentToTask(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.taskId ||
        !body.userId ||
        !body.message
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Comment.create({
      taskId : body.taskId,
      userId: body.userId,
      message: body.message,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getCommentByTaskId(req,res) {
    const taskId = await task.findById(req.params.id);
    if(!taskId) return res.status(404).json({error: "user not found"});
     return res.json(taskId);
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