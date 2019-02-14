import React from "react";
import MenuItem from "../components/MenuItem";

export default function Menu(props) {
  const { menuItems } = props;
  const menuLinks = menuItems.map((item, index) => (
    <MenuItem
      name={item.name}
      link={item.link}
      keyValue={`${index}-${item.name}`}
      passedProps={props}
    />
  ));
  return (
    <ul className="navbar-list flex list-reset items-center container mx-auto">
      <div key="menu-links-all" className="mx-auto flex">
        {menuLinks}
      </div>
    </ul>
  );
}
