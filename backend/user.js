const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    firstname:{type:String}
})

module.exports=mongoose.model("User",userSchema)

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
//     email: {
//         type: String,
//         unique: true,
//         lowercase: true
//     },
//     password: String
// });

// module.exports =  mongoose.model('User', UserSchema)