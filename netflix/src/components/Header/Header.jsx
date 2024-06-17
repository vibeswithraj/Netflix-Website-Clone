import React from "react";
import logo from "../../netflixlogo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { context } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userAllData, setUserAllData } = useContext(context);
  const navigate = useNavigate();

  const handleHamBurger = (e) => {
    e.stopPropagation();
    const btn = document.getElementById("btn");
    const hamBurger = document.querySelector(".ham-burger");
    btn.classList.toggle("toggel-btn");
    hamBurger.classList.toggle("active");
  };

  const nav_link = [
    {
      path: "/tvshows",
      name: "Tv Shows",
    },
    {
      path: "/movies",
      name: "Movies",
    },
    {
      path: "/recently-added",
      name: "Recently Added",
    },
    {
      path: "/mylist",
      name: "My List",
    },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        setUserAllData(null);
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <div className="ham-burger" onClick={handleHamBurger}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="nav">
        <img className="logo" id="logo" src={logo} alt="logo" />
        {userAllData?.name ? (
          <>
            <ul className="nav-links" id="btn">
              {nav_link.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active_nav" : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="btns">
              <h3>UNLIMITED TV SHOWS & MOVIES</h3>
              <Link className="join-now-btn" to="/">
                JOIN NOW
              </Link>
              <button className="sign-in-btn" onClick={handleLogout}>
                LOGOUT
              </button>
              <Link className="pro-btn" to="/account">
                {userAllData?.name || " "}
                <CgProfile className="pro-icon" />
              </Link>
            </div>
          </>
        ) : (
          <Link className="sign-in-btn" to="/register">
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
