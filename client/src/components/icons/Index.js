import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import Close from "./Close";

const Icon = props => {
  switch (props.name) {
    case "menu":
      return <Menu {...props} />;
    case "logo":
      return <Logo {...props} />;
    case "close":
      return <Close {...props} />;
    default:
      return;
  }
};

export default Icon;
