import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="bg-blue-50 flex flex-col items-center py-16 gap-4">
      <div className="text-2xl mb-2">Already Registered? Please Login.</div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border text-xl rounded-md shadow pb-1 pl-1"
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border text-xl rounded-md shadow pb-1 pl-1"
      />
      <button
        type="submit"
        className="border mt-2 py-1 px-5 bg-blue-600 hover:bg-blue-500 text-white text-xl rounded-full"
      >
        Submit
      </button>
      <div className="">
        New User? Please Register{" "}
        <Link to={"/register"} className="underline text-violet-600">
          now
        </Link>
      </div>
    </form>
  );
}

export default Login;
