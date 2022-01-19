//* Import assets
import Check from "../Assets/Checkmark.svg"

//* Import components
import Button from "../share/Button"

//* Import styles
import { PriceContainer, Card } from "./styles"

export default function Price() {
  return (
    <PriceContainer>
      <h3>One simple price plan.</h3>
      <p>Start growing Twitter account by analyzing your follower's patherns</p>

      <Card>
        <div>
          <p>Monthly</p>
          <p>
            <span>$9</span>/mo
          </p>
        </div>
        <ul>
          <li>
            <p>
              <img src={Check} alt="" />
              Unlimited* scheduled tweets and threads.
            </p>
          </li>
          <li>
            <p>
              <img src={Check} alt="" />
              Schedule up to 3 weeks in advance.
            </p>
          </li>
          <li>
            <p>
              <img src={Check} alt="" />
              Real-time audience analytics tracking up to 5k followers.
            </p>
          </li>
        </ul>
        <Button>Start Trial with Twitter</Button>
      </Card>
    </PriceContainer>
  )
}
