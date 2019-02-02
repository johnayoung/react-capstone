import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";

const Icon = props => {
  switch (props.name) {
    case "menu":
      return <Menu {...props} />;
    case "logo":
      return <Logo {...props} />;
    default:
      return;
  }
};

export default Icon;
