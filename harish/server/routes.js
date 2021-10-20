const express = require('express');
const router = express.Router();
const { User , Dbms , Os } = require('./model/schema');
const authenticateUser = require('./middlewares/authenticate');

router.get('/',(req,res)=>{
    res.send("server is created successfully");
})

//registration
router.post('/registration',async (req,res)=>{
    const {name,mobile,username,pass,cpass}=req.body;
    if(!name|| !username|| !mobile|| !pass|| !cpass)
        return res.status(406).json({error:"all field required"})//406 not acceptable

    try{
        const user = await User.findOne({username});
        if(user)
            return res.status(409).json({error:"Username Already Exist"})//409 conflict
        else if(pass!=cpass)
            return res.status(401).json({error:"Password Not Match"})//401 unauthorised
        const temp=new User({name,mobile,username,pass});                
        const newUser = await temp.save();            
        res.status(201).json({messege:"successfully register",newUser});//201 created       
    }
    catch(error)
    {
        res.status(500).json({error:"failed to register",error});
    }
})

//login
router.post('/login',async (req,res)=>{
    const {username,pass}=req.body;
    if(!username|| !pass)
        return res.status(406).json({error:"all field required"})

    try{
        const user = await User.findOne({username});        
        if(!user||user.pass!=pass)
            return res.status(400).json({error:"Invalid username password"})

        const token = await user.generateToken();
        res.status(200).json({message:"user login successfully",user,token});       
    }
    catch(error)
    {
        res.status(500).json({error:"failed to login",error});
    }
})

//logout
router.post('/logout',authenticateUser,async(req,res)=>{    
    try {        
        req.user.tokens=req.user.tokens.filter((ele)=>ele.token!=req.body.token)
        const user = await req.user.save();
        res.status(200).send("successful Logout")
    } catch (error) {
        res.status(500).send({error})
    }
})

//get dbms test 
router.get('/dbms/:testno',async(req,res)=>{
    try {        
        const dbms = await Dbms.findOne({testno:req.params.testno})
        res.status(200).send({dbms})
    } catch (error) {
        res.status(500).json({error})
    }
})

//get Os test 
router.get('/os/:testno',async(req,res)=>{
    try {        
        const os = await Os.findOne({testno:req.params.testno})
        res.status(200).send({os})
    } catch (error) {
        res.status(500).json({error})
    }
})

//login verify
router.post('/verify',async(req,res)=>{    
    try {
        if(!req.body.token)
            return res.status(200).send("NO ONE IS ACTIVE")
               
        const decode = jwt.verify(req.body.token,process.env.SECRET_KEY);        
        const user = await User.findOne({_id:decode._id});
        
        if(user)
            return res.status(200).send("USER IS ACTIVE")
        
        
    } catch (error) {
        return res.status(200).send("NO ONE IS ACTIVE")
    }
})
module.exports = router;