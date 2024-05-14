const postRoute = require("express").Router();
const Post = require("./models/Post");
const User = require("./models/User");

postRoute.post("/", async (req, res) => {
  //→useで使用しているパスの後ろに続けるエンドポイント
  const postRoute = new Post(req.body);
  /**
   * newする（インスタンス化）→クラスからインスタンス（実体）を作る
   * Post(req.body)には入力したbodyの内容が入ってくる、
   * この際 required:true,になっているuserIdを含める事で
   * 誰が投稿したのかを識別する事ができる。
   * */

  try {
    const savedPost = await postRoute.save(); //投稿内容を保存する。
    return res.status(200).json(savedPost);
  } catch (e) {
    return res.status(500).json(e);
  }
});
//投稿内容の更新
postRoute.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    const updatepost = await post.updateOne({
      $set: req.body,
    });

    res.status(200).json("投稿に成功しました");
  } else {
    return res.status(403).json("アカウントにログインしてください。");
  }
});

//投稿内容の削除
postRoute.delete("/:id/delete", async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (req.body.userId === post.userId || req.body.isAdmin) {
    try {
      const deletePost = await Post.deleteOne();

      res.status(200).json("削除されました");
    } catch (e) {
      return res.status(500).json("サーバーエラー");
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントのみ削除が可能です");
  }
});
//idを一つだけ取得
postRoute.get("/:id", async (req, res) => {
  //ifを消してidでの認証を行わない
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (e) {
    return res.status(500).json("サーバーエラー");
  }
});
//特定の投稿に「いいね」を押す

postRoute.put("/:id/like", async (req, res) => {

  const post = await Post.findById(req.params.id);
  console.log(post)
 
  try {
    if (!post.like.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          like: req.body.userId,
        }, 
      });

      return res.status(200).json("お気に入り登録しました");
    }else{ 
      await post.updateOne({
        $pull:{
          like:req.body.userId
        }})//pull →配列から取り除く

        return res.status(200).json("お気に入り解除しました");
         }
  } catch (e) {
    res.status(500).json(e);
  }
});

//ユーザ情報を取得してタイムラインの内容を取得
postRoute.get("/timeline/:userId",async (req,res)=>{
  try{
    const currentUser=await User.findById(req.params.userId);
    // params→userIdから取得するためreq.paramsを使用して値を取り出す。
    const userPosts= await Post.find({userId:currentUser._id})//currentUserのpost内容をすべて取得している
   console.log(userPosts);

//フォロー中の人の投稿内容を取得する
const friendPosts=await Promise.all(//awaitの値（currentUser）を使う場合はいつ値が取得されるか分からないため、Promise.allでいつでも取得できるように待機しておく
  currentUser.following.map((friendId)=>{
    return Post.find({userId:friendId})
  })
);
return res.status(200).json(userPosts.concat(...friendPosts))
/*concat→配列を結合する 
userPostsにfriendPostsの配列を結合させる
...friendPostで新規に配列として作成する（エラーになる）
*/

  }catch(e){
    return res.status(500).json(e);

  }




})


module.exports = postRoute;
/**
 * 投稿内容の編集
 * 必要情報から考える
 * アカウント情報と投稿者のidが一致
 *
 */
