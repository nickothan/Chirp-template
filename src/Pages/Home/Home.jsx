//* Import styles
import { HomeContainer } from "./styles"

//* Import components
import Hero from "../../components/Hero"
import Features from "../../components/Features"
import Testimonials from "../../components/Testimonials"
import Price from "../../components/Price"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Features />
      <Testimonials />
      <Price />
      <Footer />
    </HomeContainer>
  )
}
