import SubtitlesIcon from "@mui/icons-material/Subtitles";
import FavoriteIcon from "@mui/icons-material/Favorite";

import ViewListIcon from "@mui/icons-material/ViewList";
import PublicIcon from "@mui/icons-material/Public";

import PersonIcon from "@mui/icons-material/Person";
import styles from "./styles.module.scss";

import { 
  List as Li, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from "@mui/material";

interface props {
  onClose:() => void;
}

const List = (props:props) => {
  const { onClose } = props;

  return (
    <Li 
      role="presentation" 
      onClick={ onClose } 
    >

      <ListItem className={ styles.list_item }>
        <ListItemButton>
          <ListItemIcon>
            <PublicIcon/>
          </ListItemIcon>
          <ListItemText>
            Dubbed animes
          </ListItemText>
        </ListItemButton>
        
      </ListItem>

      <ListItem className={ styles.list_item }>
        <ListItemButton>
          <ListItemIcon>
            <SubtitlesIcon/>
          </ListItemIcon>
          <ListItemText>
            Subtitled animes
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className={ styles.list_item }>
        <ListItemButton>
          <ListItemIcon>
            <FavoriteIcon/>
          </ListItemIcon>
          <ListItemText>
            Favorites
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className={ styles.list_item }>
        <ListItemButton>
          <ListItemIcon>
            <ViewListIcon/>
          </ListItemIcon>
          <ListItemText>
            Genres
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className={ styles.list_item }>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText>
            Login
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Li>
  );
};

export default List;