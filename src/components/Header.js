import React from 'react'
import { Picture } from 'react-responsive-picture'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'

const Header = ({ linksTitle }) => (
  <header>
    <div className="content-container">
      <div className="row">
        <div className="col-6 d-sm-none mobilebutton">
          <div id="openMenu" className="hamburger hamburger--collapse">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="logo">
            <Link to="/">
              <Picture
                sources={[
                  {
                    srcSet: '/images/logo/kawa.webp',
                    type: 'image/webp'
                  },
                  {
                    src: '/images/logo/kawa.svg'
                  }
                ]}
              />
            </Link>
          </div>
        </div>
        <div className="col-4 col-md-9 d-none d-md-block mainmenu">
          <Navbar linksTitle={linksTitle} />
        </div>
      </div>
    </div>
  </header>
)

export default Header
