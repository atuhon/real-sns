import React, { useEffect, useState } from "react";
import "./Profile.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useParams } from "react-router-dom";
//URLのパラメータを取ってくることができる。


/**
 *
 * @returns
 * プロフィール画面の構成
 * 左サイドとその他領域の2コンポーネントで考える
 * 横の数でコンポーネントを変えてる？
 * 上下はTop Bottomで構成
 *
 */
export default function Profile() {
  const [user, setUser] = useState([]);
  const username=useParams().username;
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  //envファイルを使用する場合は一度サーバを落としてから再起動する
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      console.log("Profileの内容",res);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          {/* Topの方が背景画像 */}
          <div className="profileRightTop">
            <div className="profileCover">
             <img src={user.coverPicture||`${REACT_APP_PUBLIC_FOLDER}/post/3.jpeg`}alt="" className="profileCoverImg" />
              <img src={
                user.profilePicture ||
                REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"
              }alt="" className="profileUserImg"/>
              <div className="profileInfo">
                <div className="profileInfoName"><b>{user.username}</b></div>
                <span className="profileInfoDes">{user.desc}</span>
                </div>
            </div>
          </div>
          {/* 同じコンポーネントをページごとの違った表示にする
          1.関数を２つ用意してコードを入れる
          2.propsで呼び出せるようにする
          2.記述を変えたい部分は関数外に出して三項演算子でpropsが存在する場合と存在しない場合に分ける
          
          
          */}
          <div className="profileRightBottom">
            <Timeline username={username}/>
            <Rightbar user={user}/>
          </div>
          {/* Timeline username={username}→この部分を動的にする事でqueryで渡ってきたユーザネームを反映させている */}
        </div>
      </div>
    </>
  );
}
