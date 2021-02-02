import React from "react"
import '../styles/styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, far, fas)


const Footer = () => (
    <footer className="footer">
        <div className="footer__socials">
            <a href="#" className="footer__social">
                <FontAwesomeIcon icon={["fab", 'instagram']} />
            </a>
            <a href="#" className="footer__social">
                <FontAwesomeIcon icon={["far", 'envelope']} />
            </a>
        </div>
        <div className="footer__copyright">Copyright © {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  )
  
  export default Footer