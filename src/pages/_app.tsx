import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from "next/font/google";

import Header from '@/pages/head';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
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
  return <div>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppRouterCacheProvider>
  </div>
}
