import React from "react";
import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/SearchOutlined";
import Comment from "@mui/icons-material/CommentOutlined";
import Bookmark from "@mui/icons-material/BookmarkAddedOutlined";
import Person from "@mui/icons-material/Person2Outlined";
import Setting from "@mui/icons-material/SettingsOutlined";
import Friend from "../Friends/friend";
import { Users } from "../../dummyData";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Comment className="sidebarIcon" />

            <span className="sidebarListItemText">プロフィール</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">お気に入り</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/:username" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Setting className="sidebarIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendlist">
          {Users.map((user) => (
            <Friend user={user} key={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
