import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LeftNav from "./components/LeftNav";
import InputForm from "./components/InputForm";
import NewsFeed from "./components/NewsFeed";
import ProfileInfo from "./components/ProfileInfo";
import Login from "./components/Login";
import Register from "./components/Register";
import Friends from "./components/Friends";
import SavedPosts from "./components/SavedPosts";
import Notifications from "./components/Notifications";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="profile" element={<ProfileInfo />}></Route>
        <Route path="friends" element={<Friends />}></Route>
        <Route path="saved-posts" element={<SavedPosts />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex h-full bg-blue-50">
      <LeftNav />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="flex flex-col w-2/3">
        <InputForm />
        <NewsFeed />
      </div>
    </>
  );
}
export default App;
