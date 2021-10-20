const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    mobile:{type:Number,required:true},
    username:{type:String,required:true},
    pass:{type:String,required:true},
    dbms:[{
        testname:{type:String,required:true},
        score:{type:Number,required:true},
    }],
    os:[{
        testname:{type:String,required:true},
        score:{type:Number,required:true},
    }],
    lastdbms:{type:String},
    lastos:{type:String},
    tokens:[{
        token:{type:String,required:true}
    }]
})

const dbmsSchema = new mongoose.Schema({
    testno:{type:Number,required:true},
    questions:[{
        question:{type:String,required:true},
        answer:{type:Number,required:true},
        description:{type:String,required:true}
    }]
})

const osSchema = new mongoose.Schema({
    testno:{type:Number,required:true},
    questions:[{
        question:{type:String,required:true},
        answer:{type:Number,required:true},
        description:{type:String,required:true}
    }]
})

// generating token for user and store in database
userSchema.methods.generateToken = async function(){
    try {
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();   
        return token;
    } catch (error) {
        console.log({error});
    }
}

const User = mongoose.model('USER',userSchema);
const Dbms = mongoose.model('DBMS',dbmsSchema);
const Os = mongoose.model('OS',osSchema);

module.exports = { User , Dbms , Os }; 