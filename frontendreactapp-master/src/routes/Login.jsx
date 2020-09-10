import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../context/auth";

import { requestLogin } from "../api/databaseAPI";

import { GOOGLE_SIGNIN_CLIENT_ID } from "../config";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const { signedIn, info: authInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [error, setError] = useState(signedIn ? "" : "Awaiting login attempt");

  const handleLogin = async (res) => {
    const loginEmail = res.profileObj.email;
    console.log("Email: ", loginEmail);

    const loginResponse = await requestLogin({ email: loginEmail });
    if (loginResponse.ok) {
      const newAuthInfo = await loginResponse.json();
      setError("login successful");
      dispatch(signIn(newAuthInfo));
    } else {
      setError("login failed");
      dispatch(signOut());
    }
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <>
      {authInfo
        ? `Already logged in as ${authInfo.email}, but you can log in again`
        : "Please Login:"}
      <div id="error">{error}</div>
      <div>
        <GoogleLogin
          clientId={GOOGLE_SIGNIN_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={onFailure}
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
      </div>
    </>
  );
};

export default Login;
