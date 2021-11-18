import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const {dispatch, isFeatching } = useContext(Context);

  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={loginSubmit}>
        <label>username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFeatching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
