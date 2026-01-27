 const { getUser } = require("../service/auth");
 async function registerUser(req,res,next) {
    const userUid = req.cookie?.uid;

    if (!userUid) return res.json('/login');
    const user = getUser(token);

    if(!user) return res.json('/login');

    req.user = user;
    next();
}
 async function loginUser(req,res,next) {
    const userUid = req.cookie?.uid;

    if (!userUid) return res.json('/login');
    const user = getUser(token);

    if(!user) return res.json('/login');

    req.user = user;
    next();
 }    
 async function getLoggedInUserProfile(req,res,next) {
    const userUid = req.cookie?.uid;

    if (!userUid) return res.json('/login');
    const user = getUser(token);

    if(!user) return res.json('/login');

    req.user = user;
    next();
 }    
  async function changepassword(req,res,next) {
    const userUid = req.cookie?.uid;

    if (!userUid) return res.json('/login');
    const user = getUser(token);

    if(!user) return res.json('/login');

    req.user = user;
    next();
 } 

 module.exports = {
    registerUser,
    loginUser,
    getLoggedInUserProfile,
    changepassword, 
 }