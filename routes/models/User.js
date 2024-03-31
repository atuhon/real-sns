
const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({//schemaプロパティを使用する事でデータベースの定義ができる
username:{
    type:String,
    required:true,
    min:3,
    max:25,
    unique:true,
},
email:{
    type:String,
    required:true,
    max:50,
    unique:true,
},
password:{
    required:true,
    type:String,
    min:6,
    max:50,
},
profilePicture:{
type:String,
default:"",
},
coverPicture:{
type:String,
default:"",
},
followers:{
    type:Array,
    default:[],
},
following:{
    type:Array,
    default:[],
},
isAdmin:{
        type:Boolean,
        default:false,
},
desc:{
    type:String,
},
city:{
    type:String,
    max:50,
},


},
{
    timestamps:true},)
    module.exports =mongoose.model("user",UserSchema);//model作成のために変更
/**
 * required→必ず必要
 * timestamps→別かっこで括る
 */