import React from "react";
import "../post/post.css";
import MoreVert from "@mui/icons-material/MoreVert";

export default function Post() {
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
            <span className="postDate">5分前</span>
          </div>
          <div className="postright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNSを自作中です</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
          <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" className="likeIcon" />
            <span className="postLoleCounter">5人がいいねを押しました</span>
          </div>
          <div className="postBottomright">
            <span className="postCommentText">4:コメント</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
