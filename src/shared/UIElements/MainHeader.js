import React from "react";
import NavLinks from "./NavLinks";
import ProfileLinks from "./ProfileLinks";
import Banners from "./Banners";

const MainHeader = () => {
  return (
    <header className="mt-0 pt-0">
      <div className="bg-cover clearfix pt-3">
        <h2 className="logo">FOOTBALL</h2>
        <ProfileLinks />
        <NavLinks />
      </div>
    
     <Banners />
    
    </header>
  );
};

export default MainHeader;
