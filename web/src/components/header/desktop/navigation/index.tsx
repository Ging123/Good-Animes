import { List, ListItem, ListItemText } from "@mui/material";
import styles from "./styles.module.scss";

import AnimesMenu from "./animes_menu";
import { useState } from "react";

export type el = null | HTMLElement;

const Navigation = () => {
  const [ openAnimeMenu, setOpenAnimeMenu ] = useState<el>(null);
  const controlId = "animes-to-watch-manu";

  return (
    <nav>
      <List className={ styles.ul }>
        <ListItem className={ styles.list }>
          <ListItemText 
            aria-expanded={ Boolean(openAnimeMenu) ? true : undefined }
            aria-haspopup={ true }
            aria-controls={ Boolean(openAnimeMenu) ? controlId : undefined }
            onClick={ (e) => setOpenAnimeMenu(e.currentTarget) }
            onKeyDown={(e) => {
              if(e.key === "Enter") setOpenAnimeMenu(e.currentTarget);
            }}
            primaryTypographyProps={ { className:styles.list_text } }
            tabIndex={ 0 }
            primary="Animes"
          />
        </ListItem>

        <ListItem className={ styles.list }>
          <ListItemText 
            primaryTypographyProps={ { className:styles.list_text } }
            primary="Genres"
            tabIndex={ 0 }
          />
        </ListItem>

        <ListItem className={ styles.list }>
          <ListItemText 
            primaryTypographyProps={ { className:styles.list_text } }
            primary="Favorites"
            tabIndex={ 0 }
          />
        </ListItem>
      </List>

      <AnimesMenu
        ariaControls={ controlId }
        openAnimeMenu={ openAnimeMenu }
        setOpenAnimeMenu={ setOpenAnimeMenu }
      />
    </nav>
  );
};

export default Navigation;