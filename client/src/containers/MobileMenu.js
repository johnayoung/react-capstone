import React from 'react';
import Icon from '../components/icons/Index';
import ConnectedMenuItem from '../components/MenuItem';

export default function MobileMenu(props) {
  const { hideMobileMenu, menuItems } = props;
  const menuLinks = menuItems.map(item => (
    <ConnectedMenuItem name={item.name} link={item.link} key={item.key} passedProps={props} />
  ));
  return (
    <div className="hero-background fixed h-screen w-screen pin-t pin-l z-50">
      <Icon
        onClick={hideMobileMenu}
        name="close"
        className="absolute pin-r icon-close fill-current text-green-100 h-24 w-24"
      />
      <div className="mx-auto h-full flex flex-col items-center justify-center flex-grow text-center">
        <ul className="list-reset text-4xl">{menuLinks}</ul>
      </div>
    </div>
  );
}
