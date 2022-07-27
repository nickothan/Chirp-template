//* Import assets
import TwitterBlue from "../../assets/TwitterBlue.svg"

//* Import styles
import {
  TestimonialContainer,
  TestimonialHead,
  Testimonialfooter
} from "./styles"

export default function Testimonial({ testimonial }) {
  return (
    <TestimonialContainer>
      <TestimonialHead>
        <div>
          <img src={testimonial.img} alt="" />
          <span>
            <h4>{testimonial.author}</h4>
            <p>{testimonial.nickname}</p>
          </span>
        </div>
        <img src={TwitterBlue} alt="" />
      </TestimonialHead>

      <p>{testimonial.testimony}</p>

      <Testimonialfooter>
        <p>
          <img src="" alt="" />
          {testimonial.likes}
        </p>
        <p>{testimonial.date}</p>
      </Testimonialfooter>
    </TestimonialContainer>
  )
}
