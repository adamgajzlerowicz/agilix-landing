import React from "react";
import { Link } from "gatsby";

import imgL1Logo from "../../assets/image/png/l1-logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <img src={imgL1LogoWhite} alt="" />
      ) : (
        <img src={imgL1Logo} alt="" />
      )}
    </Link>
  );
};

export default Logo;
