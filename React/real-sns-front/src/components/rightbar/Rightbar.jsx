import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData";
import Online from '../online/Online';

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
          {Users.map((user)=>(
    <Online user={user} key={user.id}/>


          ))}
      
          
        
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
