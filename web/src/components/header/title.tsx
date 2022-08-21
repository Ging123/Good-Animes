import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

const Title = () => {
  return (
    <Typography 
      className={ styles.title } 
      role="banner"
      tabIndex={ 0 } 
      variant="h1" 
    >
      animes
    </Typography>
  );
};

export default Title;