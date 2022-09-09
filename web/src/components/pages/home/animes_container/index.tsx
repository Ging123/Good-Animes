import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface props {
  children?:ReactNode;
  className?:string;
  title:string;
}

const AnimesContainer = (props:props) => {
  const className = `${styles.container} ${props.className}`;

  return (
    <div className={ className }>
      <h2 className={ styles.title }>{ props.title }</h2>
      { props.children }
    </div>
  );
};

export default AnimesContainer;