import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/login-action";
import { Link } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction(login.username));
  }, []);
  const login = useSelector((state) => state.login);
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <h3>You Logged Out Successfully......<br/></h3>
    <br/>
    <Link
                    to="/login"
                    className="btn btn-outline-success btn-large  float-end  "
                  >
                    LOGIN
                  </Link>
</div>
  );
};

export default Logout;