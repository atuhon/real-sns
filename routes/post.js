
const postRoute=require("express").Router();

postRoute.get("/",(req,res)=>{//"/"→useで使用しているパスの後ろに続けるエンドポイント
    res.send("postrouter")
    
})
module.exports=postRoute