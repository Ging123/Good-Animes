import { Dispatch, SetStateAction } from "react";
import { Menu, MenuItem } from "@mui/material";

import { el } from ".";

interface props {
  ariaControls:string;
  openAnimeMenu:el;
  setOpenAnimeMenu:Dispatch<SetStateAction<el>>;
}

const AnimesMenu = (props:props) => {
  const { ariaControls, openAnimeMenu, setOpenAnimeMenu } = props;

  return (
    <Menu
      anchorEl={ openAnimeMenu }
      id={ ariaControls }
      open={ Boolean(openAnimeMenu) }
      onClose={ () => setOpenAnimeMenu(null) }
      role="region"
    >
      <MenuItem>Dubbed</MenuItem>
      <MenuItem>Subtitled</MenuItem>
    </Menu>
  );
};

export default AnimesMenu;