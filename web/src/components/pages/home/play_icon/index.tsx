import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import styles from "./styles.module.scss";

interface props {
  className:string;
}

const PlayIcon = (props:props) => {
  const { className } = props;

  return (
    <PlayCircleOutlineIcon className={ `${ styles.play_icon } ${ className }` }/>
  );
};

export default PlayIcon;