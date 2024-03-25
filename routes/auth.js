

const authRoute=require("express").Router();
const User = require("./models/User");


//ユーザー登録
authRoute.post("/register",async (req,res)=>{
        try{
             const newUser= new User({
        //登録する内容を記述
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
        
             }
             );//リクエストで送信する
            const user= await newUser.save();
            return res.status(200).json(user);//jsonで登録されたユーザを返す
        
        
        }catch(err){
            return res.status(500).json(err)
        }
        })

     authRoute.post("/login",async(req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email});//非同期処理注意
            console.log("ユーザ情報"+user)
            if(!user)return res.status(404).send("ユーザが見つかりません")//文字列を返すときにはsendを使う
            const validPassword=req.body.password===user.password;//パスワードの一致確認
             console.log("ここにパスワードが入ってる"+user.password);//
            if(!validPassword) return res.status(400).json("パスワードが違います。")
            return res.status(200).json(user);
            
            


        }catch(e){
            return res.status(500).json(e);




        }


     })
        module.exports=authRoute
    

