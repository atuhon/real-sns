import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Share from "../share/Share";
import Post from "../post/Post";
// import {Posts} from '../../dummyData';
import axios from "axios";

export default function Timeline({username}) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {

    const fetchpost = async () => {
      const resposnse = username
      ? await axios.get(`/posts/profile/${username}`) 
      : await axios.get("/posts/timeline/6600202b8ad0a06ab42d2f94");

       console.log("TImelineの内容",resposnse.data);
      setPosts(resposnse.data);
    };
    fetchpost();
    // 呼び出す
  }, [username]);

  //? await axios.get(`/posts/profile/${username}`) →post.jsで作成したAPIを使用する。


  //usernameにはProfile.jsxで記述した<Timeline username={username}/>の値が入る




  /**   const resposnse = username
   *  ? await axios.get(`/posts/profile/${username}`) 
      : await axios.get("/posts/timeline/6600202b8ad0a06ab42d2f94");
      usernameが存在するかどうかで表示する内容をログインユーザのみの投稿orフォロー中のユーザも含めるのかを判断する。*/

      /*
       useeffectの第二引数はその値が更新されると再レンダリングされることになる
       [username]の場合はusername更新時に      const resposnse = username
      ? await axios.get(`/posts/profile/${username}`) 
      の部分が再レンダリングされる
       */
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
        {/* Postのオブジェクトの中身を取り出してpostに */}
      </div>
    </div>
  );
}
