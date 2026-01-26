const User = require('../models/user');

async function createNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.email ||
        !body.password ||
        !.["Role", "manager"," user"].includes.body
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await User.create({
      name : body.name,
      email: body.email,
      password: body.password,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getAllUser(req ,res) {
    const allDbUser =  await User.find();
      return res.json(allDbUser);
};
async function getUserById(req,res) {
    const Users = await User.findById(req.params.id);
    if(!User) return res.status(404).json({error: "user not found"});
     return res.json(Users);
};

async function updateUser(req, res) {
    const Users = await User.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteUser(req, res) {
    const Users = await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};
async function assignRole(req, res) {
    const Users = await User();
    return res.json({status: 'success'});
};

module.exports =  {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    createNewUser,
    assignRole,
};