import React from "react";
import "../post/post.css";
import MoreVert from "@mui/icons-material/MoreVert";

export default function Post({post}) {
  console.log(post)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">Shin Code</span>
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
            <img src="./assets/heart.png" className="likeIcon" />
            <span className="postLoleCounter">{post.like}人がいいねを押しました</span>
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
