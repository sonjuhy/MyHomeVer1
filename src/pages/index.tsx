import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mui/material";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createContext, useContext, useMemo, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Home() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
  <div>
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  </div>
  );
}