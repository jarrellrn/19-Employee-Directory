import React from "react";

const navStyle = {
  textAlign: "center",
  fontSize: 40,
  color: "#666",
  marginBottom: 10,
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  justify-content-center">
      <div className="navbar-brand" style={navStyle}>
        Employee Directory
      </div>
    </nav>
  );
}

export default Navbar;
