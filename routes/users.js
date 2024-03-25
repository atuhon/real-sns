//user.js→ユーザ情報の更新、削除など
const route = require("express").Router();
const mongoose = require("mongoose");
const User = require("./models/User");
//CRUD操作

//更新
route.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try{

        const user=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
            
        })
        res.status(200).json("情報更新されました")
    }catch(e){
        console.log(req.params.id,req.body.userId,req.body)
        console.log(req.body.userId === req.params.id || req.body.isAdmin)
      return res.status(500).json("サーバーエラー");
    }
  } else {
    return res
      .status(403)
      .json("あなたは自分のアカウントのみ情報更新が可能です。");
  }
});
//ユーザ情報削除
route.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try{
  
          const user=await User.findByIdAndDelete(req.params.id)
          res.status(200).json("削除されました")
      }catch(e){
          console.log(req.params.id,req.body.userId,req.body)
          console.log(req.body.userId === req.params.id || req.body.isAdmin)
        return res.status(500).json("サーバーエラー");
      }
    } else if(User.userId ===null){
        return res.status(500).json("IDが存在しません")

    }else {
      return res
        .status(403)
        .json("あなたは自分のアカウントのみ削除が可能です");
    }
  });
//ユーザ情報の取得（タイムラインの表示（第三者でも閲覧可能部分））
route.get("/:id", async (req, res) => {
//ifを消してidでの認証を行わない。
    try{

        const user=await User.findById(req.params.id)
      const {password,updatedAt,...other}=user._doc;
           //_doc⇒変更後のデータを出力する
           /*userの配列は元データのため、分割代入で新たな配列を作成してもその変更を受けない
             そのため、userの値は変わらない
           */
        
      res.status(200).json(other)//idに紐づいたユーザ情報の表示
    }catch(e){

      return res.status(500).json("サーバーエラー");
    }
});


module.exports=route
/**
 * :id→動的なidの設定
 * params→パラメータのidを設定
 *$set→スキーマ要素を全て指定
 */
