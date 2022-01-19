//* Import styles
import { TestimonialsContainer, TestimonialsContent } from "./styles"

//* Import components
import Testimonial from "../Testimonial"

//* Import assets
import ImgUser1 from "../Assets/userAvatar01.svg"
import ImgUser4 from "../Assets/userAvatar04.svg"
import ImgUser6 from "../Assets/userAvatar06.svg"

const data = [
  {
    author: "Sara May",
    nickname: "@sara_may",
    img: ImgUser1,
    testimony:
      "i just tired out @Chirp and it's amazing, love all the analytics ican",
    likes: 2,
    date: "March 2, 2021"
  },
  {
    author: "Jack Scott",
    nickname: "@jackscott_",
    img: ImgUser4,
    testimony:
      "I initially started using Chirp to support the co-funders as I personally knew him, but after having tried it out for a few weeks, i can genuinely say this changed my Twitter game.",
    likes: 32,
    date: "March 2, 2021"
  },
  {
    author: "Jessica May",
    nickname: "@jmay98",
    img: ImgUser6,
    testimony:
      "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
    likes: 221,
    date: "March 2, 2021"
  }
]

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <TestimonialsContent>
        <h3>What our customers say</h3>{" "}
        <ul>
          {data.map((testimonial) => (
            <Testimonial key={Math.random() * 10} testimonial={testimonial} />
          ))}
        </ul>
      </TestimonialsContent>
    </TestimonialsContainer>
  )
}
