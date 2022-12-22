const mongoose=require("mongoose");

const blogSchema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:mongoose.Types.ObjectId,ref:'user',required:true},
    category:{type:String,default:"other"},
    date:{type:Date,default:Date.now()}
})


const Blogmodel=mongoose.model("blog",blogSchema);

module.exports={Blogmodel}