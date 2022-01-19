import styled from "styled-components"

export const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  padding: 40px 0;
  max-width: 1024px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    li {
      padding: 20px;
      border: solid 2px #c4c4c4;
      border-radius: 5px;
      transition: 0.3s all ease-in-out;

      img {
        width: 40px;
        height: 40px;
        background-color: #c4c4c4;
        border-radius: 100%;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 11px 20px -10px #000;
      }
    }
  }
`
