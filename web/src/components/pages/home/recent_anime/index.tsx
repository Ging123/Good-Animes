import AnimesContainer from "../animes_container";
import AnimeEpisode from "./anime_episode";

import styles from "./styles.module.scss";
import animesMock from "./mock/data";

import { Grid } from "@mui/material";

export interface animeEpisode {
  alt:string;
  image:string;
  dubbed:boolean;
  name:string;
}

const RecentAnimes = () => {

  return (
    <AnimesContainer className={ styles.container } title="Recent Animes">
      <Grid 
        container 
        columns={{ md:3, sm:2, xs:1 }} 
        columnSpacing={ 3 }
        rowSpacing={ 3 }
      >
        { animesMock.map(AnimeEpisode) }
      </Grid>
    </AnimesContainer>
  );
};

export default RecentAnimes;