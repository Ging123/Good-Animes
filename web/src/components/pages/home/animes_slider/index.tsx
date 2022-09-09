import swiperBreakpoints from "./swiper_breakpoints";
import AnimesContainer from "../animes_container";

import AnimeContent from "./anime_content";
import styles from "./styles.module.scss";

import { Swiper } from "swiper/react";
import MockAnimes from "./mock/data";

export interface animeSwiperData {
  alt:string;
  dubbed:boolean;
  image:string;
  name:string;
}

const AnimesSlider = () => {
  
  return (
    <AnimesContainer className={ styles.container } title="Most Popular" >

      <Swiper 
        breakpoints={ swiperBreakpoints }
        slidesPerView={ 1 }
        spaceBetween={ 10 }
        watchSlidesProgress
      >
        {
          MockAnimes.map(AnimeContent)
        }        
      </Swiper>

    </AnimesContainer>
  );
};

export default AnimesSlider;