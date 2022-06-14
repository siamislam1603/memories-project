import { Avatar, Button, Card, message } from "antd";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { LockOutlined } from "@ant-design/icons";
import SignUpForm from "./SignUpForm";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp,setIsSignUp]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className="d-flex justify-content-center my-5">
      <Card
        style={{
          width: 300,
        }}
      >
        <div className="d-flex justify-content-center">
          <Avatar
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
            size='large'
          >
            <LockOutlined/>
          </Avatar>
        </div>
        {isSignUp ? 
        <>
          <h5 className="text-center mt-2">Sign Up</h5>
          <SignUpForm/>
          <GoogleOAuthProvider clientId="833373384072-dtqgo1c2v5qnp7iv2ha28b9cufsn3at9.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={({credential}) => {
                dispatch({type:'user_login',payload:{...jwt_decode(credential),isGoogleLogin:true}});
                navigate('/');
              }}
              onError={() => {
                message.error('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
          <div className='d-flex justify-content-end align-items-center'><small>ALREADY HAVE AN ACCOUNT?</small> <Button type="link" onClick={()=>setIsSignUp(!isSignUp)}>SIGN IN</Button></div>
        </> 
        : <>
            <h5 className="text-center mt-2">Sign In</h5>
            <SignInForm/>
            <GoogleOAuthProvider clientId="833373384072-dtqgo1c2v5qnp7iv2ha28b9cufsn3at9.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={({credential}) => {
                  dispatch({type:'user_login',payload:{...jwt_decode(credential),isGoogleLogin:true}});
                  navigate('/');
                }}
                onError={() => {
                  message.error('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
            <div className="d-flex justify-content-end align-items-center"><small>DON'T HAVE AN ACCOUNT?</small> <Button type="link" onClick={()=>setIsSignUp(!isSignUp)}>SIGN UP</Button></div>
        </>}
      </Card>
    </div>
  );
};

export default Auth;
