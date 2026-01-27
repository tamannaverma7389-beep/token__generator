 const { getUser } = require("../service");
 async function authMiddleware(req,res,next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.json('/');
    const user = getUser(userUid);

    if(!user) return res.json('/');

    req.user = user;
    next();
}
 async function loginController(req,res,next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.json('/');
    const user = getUser(userUid);

    if(!user) return res.json('/');

    req.user = user;
    next();
 }    
 async function registerController(req,res,next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.json('/');
    const user = getUser(userUid);

    if(!user) return res.json('/');

    req.user = user;
    next();
 }    


 module.exports = {
     authMiddleware,
     loginController,
     registerController,
 }