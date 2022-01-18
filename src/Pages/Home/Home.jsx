//* Import styles
import { HomeContainer } from "./styles"

//* Import components
import Hero from "../../components/Hero"
import Features from "../../components/Features"

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Features />
    </HomeContainer>
  )
}
