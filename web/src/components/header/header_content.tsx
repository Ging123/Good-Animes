import useMediaQuery from "@/hooks/useMediaQuery";
import { useTheme } from "@mui/material";

import dynamic from "next/dynamic";

const HeaderDesktop = dynamic(() => import("./header_desktop"), { ssr:false });
const HeaderMobile = dynamic(() => import("./header_mobile"), { ssr:false });

const HeaderContent = () => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;

  const isDesktop = useMediaQuery(md);
  const HeaderToRender = isDesktop ? <HeaderDesktop/> : <HeaderMobile/>;

  return (
    <>
      { HeaderToRender }
    </>
  );
};

export default HeaderContent;