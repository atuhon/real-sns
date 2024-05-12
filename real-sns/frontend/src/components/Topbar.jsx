import React from "react";
import Search from "@mui/icons-material/Search";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topar() {
  const REACT_APP_PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{listStyle:"none"}}>
        <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="IconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="IconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
            </div>
            {/* 同じ要素名でも一つ一つ指定したほうが良い */}
            <img src={`${REACT_APP_PUBLIC_FOLDER}/person/2.jpeg `}alt="" className="topbarImg" />
          </div>
        
        </div>
      </div>
 
  );
}
