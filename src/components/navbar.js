import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, far)




const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">
      <h4>Baldovin</h4>
    </div>
    <div className="navbar__pages">
      <Link to="/" className="navbar__link">Home</Link>
      <div className="navbar__gallery">
        <a href="#" className="navbar__link">Gallery</a>
        <ul className="navbar__dropdown">
          <li className="navbar__dropdown-item">
            <Link to="/people" className="navbar__link">People</Link>
          </li>
          <li className="navbar__dropdown-item">
            <Link to="/urban" className="navbar__link">Urban</Link>
          </li>
          <li className="navbar__dropdown-item">
            <Link to="/landscape" className="navbar__link">Landscape</Link>
          </li>
          <li className="navbar__dropdown-item">
            <Link to="/nature" className="navbar__link">Nature</Link>
          </li>
        </ul>
      </div>
      <Link to="about" className="navbar__link">About</Link>
    </div>
    <div className="navbar__socials">
      <FontAwesomeIcon icon={["fab", 'instagram']} size="1x" />
      <FontAwesomeIcon icon={["far", 'envelope']} size="1x" />
    </div>
  </nav>

)

export default Navbar