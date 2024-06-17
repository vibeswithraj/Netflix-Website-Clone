import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Form.css";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/register",
        {
          name,
          email,
          password,
        },
        {
          headers:{
            "Content-Type" : "application/json"
          },
          withCredentials: true,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <div className="bg">
        <form action="" onSubmit={fetchData}>
          <h1>SignUp</h1>
          <div className="email-pass">
          <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="btn-link">
            <button className="btn">signup</button>
            <div className="n-l">
            <p>Already have an account? </p>
              <p>
                <Link className="login" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
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

export default SignIn;
