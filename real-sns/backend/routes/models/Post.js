const mongoose=require("mongoose");

const Post=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max:200,
    },
        img:{
            type:String
        },
    
        like:{
            type:Array,
            default:[]},
        

    },


    {timestamps:true}



)
module.exports=mongoose.model("Post",Post);
