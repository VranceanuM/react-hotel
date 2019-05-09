import React from "react";

const Hero = ({ children, hero }) => {
  return (
    <React.Fragment>
      <header className={hero}>{children}</header>
    </React.Fragment>
  );
};

Hero.defaultProps = {
  hero: "defaultHero"
};
export default Hero;
