import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightBar=()=>{
    return (
      <>
   
        <div className="eventContainer">
          <img src={REACT_APP_PUBLIC_FOLDER+"/star.png"} alt="" className='starImg'/>
          <span className="enentText">
            <b>フォロワー限定</b>イベント開催中</span>
        </div>
        <img src={REACT_APP_PUBLIC_FOLDER+"/ad.jpeg"} alt="" className='eventImg'/>
        <h4 className='rightTitle'>オンラインの友達</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user)=>(
    <Online user={user} key={user.id}/>


          ))}
      
          
        
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src=".//promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className="promotionName">ショッピング</p>

        <img src={REACT_APP_PUBLIC_FOLDER+"/promotion/promotion2.jpeg"} alt="" className='rightbarPromotionImg'/>
        <p className="promotionName">カーショップ</p>

        <img src={REACT_APP_PUBLIC_FOLDER+"/promotion/promotion3.jpeg"}alt="" className='rightbarPromotionImg'/>
        <p className="promotiohName">ShinCode株式会社</p>
    </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <h4 RightbarTitle>ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">出身</span>
          <span className="rightbarInfoKey">福岡</span>
        </div>
        <h4 className='rightbarTitle'>あなたの友達</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={REACT_APP_PUBLIC_FOLDER+"/person/2.jpeg"} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>msks</span>
          </div>
          <div className="rightbarFollowing">
            <img src={REACT_APP_PUBLIC_FOLDER+"/person/3.jpeg"} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>kani</span>
          </div>
          <div className="rightbarFollowing">
            <img src={REACT_APP_PUBLIC_FOLDER+"/person/2.jpeg"} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>onon</span>
          </div>
          <div className="rightbarFollowing">
            <img src={REACT_APP_PUBLIC_FOLDER+"/person/2.jpeg"} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>坂戸西</span>
          </div>
          <div className="rightbarFollowing">
            <img src={REACT_APP_PUBLIC_FOLDER+"/person/2.jpeg"} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>沼津北</span>
          </div>
        </div>

      </div>
      </>
    )
  }
  return (
   <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ?<ProfileRightBar/>:<HomeRightBar/>}
      {/* proosの有無で表示コンポーネントを変更している */}
    </div>
   </div>
  )
  //rightbar rightbarWrapperは元々Rightbarコンポーネント内で記述していた
}
