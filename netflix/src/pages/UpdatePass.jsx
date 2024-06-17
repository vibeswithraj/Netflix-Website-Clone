import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Form.css";
import axios from "axios";
import { useContext } from "react";
import { context } from "../App";

const UpdatePass = () => {
  const { isAuth, setIsAuth } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [verifiedPassword, setVerifiedPass] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:8080/updatepassword",
        {
          email,
          password,
          verifiedPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        // console.log(data);
        setIsAuth(true);
      }
    } catch (err) {
      setIsAuth(false);
      console.log(err);
    }
  }

  if (isAuth) {
    navigate("/login");
  }

  return (
    <>
      <div className="bg-img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <div className="bg">
        <form id="update-form" action="" onSubmit={handleLogin}>
          <h1>Update password</h1>
          <div className="email-pass">
            <input
              type="text"
              name="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="new password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              type="password"
              name="verifiedPassword"
              placeholder="new password"
              value={verifiedPassword}
              onChange={(e) => setVerifiedPass(e.target.value)}
            />
          </div>
          <div className="btn-link">
            <button className="btn">update</button>
            {/*<div className="n-l">
              <p>New to Netflix?</p>
               <p className="signin">
                <Link className="signin" to={"./register"}>
                  Sign up now
                </Link>
              </p>
            </div>*/}
          </div>
          <div className="des">
            <p>need help?</p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePass;
