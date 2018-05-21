import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 
      className="title"
    >
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <div className="social-media-links">
      <a href="https://twitter.com/lewisflude">Twitter</a>
      <a href="https://facebook.com/lewisflude">Facebook</a>
    </div>
  </div>
)

export default Header
