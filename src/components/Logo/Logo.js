import React from "react";
import { Link } from "gatsby";

import logo from "../../assets/image/png/agilix.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
        <img src={logo} alt="" width="70"/>
    </Link>
  );
};

export default Logo;
