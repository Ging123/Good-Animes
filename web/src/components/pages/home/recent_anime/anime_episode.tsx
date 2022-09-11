import IsDubbedFloatText from "../is_dubbed_float_text";
import styles from "./styles.module.scss";

import { Grid } from "@mui/material";
import PlayIcon from "../play_icon";

import animeEpisode from "./index";
import Image from "next/image";

const AnimeEpisode = (anime:animeEpisode, index:number) => {
  const column = { md:1, sm:1, xs:1 };

  return (
    <Grid 
      className={ styles.anime_container}
      item 
      lg={ column.lg } 
      key={ index } 
      sm={ column.sm }
      title={ anime.name }
      xs={ column.xs }
    >
      <div className={ styles.anime_image_container }>
        <Image
          alt={ anime.alt || "" }
          layout="fill"
          src={ anime.image }
        />
        <IsDubbedFloatText dubbed={ anime.dubbed }/>
        <PlayIcon className={ styles.play_icon }/>
      </div>
      
      <p className={ styles.anime_name }>{ anime.name }</p>
    </Grid>
  );
};

export default AnimeEpisode;