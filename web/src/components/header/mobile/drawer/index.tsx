import { SwipeableDrawer } from "@mui/material";
import styles from "./styles.module.scss";

import List from "./list";

interface props {
  onClose:() => void;
  onOpen:() => void;
  isOpen:boolean;
}

const Drawer = (props:props) => {
  const { onClose, onOpen, isOpen } = props;

  return (
    <SwipeableDrawer
      anchor="right"
      open={ isOpen }
      onClose={ onClose }
      onOpen={ onOpen }
    >
      <nav className={ styles.drawer_nav_container }>
        <List onClose={ onClose }/> 
      </nav>    
    </SwipeableDrawer>
  );
};

export default Drawer;