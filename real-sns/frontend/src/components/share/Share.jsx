import React, { useContext, useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import '../share/Share.css';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';




export default function Share() {
  const {user}=useContext(AuthContext);
  const [file,setFile]=useState(null);
  console.log(file);
    const desc=useRef();
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  const  handleSubmit=async (e)=>{
    e.preventDefault();//リダイレクトしない
  const newPost={
      userId:user._id,
      desc:desc.current.value,
    }
    if(file){
      const data=new FormData();
      const fileName=Date.now()+file.name;
      data.append("name",fileName);
      data.append('file',file);
      newPost.img=fileName;
      try{
        const imgData=await axios.post("/upload",data);
        console.log("投稿した画像",imgData)

      }catch(e){
        console.log(e)
      }
      //fileが含まれている場合はimagesに保存される
    }
    try{
      await axios.post("/posts",newPost)
      window.location.reload();
      


    }catch(e){
      console.log(e)

    }
  }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={
                  user.profilePicture
                ?REACT_APP_PUBLIC_FOLDER + user.profilePicture
                :REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"
              } 
              alt="" className='shareProfileImg' />
                <input type="text" className='shareInput' placeholder='今何してるの'
                ref={desc}/>
                {/* inputの情報を取得 */}
            </div>
            <hr className='shareHr'/>
            <form className="shareButtons" onSubmit={(e)=>{
              handleSubmit(e)
            }}>
              <div className="shareOptions">
                <label className="shareOption" htmlFor='file'>
                  {/* htmlColor='blue'⇒色を変更できる */}
                  <ImageIcon className='ImageIcon' htmlColor='blue'/>
                  <span className='shareOptionText'>写真</span>
                  <input type="file" id='file' accept='.png,jpeg,jpg' style={{display:"none"}}
                  onChange={(e)=>{setFile(e.target.files[0])}}/>
                </label>
                {/* htmlforとid値が同じであればinpu要素が全体に適用される */}
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
              <button className="shareButton" type='submit'>投稿</button>
            </form>
        </div>
    </div>
  )
}
