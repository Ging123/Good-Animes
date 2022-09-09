import styles from "./styles.module.scss";
import { List, ListItem, ListItemText } from "@mui/material";

const NavLetters = () => {
  const letters = [ "All", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

  return (
    <nav>
      <List className={ styles.list_container }>
        {letters.map((letter, index) => (
          <ListItem className={ styles.list } key={ index }>
            <ListItemText 
              onKeyDown={(e) => {
                if(e.key === "Enter") return;
              }}
              primaryTypographyProps={ { className:styles.list_item_text } }
              tabIndex={ 0 }
              primary={ letter }
            />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default NavLetters;