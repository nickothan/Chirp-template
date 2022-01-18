//* Import styles
import { ButtonStyle } from "./styles"

//* Import image
import Twitter from "../../Assets/Twitter.svg"

export default function Button({ type = "button", children, ...arg }) {
  return (
    <ButtonStyle>
      <img src={Twitter} alt="" />
      {children}
    </ButtonStyle>
  )
}
