//* Import Hooks
import { useState } from "react"

//* Impor styles
import { ContenidoHeader, MenuMovil, Navigation } from "./styles.js"

//* Import assets
import BarMenu from "../assets/HamburgerMenu.svg"

//* Import components
import Button from "../share/Button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <ContenidoHeader>
      <MenuMovil>
        <a to="/" onClick={closeMenu}>
          <h2>Chirp.</h2>
        </a>

        <img src={BarMenu} alt="BarMenu" onClick={handleOpenMenu} />
      </MenuMovil>

      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <a href="" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={closeMenu}>
              Price
            </a>
          </li>
          <li>
            <a href="" onClick={closeMenu}>
              FAQ
            </a>
          </li>
        </ul>
        <Button>Sign in with twitter</Button>
      </Navigation>
    </ContenidoHeader>
  )
}
