import React from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
import'./home.css'

//rfcショートカット


export default function home() {
  return <>

  <Topbar/>
  <div className="homeContainer">
 <Sidebar/>
<Timeline/>
<Rightbar/>
 </div>


  
  
  </>

}


  


