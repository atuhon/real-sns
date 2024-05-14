import React, { useEffect, useState } from "react";
import axios from "axios"
import "../post/post.css";
// import { Users } from "../../dummyData";
import MoreVert from "@mui/icons-material/MoreVert";

export default function Post({ post }) {
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  
  const [like,setLike]=useState(post.like);//いいねが押された数をカウントする、初期値はlikeの数
  const [isLiked,setIslike]=useState(false);// いいねが押された
  const [user,setUser]=useState({})  //user情報取得のためオブジェクト型で設定する。

    // useEffectには直接asyncを付ける事ができないため、内部にもう一つ関数を作成する
  useEffect(()=>{
    const fetchuser=async ()=>{
     try{ const resposnse=await axios.get(`/users/${post.userId}`)
      setUser(resposnse.data);
      console.log(post.userId)
    }
      catch(e){
        console.log("エラー")

      }
    }
    fetchuser()
    // 呼び出す
  },[])

  /*
  filter関数⇒条件に適合する値を残す
  Users.filter((user)=>user.id===post.id)[0].id
  [0]→fileterで条件指定を行った配列から要素番号を選択
  .id→その配列のidを抽出
*/
 

const handleLike=()=>{
  setLike(isLiked ? like -1:like+1);
  setIslike(!isLiked)//いいねを押したら動作を逆にする。
  // setBackgroundColor();



}
// console.log(post.userId)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
            // プロフィール写真が存在する場合はそれを適用して、ない場合はデフォルトの画像を適用する。
              src={ user.profilePicture ||REACT_APP_PUBLIC_FOLDER+ "/person/noAvatar.png"}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={REACT_APP_PUBLIC_FOLDER+post.photo} alt="" className="postImg" />
          <div className="postBottom">
          <div className="postBottomLeft">
            <img src={REACT_APP_PUBLIC_FOLDER+"/heart.png"} className="likeIcon"onClick={()=>handleLike()} />
            <span className="postLoleCounter">{like}人がいいねを押しました</span>
          </div>
          <div className="postBottomright">
            <span className="postCommentText">{post.comment}:コメント</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
