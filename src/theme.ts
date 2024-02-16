// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = useMemo(
  () =>
    createTheme({
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }),
  [prefersDarkMode],
);

// const theme = createTheme({
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },
//   palette: {
//     mode: 'dark',
//   },
// });

export default theme;
