const router=require("express").Router();
const  multer=require("multer");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/imges");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload=multer({storage:storage});//画像UP用API
router.post('/',upload.single("file"), (req,res)=>{
    try{
        return res.status(200).json("画像UPできました")

    }catch(e){
        console.log(e);
    }
})

module.exports=router;
