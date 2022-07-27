//* Import styles
import { FooterContainer } from "./styles"

//* Import assets
import TwitterBlack from "../../assets/TwitterBlack.svg"

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h3>Chirp.</h3>

        <ul>
          <img src={TwitterBlack} alt="Twitter black" />{" "}
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  )
}
