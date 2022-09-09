import { Container, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import Header from "@/components/header";
import theme from "../styles/theme";

import "@/styles/globals.scss"; 
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ theme }>
      <Header/>
      
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;