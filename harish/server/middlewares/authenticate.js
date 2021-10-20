const jwt = require('jsonwebtoken');
const { User } = require('../model/schema');

const authenticateUser = async (req,res,next) =>{
    try {        
        if(!req.body.token)
            return res.status(400).send("Login first");
        const decode = jwt.verify(req.body.token,process.env.SECRET_KEY);        
        const user = await User.findOne({_id:decode._id,'tokens.token': req.body.token});      
        if(!user)
            return res.status(400).send("Login first");

        req.user = user; 
        next()        
    } catch (error) {
        return res.status(500).send({error});
    }
}

module.exports = authenticateUser ;