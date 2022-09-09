import { AppBar, Container, Toolbar } from "@mui/material";
import styles from "./styles.module.scss";

import dynamic from "next/dynamic";
import Title from "./title";

const HeaderContent = dynamic(() => import("./header_content"), { ssr:false });

interface props {
  
}

const Header = (props:props) => {
  
  return (
    <AppBar className={ styles.header } position="fixed">
      <Toolbar className={ styles.header_background }>
        <Container className={ styles.header_container }> 
          <Title/>
          <HeaderContent/>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;