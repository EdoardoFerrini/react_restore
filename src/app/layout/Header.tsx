import React from "react";
import { AppBar, Switch } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

function Header({darkMode, handleThemeChange}: HeaderProps) {
  return (
    <>
      <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
          <Typography variant="h6">ReStore</Typography>
        </Toolbar>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </AppBar>
    </>
  );
}

export default Header;
