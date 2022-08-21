import { useMediaQuery as useMedia } from "@mui/material"
;
export default function useMediaQuery(minWidth:number) {
  const query = `(min-width:${minWidth}px)`;
  return Boolean(useMedia(query));
}