import React from 'react'
import { Link } from 'gatsby'

import logo from '../../assets/agilix-logo-vertical.svg'

const Logo = ({ white, height, className = '', ...rest }) => (
  <Link to="/" className={`${className}`} {...rest}>
    <img src={logo} alt="" width="70" />
  </Link>
)

export default Logo
