import React from "react";
import "./Header.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
          alt="NETFLIX"
        />
        <span>
          Browse <ArrowDropDownIcon />
        </span>
        <span>DVD</span>
      </div>

      <div className="header__right">
        <span>
          <SearchIcon /> Search
        </span>
        <span>
          <NotificationsIcon />
        </span>
        <span>
          <Avatar
            src="https://uploads.scratch.mit.edu/users/avatars/1182/0844.png"
            style={{ borderRadius: "0", marginRight: "5px" }}
          />
          Jhon Doe
          <ArrowDropDownIcon />
        </span>
      </div>
    </div>
  );
}

export default Header;
