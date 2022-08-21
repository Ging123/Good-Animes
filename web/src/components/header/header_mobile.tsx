import Navigation from "./mobile/navigation";
import { useState } from "react";

const HeaderMobile = () => {
  const [ searchBarIsOpen, setSearchBarVisibility ] = useState(false);

  return (
    <>
      <Navigation/>
    </>
  );
};

export default HeaderMobile;