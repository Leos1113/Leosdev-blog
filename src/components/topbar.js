import React from "react"
import { Link } from "gatsby"
import { Match } from "@reach/router"

import Logo from '../../content/assets/leosdev-logo.png';
import HomeIcon from '../../content/assets/home-icon.png';


const Topbar = () => {
    return(
      <nav className="flex items-center justify-between flex-wrap bg-black">
          <p></p>
          <img src={Logo} className="logo-img" alt="Logo de Leos Dev"></img>
          <Match path="/">
              {props =>
                  props.match ? (
                      <div></div>
                  ) : (
                      <Link

                          style={{
                              boxShadow: "none",
                          }}
                          to={"/"}
                      >
                          <img src={HomeIcon} className="home-icon" alt="Icono de la home"/>
                      </Link>
                  )
              }
          </Match>
      </nav>
    )
}

export default Topbar