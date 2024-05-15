//user.js→ユーザ情報の更新、削除など
const route = require("express").Router();
const mongoose = require("mongoose");
const User = require("./models/User");
//CRUD操作

//更新
route.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("情報更新されました");
    } catch (e) {
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
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("削除されました");
    } catch (e) {
      console.log(req.params.id, req.body.userId, req.body);
      console.log(req.body.userId === req.params.id || req.body.isAdmin);
      return res.status(500).json("サーバーエラー");
    }
  } else if (User.userId === null) {
    return res.status(500).json("IDが存在しません");
  } else {
    return res.status(403).json("あなたは自分のアカウントのみ削除が可能です");
  }
});
//ユーザ情報の取得（タイムラインの表示（第三者でも閲覧可能部分））
// route.get("/:id", async (req, res) => {
// //ifを消してidでの認証を行わない
//     try{

//         const user=await User.findById(req.params.id)
//       const {password,updatedAt,...other}=user._doc;
//            //_doc⇒変更後のデータを出力する
//            /*userの配列は元データのため、分割代入で新たな配列を作成してもその変更を受けない
//              そのため、userの値は変わらない
//            */

//      return res.status(200).json(other)//idに紐づいたユーザ情報の表示
//     }catch(e){

//       return res.status(500).json("サーバーエラー");
//     }
// });
//クエリを使用しidを使用しないため/を指定する。
route.get("/", async (req, res) => {
  //query→?username=以降の文字列を持ってくる
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    //_doc⇒変更後のデータを出力する
    /*userの配列は元データのため、分割代入で新たな配列を作成してもその変更を受けない
               そのため、userの値は変わらない
             */

    return res.status(200).json(other); //idに紐づいたユーザ情報の表示
  } catch (e) {
    return res.status(500).json("サーバーエラー");
  }
});

//ユーザフォロー→putメソッドを使用する。
route.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      console.log(req.params, req.body);
      const user = await User.findById(req.params.id); //相手の情報
      const currentUser = await User.findById(req.body.userId); //自分の情報
      // console.log(currentUser);
      // console.log(user);

      if (!user.followers.includes(req.body.userId)) {
        const setUser = await user.updateOne({
          $push: {
            followers: req.body.userId,
          }, //相手のフォロー欄に自分のIDを格納する(PUTで送るためbodyで書いてるはず)
        });
        //
        await currentUser.updateOne({
          $push: {
            following: req.params.id,
          }, //自分のフォロー欄に相手を格納する
        });
        console.log("値の表示", setUser);
        return res.status(200).json("フォローに成功しました");
      } else {
        return res
          .status(403)
          .json("あなたはすでにこのユーザをフォローしています");
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません");
  }
});
//フォロー解除

route.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id); //相手の情報
      const currentUser = await User.findById(req.body.userId); //自分の情報

      if (user.followers.includes(req.body.userId)) {
        //フォロワーに存在した場合にフォローを外せるため!を消す
        //includes＝配列内に特定の要素が含まれているかどうかを返す。定

        await user.updateOne({
          $pull: {
            followers: req.body.userId,
          }, //pull →配列から取り除く
        });

        await currentUser.updateOne({
          //自分がフォローしている情報
          $pull: {
            followings: req.params.id,
          },
        });

        return res.status(200).json("フォロー解除に成功しました");
      } else {
        return res.status(403).json("このユーザをフォローしていません");
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    return res.status(500).json("自分自身をフォロー解除できません");
  }
});
/**
 * フォローについて
 *
 * どういった条件でフォローできるのか？？
 *  自分以外
 *  ブロックされていない
 * req.body.userId→自分のid
 * !user.followers.includes
 *  →相手のフォロワーを確認して自分自身（req.body.userId）が含まれているかどうかを
 *  includesでtrue falseの判断を行う。
 * includes＝配列内に特手の要素が含まれているかどうかを返す。
 *
 * 具体的な操作
 * 相手のフォロワーを1人増やす
 * フォローを1人増やす
 *
 * */

module.exports = route;
/**
 * :id→動的なidの設定
 * params→パラメータのidを設定
 *$set→スキーマ要素を全て指定
 */
