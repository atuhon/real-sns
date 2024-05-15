import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Share from "../share/Share";
import Post from "../post/Post";
// import {Posts} from '../../dummyData';
import axios from "axios";

export default function Timeline({username}) {
  // ユーザのポスト内容をすべて取得
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // useEffectには直接asyncを付ける事ができないため、内部にもう一つ関数を作成する
    const fetchpost = async () => {
      const resposnse = username ? await axios.get(`/posts/profile/${username}`) : await axios.get(
        "/posts/timeline/6600202b8ad0a06ab42d2f94"
      );
      // console.log(resposnse.data);
      setPosts(resposnse.data);
    };
    fetchpost();
    // 呼び出す
  }, []);

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
