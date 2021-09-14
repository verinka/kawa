import React from 'react'
import { Link } from 'gatsby'

const Sidebar = ({ linksTitle }) => (
  <div className="sidebar">
    <div className="sidebar__header">
      <img
        srcSet="/images/logo_menu.png"
        alt="kawa menu logo"
        className="img-fluid"
      />
    </div>
    <ul className="sidebar__list">
      <li className="sidebar__item">
        <Link to="/" className="sidebar__link-lang--ua" />
      </li>
      <li className="sidebar__item">
        <Link to="/ru" className="sidebar__link-lang--ru" />
        <Link to="/blog" className="sidebar__link">
          {linksTitle.blog}
        </Link>
      </li>
      <li className="sidebar__item">
        <Link to="/en" className="sidebar__link-lang--en" />
        <Link to="#contact-section2" className="sidebar__link">
          {linksTitle.supports}
        </Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
