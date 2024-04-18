import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className='starImg'/>
          <span className="enentText">
            <b>フォロワー限定</b>イベント開催中</span>
        </div>
        <img src="assets/ad.jpeg" alt="" className='eventImg'/>
        <h4 className='rightTitle'>オンラインの友達</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
            <img src="assets/person/1.jpeg" alt="" className='profileImg'/>
            <span className="rightbarOnline"></span>
            {/* ↑オンライン表示の〇を作るための空spanタグ */}
            </div>
            <span className="rightbarUsername">Shin Code</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
            <img src="assets/person/2.jpeg" alt="" className='profileImg'/>
            <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tanaka</span>
          </li>
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="./assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className="promotionName">ショッピング</p>

        <img src="./assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className="promotionName">カーショップ</p>

        <img src="./assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className="promotiohName">ShinCode株式会社</p>


      </div>
    </div>
  )
}
