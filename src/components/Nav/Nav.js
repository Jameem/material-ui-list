import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"

import "./Nav.css"

function Nav() {
  return (
    <AppBar position="relative" className="nav">
      <Toolbar className="nav__toolbar">
        <Typography variant="h5">EGYM</Typography>
        <MenuOutlinedIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Nav
