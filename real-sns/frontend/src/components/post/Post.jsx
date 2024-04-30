import React, { useState } from "react";
import "../post/post.css";
import { Users } from "../../dummyData";
import MoreVert from "@mui/icons-material/MoreVert";

export default function Post({post}) {
  const [like,setLike]=useState(post.like);//いいねが押された数をカウントする、初期値はlikeの数
  const [isLiked,setIslike]=useState(false);// いいねが押された
  const [backgroundColor,setBackgroundColor]=useState({"backgroundColor":"#0f0a95"});
  
  const user=Users.filter((user)=>user.id===1)
  /*
  filter関数⇒条件に適合する値を残す
  Users.filter((user)=>user.id===post.id)[0].id
  [0]→fileterで条件指定を行った配列から要素番号を選択
  .id→その配列のidを抽出
*/
 

const handleLike=()=>{
  setLike(isLiked ? like -1:like+1);
  setIslike(!isLiked)//いいねを押したら動作を逆にする。
  setBackgroundColor();



}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user)=>user.id===post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{Users.filter((user)=>user.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
          <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" className="likeIcon"onClick={()=>handleLike()} />
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
