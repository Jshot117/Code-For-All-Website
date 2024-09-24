// src/components/Callback.js

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // import useUser hook

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useUser(); // get setUser from context

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    console.log("Code:", code);

    if (code) {
      fetch(`https://server.rakibshahid.com/callback?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            console.log("Logged in successfully as:", data.user.global_name);
            console.log("User id:", data.user.id);
            console.log("User avatar:", data.user.avatar);
            // Store token and user data in local storage
            localStorage.setItem("access_token", data.access_token);
            setUser(data.user); // Store user in context
            navigate("/"); // Redirect to home or any other page after successful login
          } else {
            console.error("Failed to log in:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    }
  }, [location, navigate, setUser]);

  return <div>Loading...</div>;
};

export default Callback;
