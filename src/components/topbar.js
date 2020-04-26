import React from "react"
import { Link } from "gatsby"

import Logo from '../../content/assets/leosdev-logo.png';


const Topbar = () => {
    return(
      <nav className="flex items-center justify-between flex-wrap bg-black">
        <div className="flex items-center flex-shrink-0 text-white bg-black mr-6 ml-6">
          <Link
            style={{
              boxShadow: `none`,
            }}
            to={`/`}
          >
            <img src={Logo} className="logo-img" alt="Logo de Leos Dev"></img>
          </Link>
        </div>
      </nav>
    )
}

export default Topbar