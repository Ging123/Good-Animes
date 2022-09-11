import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import IsDubbedFloatText from "../is_dubbed_float_text";

import { SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

import { animeSwiperData } from ".";
import PlayIcon from "../play_icon";

import Image from "next/image";

const AnimeContent = (anime:animeSwiperData, index:number) => {

  return (
    <SwiperSlide className={ styles.swiper_content_container } key={ index }>
      
      <div className={ styles.anime_image_container } title={ anime.name }>
        <Image
          alt={ anime.alt || "" }
          layout="fill"
          src={ anime.image }
        />

        <PlayIcon className={ styles.play_icon }/>
      </div>

      <p className={ styles.anime_name }>{ anime.name }</p>

      <IsDubbedFloatText dubbed={ anime.dubbed}/>
    </SwiperSlide>
  );
};

export default AnimeContent;