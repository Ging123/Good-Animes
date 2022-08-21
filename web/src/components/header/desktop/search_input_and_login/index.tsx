import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";
import styles from "./styles.module.scss";

const SearchInputAndLogin = () => {
  return (
    <div className={ styles.container }>
      <TextField
        className={ styles.search_input }
        InputProps={{ endAdornment:
          <IconToSearch/> 
        }}
        placeholder="Search an anime"
        role="search"
        variant="standard"
      />
      <IconButton aria-label="Login" disableRipple>
        <PersonIcon 
          className={ styles.login } 
          color="inherit"
          sx={{ "& :hover": { color: "primary.main" } }} 
        />
      </IconButton>
    </div>
  );
};


function IconToSearch() {
  return (
    <InputAdornment position="end">
      <IconButton 
        arial-label="Search"
        className={ styles.search_input_icon }
        disableRipple={ true } 
        title="Search"
      >
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  );
};

export default SearchInputAndLogin;