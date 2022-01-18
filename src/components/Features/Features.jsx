//* Import styles
import { FeaturesContainer } from "./styles"

const data = [
  {
    title: "Analytics",
    description:
      "We constantly moitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to change with your content."
  },
  {
    title: "Smart AnaLizer",
    description:
      "Chirp automatically recognizes your followers' most active times and automatically sends you notifications if you're missing out on an opportunity."
  },
  {
    title: "Scheduled Your Tweets",
    description:
      "Quality Tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read."
  },
  {
    title: "Dark Mode",
    description:
      "Friendly on the eyes, no matter what time you write yourTweets. All colors are chosen to make sure your eyes are at ease at all times."
  }
]

export default function Features() {
  return (
    <FeaturesContainer>
      <h3>
        Features that help you
        <br />
        Tweet sarter.
      </h3>
      <ul>
        {data.map((dat) => (
          <li key={Math.random() * 10}>
            <img src="" alt="" />
            <h4>{dat.title}</h4>
            <p>{dat.description}</p>
          </li>
        ))}
      </ul>
    </FeaturesContainer>
  )
}
