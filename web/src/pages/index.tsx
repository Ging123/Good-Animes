import AnimesSlider from "@/components/pages/home/animes_slider";
import RecentAnimes from "@/components/pages/home/recent_anime";

import NavLetters from "@/components/nav_letters";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <NavLetters/>
      <AnimesSlider/>
      <RecentAnimes/>
    </>
  );
}; 

export default Home;