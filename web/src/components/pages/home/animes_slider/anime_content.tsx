import { SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

import { animeSwiperData } from ".";
import Image from "next/image";

const AnimeContent = (anime:animeSwiperData, index:number) => {
  const isDubbed = anime.dubbed ? "dub" : "sub";

  return (
    <SwiperSlide className={ styles.swiper_content_container } key={ index }>
      
      <div className={ styles.anime_image_container } title={ anime.name }>
        <Image
          alt={ anime.alt || "" }
          layout="fill"
          src={ anime.image }
        />
      </div>

      <p className={ styles.anime_name }>{ anime.name }</p>
      <sub className={ styles.anime_language }>{ isDubbed }</sub>
    </SwiperSlide>
  );
};

export default AnimeContent;