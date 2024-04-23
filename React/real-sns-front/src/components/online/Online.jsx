import React from 'react'

export default function Online({user}) {
  return (
<li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className='profileImg'/>
            <span className="rightbarOnline"></span>
            {/* ↑オンライン表示の〇を作るための空spanタグ */}
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
