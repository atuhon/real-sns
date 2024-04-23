import React from 'react'

export default function friend({user}) {
  return (
    <li className='sidebarFriends'>
    <img src={user.profilePicture} className='sidebarFriendName'/>
    <span>{user.username}</span>
</li>
  )
}
