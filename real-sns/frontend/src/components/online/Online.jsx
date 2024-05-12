import React from 'react'

export default function Online({user}) {
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  return (
<li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
            <img src={REACT_APP_PUBLIC_FOLDER+user.profilePicture} alt="" className='profileImg'/>
            <span className="rightbarOnline"></span>
            {/* ↑オンライン表示の〇を作るための空spanタグ */}
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
