import { Link } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">MS</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link onClick={() => scrollTo("#about")} to="/#about">
              About
            </Link>
            <Link onClick={() => scrollTo("#work")} to="/#work">
              Work
            </Link>
            <Link onClick={() => scrollTo("#contact")} to="/#contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
