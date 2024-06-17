import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignUp";
import Movies from "../components/Movies";
import TvShow from "../components/TvShow";
import Mylist from "../components/Mylist";
import Login from "./Login";
import RecentlyAdded from "../components/RecentlyAdded";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import Profile from "../components/Profile";
import UpdatePass from "./UpdatePass";

const Home = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/tvshows" element={<TvShow />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mylist" element={<Mylist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login/register" element={<SignIn />} />
        <Route path="/recently-added" element={<RecentlyAdded />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/updatepassword" element={<UpdatePass />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default Home;
