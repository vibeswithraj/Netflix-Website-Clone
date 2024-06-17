import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Form.css";
import axios from "axios";
import { useContext } from "react";
import { context } from "../App";

const Login = () => {
  const { userAllData, setUserAllData, isAuth, setIsAuth } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password,
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
        //setUserAllData({});
      } else {
        toast.success(data.message);
        setUserAllData(data.user);
        // console.log(data);
        setIsAuth(true);
      }
    } catch (err) {
      setIsAuth(false);
      //setUserAllData({});
      console.log(err);
    }
  }

  if (isAuth && userAllData?.name) {
    navigate("/tvshows");
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
        <form id="form" action="" onSubmit={handleLogin}>
          <h1>Login</h1>
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="btn-link">
            <button className="btn">login</button>
            <div className="n-l">
              <p>New to Netflix?</p>
              <p className="signin">
                <Link className="signin" to={"./register"}>
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
          <div className="des">
            <p>need help?<Link className="up-pass" to={"/updatepassword"}>forgot Password</Link></p>
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

export default Login;
