const User = require('../models/user');
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service')

async function createNewUser(req, res) {
    const { name ,email ,password ,role }= req.body;
    if (!name || !email || !password || role && !["admin", "manager"," user"].includes(role) )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await User.create({
      name : name,
      email: email,
      password: password,
      role: role || "user", 
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function getAllUser(req ,res) {
    const allDbUser =  await User.find();
    const token = setUser(allDbUser)
    res.cookie("uid",token);
    return res.json(allDbUser);
};
async function getUserById(req,res) {
    const Users = await User.findById(req.params.id);
    if(!User) return res.status(404).json({error: "user not found"})
    const token = setUser(Users)
    res.cookie("uid",token);
    return res.json(Users);
};

async function updateUser(req, res) {
    const Users = await User.findByIdAndUpdate(req.params.id , req.body, { new: true });
    const token = setUser(Users)
    res.cookie("uid",token);
    return res.json( req.params.id,req.body, {new:true} ,{status: 'success', });
};
async function deleteUser(req, res) {
    const Users = await User.findByIdAndDelete(req.params.id);
    const token = setUser(Users)
    res.cookie("uid",token);
    return res.json( {status: 'success',  data: data});
};
async function assignRole(req, res) {
    const Users = await User();
    const token = setUser(Users)
    res.cookie("uid",token);
    return res.json( {status: 'success'} ,{ assignRole: role});
};

module.exports =  {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    createNewUser,
    assignRole,
};