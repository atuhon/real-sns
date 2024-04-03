import React from 'react'
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/SearchOutlined';
import Comment from '@mui/icons-material/CommentOutlined';
import Bookmark from '@mui/icons-material/BookmarkAddedOutlined';
import Person from '@mui/icons-material/Person2Outlined';
import Setting from '@mui/icons-material/SettingsOutlined';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <Home className='sidebarIcon'/>
                    <span className="sidebarListItemText">ホーム</span>
                </li>
                <li className='sidebarListItem'>
                    <Search className='sidebarIcon'/>
                    <span className="sidebarListItemText">検索</span>
                </li>
                <li className='sidebarListItem'>
                    <Comment className='sidebarIcon'/>
                    <span className="sidebarListItemText">ホーム</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">お気に入り</span>
                </li>
                <li className='sidebarListItem'>
                    <Person className='sidebarIcon'/>
                    <span className="sidebarListItemText">プロフィール</span>
                </li>
                <li className='sidebarListItem'>
                    <Setting className='sidebarIcon'/>
                    <span className="sidebarListItemText">設定</span>
                </li>
            </ul>
            <hr className='sidebarHr'/>
            <ul>
                <li className='sidebarFriends'>
                    <img src="React/real-sns-front/public/assets/person/2.jpeg" alt="" 
                    className='sidebarFriendName'/>
                </li>
                <li className='sidebarFriends'>
                    <img src="React/real-sns-front/public/assets/person/2.jpeg" alt="" 
                    className='sidebarFriendName'/>
                </li>
            </ul>

        </div>
    
    </div>
  )
}
