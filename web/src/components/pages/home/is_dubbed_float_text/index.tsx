import styles from "./styles.module.scss";

interface props {
  dubbed:boolean;
}

const IsDubbedFloatText = (props:props) => {
  const { dubbed } = props;
  const isDubbed = dubbed ? "dub" : "sub";

  return (
    <sub className={ styles.anime_language }>
      { isDubbed }
    </sub>
  );
};

export default IsDubbedFloatText;