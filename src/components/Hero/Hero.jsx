//* Import styles
import { HeroContainer, HeroContent, Images, RightImage } from "./styles"

//* Import components
import Button from "../share/Button"
import Header from "../Header"

//* Import images
import ImgHeroDesktop from "../Assets/Hero-Image-Desktop.png"
import ImgHeroTablet from "../Assets/Hero-Image-Tablet.png"
import ImgUser1 from "../Assets/userAvatar01.svg"
import ImgUser2 from "../Assets/userAvatar02.svg"
import ImgUser3 from "../Assets/userAvatar03.svg"
import ImgUser4 from "../Assets/userAvatar04.svg"
import ImgUser5 from "../Assets/userAvatar05.svg"
import ImgUser6 from "../Assets/userAvatar06.svg"
import ImgUser7 from "../Assets/userAvatar07.svg"
import ImgUser8 from "../Assets/userAvatar08.svg"
import ImgUser9 from "../Assets/userAvatar09.svg"

export default function Hero() {
  return (
    <HeroContainer>
      <Header />
      <HeroContent>
        <div>
          <h1>Twitter analytics taken to a whole new level.</h1>
          <p>
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience, which tweets thwey like, and most
            importantly, when they are the most active on Twitter.
          </p>
          <div>
            <Button>Sing in with Twitter</Button>
            <a href="#"> Learn more</a>
          </div>
          <Images>
            <img src={ImgUser1} alt="ImgUser1" />
            <img src={ImgUser2} alt="ImgUser2" />
            <img src={ImgUser3} alt="ImgUser3" />
            <img src={ImgUser4} alt="ImgUser4" />
            <img src={ImgUser5} alt="ImgUser5" />
            <img src={ImgUser6} alt="ImgUser6" />
            <img src={ImgUser7} alt="ImgUser7" />
            <img src={ImgUser8} alt="ImgUser8" />
            <img src={ImgUser9} alt="ImgUser9" />
          </Images>
          <p>
            Join <span>195 </span>others who have analyzed their followers and
            scheduled <span>1342</span> tweets!
          </p>
        </div>
        <RightImage>
          <img src={ImgHeroDesktop} alt="Image desktop" />
          <img src={ImgHeroTablet} alt="Image Tablet" />
        </RightImage>
      </HeroContent>
    </HeroContainer>
  )
}
