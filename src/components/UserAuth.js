import React from "react";

function userAuth() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 393,
        paddingBottom: 422,
        paddingLeft: 107,
        paddingRight: 106,
        background: "#93C90F",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 24,
          fontFamily: "Pitch Sans",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Succesfully Authenticated
      </div>
    </div>
  );
}

export default userAuth;
