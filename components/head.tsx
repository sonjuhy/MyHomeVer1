import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";

import PortfolioContext from "../context/context";
import Head from "next/head";

const pages = ["about", "BackEnd", "Android", "IoT"];

export default function Header() {
  const { prefix }: any = React.useContext(PortfolioContext);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const fillColor = "#3eccc4";

  return (
    <>
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <meta property="og:image" content={`${prefix}/profile.png`} />
        <meta property="og:title" content={"Sonjuhy Portfolio"} />
        <meta property="og:description" content="Development History Store" />
        <meta property="og:type" content="website" />
      </Head>
      <AppBar position="fixed" color="wnb" style={{ top: "0", zIndex: "1000" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href={`${prefix}`}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  flexGrow: 0,
                  fontFamily: "default",
                  fontWeight: 500,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                MyHome Ver.1
              </Typography>
            </Box>
            <Box
              sx={{ flexGrow: 5, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      noWrap
                      component="a"
                      href={`${prefix}${page}`}
                      sx={{ color: "inherit" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MyHome Ver.1
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={`${prefix}${page}`}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
