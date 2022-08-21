import { IconButton, List, ListItem } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";

import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

import { useState } from "react";
import Drawer from "../drawer";

const Navigation = () => {
  const [ drawerOpen, setDrawerOpen ] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <nav>
      <List className={ styles.container }>

        <ListItem className={ styles.list } role="search">
          <IconButton >
            <SearchIcon />
          </IconButton>
        </ListItem>

        <ListItem className={ styles.list } role="navigation">
          <IconButton onClick={ openDrawer }>
            <DehazeIcon/>
          </IconButton>
        </ListItem>
        
        <Drawer
          onClose={ closeDrawer }
          onOpen={ openDrawer }
          isOpen={ drawerOpen }
        />
        
      </List>
    </nav>
  );
};

export default Navigation;