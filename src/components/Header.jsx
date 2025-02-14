import React, { useState, useRef, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/jot.svg";
import pp from "../assets/images/default.jpg";
import { useTranslation } from "react-i18next";
import berber from "../assets/images/berber.png";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const searchBarInp = useRef(null);
  const [searchBar, setSearchBar] = useState(false);
  const searchBtn = useRef(null);
  const searchBarInp2 = useRef(null);
  const searchBtn2 = useRef(null);
  const [searchIconClass, setSearchIconClass] = useState("bi-search");
  const [headerProfile, setHeaderProfile] = useState(false);
  const menuBtn = useRef(null);
  const [menuIconClass, setMenuIconClass] = useState("bi-list");

  const Navigate = useNavigate();

  const profile = useRef(null);
  const dropper = useRef(null);
  const [dropIconClass, setDropIconClass] = useState("bi-caret-down dropper");
  const sub = localStorage.getItem("sub") || null;

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleSearchBar = () => {
    if (searchBarInp.current) {
      searchBarInp.current.style.display = searchBar ? "none" : "inline-block";
      setSearchBar(!searchBar);
      setSearchIconClass(searchBar ? "bi-search" : "bi-x-lg");
    }
  };

  const toggleSearchBar2 = () => {
    if (searchBarInp2.current) {
      searchBarInp2.current.style.display = searchBar ? "none" : "inline-block";
      setSearchBar(!searchBar);
      setSearchIconClass(searchBar ? "bi-search" : "bi-x-lg");
    }
  };

  const menu = useRef(null);

  const toggleMenu = () => {
    if (menu.current) {
      menu.current.style.display =
        menuIconClass === "bi-list" ? "block" : "none";
      setMenuIconClass(menuIconClass === "bi-list" ? "bi-x" : "bi-list");
    }
  };

  const dropProfile = () => {
    if (profile.current) {
      profile.current.classList.toggle("dropped");
      setHeaderProfile(!headerProfile);
      setDropIconClass(
        headerProfile ? "bi-caret-down dropper" : "bi-caret-up dropper"
      );
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header position="static" className="header">
      <img src={logo} alt="Joteya logo" className="header-logo" />
      <div className="right-header">
        <div className="auth-btns">
          <input
            type="text"
            className="search-input"
            placeholder={t("Search for products")}
            style={{
              borderRadius: "4px",
              marginRight: "10px",
              display: "none",
            }}
            id="searchBarInp"
            ref={searchBarInp}
          />
          <Button
            className="lang-btn"
            id="searchBtn"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
            onClick={toggleSearchBar}
          >
            <i className={`bi ${searchIconClass}`} ref={searchBtn}></i>
          </Button>

          <Button
            className="lang-btn no-mobile"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
            onClick={handleClick}
          >
            <i className="bi bi-translate"></i>
          </Button>

          <Button
            className="lang-btn no-mobile"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
            component={Link}
            to="/cart"
          >
            <i className="bi bi-cart"></i>
          </Button>

          <Menu
            className="no-mobile"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => changeLanguage("en")}>
              {t("")}
              <span className="fi fi-us" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("fr")}>
              {t("")}
              <span className="fi fi-fr" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("ar")}>
              {t("")}
              <span className="fi fi-sa" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("dar")}>
              {t("")}
              <span className="fi fi-ma" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("ber")}>
              {t("")}
              <img src={berber} className="berber-flag" alt="Berber" />
            </MenuItem>
          </Menu>
          <Button
            className="lang-btn no-mobile"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
          >
            <i className="bi bi-bell"></i>
          </Button>
          {!sub && (
            <>
              <Button
                component={Link}
                to="/login"
                className="auth-btn"
                sx={{
                  textTransform: "none",
                  color: "inherit",
                  minWidth: "130px",
                }}
              >
                <i className="bi bi-person-up"></i>
                {t("Login")}
              </Button>

              <Button
                component={Link}
                to="/register"
                className="auth-btn"
                sx={{
                  textTransform: "none",
                  color: "inherit",
                  minWidth: "130px",
                }}
              >
                <i className="bi bi-person-plus"></i>
                {t("Register")}
              </Button>
            </>
          )}
        </div>
        {sub && (
          <div
            className="header-profile"
            onClick={dropProfile}
            onBlur={dropProfile}
          >
            <div className="profile-inner">
              <div className="header-pp">
                <img src={pp} alt="profile" className="header-pp-img" />
              </div>
              <div className="profile-text">
                <h3 className="profile-name">{user.name}</h3>
                <p className="profile-email">{user.email}</p>
              </div>
              <i class={dropIconClass} useRef={dropper}></i>
            </div>
            <div className="drop" ref={profile}>
              <Link to="/profile" className="drop-item">
                <i className="bi bi-person"></i>
                {t("Profile")}
              </Link>
              <Link to="/settings" className="drop-item">
                <i className="bi bi-gear"></i>
                {t("Settings")}
              </Link>
              <Link to="/logout" className="drop-item">
                <i className="bi bi-box-arrow-right"></i>
                {t("Logout")}
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mobile-search">
        <input
          type="text"
          className="search-input"
          placeholder={t("Search for products")}
          style={{
            borderRadius: "4px",
            marginRight: "10px",
            display: "none",
          }}
          id="searchBarInp"
          ref={searchBarInp2}
        />
        <Button
          className="lang-btn"
          sx={{
            color: "white",
            width: "50px",
            hight: "50px",
            minHeight: "unset",
            minWidth: "unset",
          }}
          onClick={toggleSearchBar2}
        >
          <i className={`bi ${searchIconClass}`} ref={searchBtn2}></i>
        </Button>
      </div>
      <div className="mobile-menu">
        <Button
          className="lang-btn"
          id="menuBtn"
          sx={{
            color: "white",
            width: "50px",
            hight: "50px",
            minHeight: "unset",
            minWidth: "unset",
          }}
          onClick={toggleMenu}
        >
          <i className={`bi ${menuIconClass}`} ref={menuBtn}></i>
        </Button>
        <div className="mobile-menu-inner" ref={menu}>
          <Button
            className="lang-btn"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
            onClick={handleClick}
          >
            <i className="bi bi-translate"></i>
          </Button>

          <Button
            className="lang-btn"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
            component={Link}
            to="/cart"
          >
            <i className="bi bi-cart"></i>
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => changeLanguage("en")}>
              {t("")}
              <span className="fi fi-us" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("fr")}>
              {t("")}
              <span className="fi fi-fr" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("ar")}>
              {t("")}
              <span className="fi fi-sa" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("dar")}>
              {t("")}
              <span className="fi fi-ma" style={{ padding: "2px" }}></span>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("ber")}>
              {t("")}
              <img src={berber} className="berber-flag" alt="Berber" />
            </MenuItem>
          </Menu>
          <Button
            className="lang-btn"
            sx={{
              color: "white",
              width: "50px",
              hight: "50px",
              minHeight: "unset",
              minWidth: "unset",
            }}
          >
            <i className="bi bi-bell"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
