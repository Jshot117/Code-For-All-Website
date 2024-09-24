// src/components/ProtectedRoute.js

import React from "react";
// import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";

const ProtectedRoute = ({ component: Component }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "24px",
        }}
      >
        Log in with Discord!
      </div>
    );
  }

  return <Component />;
};

export default ProtectedRoute;
