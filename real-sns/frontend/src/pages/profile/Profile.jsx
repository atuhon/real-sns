import React from "react";
import "./Profile.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";

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
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          {/* Topの方が背景画像 */}
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
              <img src="assets/person/1.jpeg" alt="" className="profileUserImg"/>
              <div className="profileInfo">
                <div className="profileInfoName"><b>Shin Code</b></div>
                <span className="profileInfoDes">概要欄だよ♡</span>
                </div>
            </div>
          </div>
          {/* 同じコンポーネントをページごとの違った表示にする
          1.関数を２つ用意してコードを入れる
          2.propsで呼び出せるようにする
          2.記述を変えたい部分は関数外に出して三項演算子でpropsが存在する場合と存在しない場合に分ける
          
          
          */}
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
