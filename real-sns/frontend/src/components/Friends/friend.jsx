import React from 'react'

export default function friend({user}) {
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className='sidebarFriends'>
    <img src={REACT_APP_PUBLIC_FOLDER+user.profilePicture} className='sidebarFriendName'/>
    <span>{user.username}</span>
</li>
  )
}
