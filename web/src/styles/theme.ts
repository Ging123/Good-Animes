import { createTheme, PaletteOptions } from "@mui/material/styles";

const pallete:PaletteOptions = {
  mode:"dark",
  primary:{
    main:"#50C878"
  },
};

const theme = createTheme({
  palette:pallete
});

export default theme;