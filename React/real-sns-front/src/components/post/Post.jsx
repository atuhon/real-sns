import React from 'react'
import '../post/post.css';
import MoreVert from '@mui/icons-material/MoreVert';


export default function Post() {
  return (
    <div className="post">
      <div className="postWarapper">
        <div className="postTop">
          <img src="/assets/person/1.jpeg" alt="" className='postProfileImg' />
          <span className='postUserName'>Shin Code</span>
          <span className='postDate'>5分前</span>
        </div>
        <div className="postright">
          <span>
            <MoreVert/>
          </span>

        </div>
      </div>
    </div>
  )
}
