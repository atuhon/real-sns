import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import '../share/Share.css';




export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src='/assets/person/1.jpeg' alt="" className='shareProfileImg' />
                <input type="text" className='shareInput' placeholder='今何してるの'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareButtons">
              <div className="shareOptions">
                <div className="shareOption">
                  {/* htmlColor='blue'⇒色を変更できる */}
                  <ImageIcon className='ImageIcon' htmlColor='blue'/>
                  <span className='shareOptionText'>写真</span>
                </div>
                <div className="shareOption">
                  < GifIcon className='ImageIcon' htmlColor='hotpink'/>
                  <span className='shareOptionText'>GIF</span>
                </div>
                <div className="shareOption">
                  <FaceIcon className='ImageIcon' htmlColor='green'/>
                  <span className='shareOptionText'>気持ち</span>
                </div>
                <div className="shareOption">
                  < AnalyticsIcon className='ImageIcon'/>
                  <span className='shareOptionText'>投票</span>
                </div>
              </div>
              <button className="shareButton">投稿</button>
            </div>
        </div>
    </div>
  )
}
