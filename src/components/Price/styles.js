import styled from "styled-components"

export const PriceContainer = styled.section`
  margin: 50px auto;
  max-width: 450px;
  text-align: center;
`
export const Card = styled.section`
  margin: 30px auto;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.fundPrimary};
  text-align: start;
  border-radius: 24px;
  border: 2px solid #ffad23;

  div {
    span {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  ul {
    margin: 20px 0;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    li {
      padding: 10px;
      p {
        display: flex;
        align-items: center;
        gap: 10px;

        &:last-child {
          align-items: start;
        }
      }
    }
  }

  button {
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
  }
`
