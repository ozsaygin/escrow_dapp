import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = ({ account }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Escrow Dapp</Typography>
        <Typography variant="h6" style={{ marginLeft: "100px" }}>
          {account}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
