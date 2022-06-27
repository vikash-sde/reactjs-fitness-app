import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from  '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <div>
      <Stack>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>
      </Stack>
    </div>
  );
};

export default Navbar;
