import React, { useState } from "react";
import {  Avatar, Button } from "antd";
import { Typography } from "antd";
import { UserOutlined} from "@ant-design/icons";
import { BsFacebook} from "react-icons/bs";
import {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  fbprovider, 

  signOut,
} from "./pages/Firebase/Firebase";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const { Title } = Typography;

const Headers = () => {
  const [chnage, setchangae] = useState("");
  const [update, setupdatebtn] = useState();

  const googlebtn = () => {
    signInWithPopup(auth, provider)
      .then(async(result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user, user.accessToken);
        const requestBody = {
          providor: "GOOGLE",
          email: user.email,
          name: user.displayName, 
          providorId: user.providerId,
        };
  
     
        const requestBodyJSON = JSON.stringify(requestBody);
  
        await fetch("https://adambackend.adaptable.app/adam/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBodyJSON, 
        });;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const fblogin =()=>{
    signInWithPopup(auth, fbprovider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(user)
    console.log(accessToken)
  })
  .catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
  }
  const signOutt = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signout successfull", auth);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <Avatar
        size="large"
        style={{ float: "right", marginRight: "36px", marginTop: "15px" }}
        src="./profile.png"
        icon={<UserOutlined />}
      />
      <Title
        style={{
          textAlign: "center",
          display: "inline",
          marginLeft: "20px",
          color: "white",
        }}
        level={2}
      >
        Dashboard
      </Title>
      <NavLink to={"/login"}>
        {" "}
        <Button
          style={{ float: "right", marginRight: "36px", marginTop: "15px" }}
          className="primary"
        >
          Login
        </Button>
      </NavLink>
      <NavLink>
        {" "}
        <Button
          onClick={() => signOutt()}
          style={{ float: "right", marginRight: "36px", marginTop: "15px" }}
          className="danger"
        >
          Logout
        </Button>
      </NavLink>
      <NavLink>
        {" "}
        <Button
          onClick={() => googlebtn()}
          style={{
            float: "right",
            marginRight: "36px",
            marginTop: "15px",
            fontSize: "16px",
          }}
          className="primary"
        >
          {" "}
          <FcGoogle />
          signing with google
        </Button>
      </NavLink>
      <Button onClick={()=>fblogin()} style={{margin:10,float: "right",marginTop: "15px"}} type="primary" htmlType="submit">
       <BsFacebook/>    facebook login
      </Button>
    </div>
  );
};

export default Headers;
