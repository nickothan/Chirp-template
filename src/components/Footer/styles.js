import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.fundSecond};
  padding: 30px 0;

  div {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1024px;

    h3 {
      margin: 0;
    }

    ul {
      display: flex;
      align-content: center;
      gap: 20px;

      li {
        display: flex;

        a {
          display: flex;
          align-items: center;
        }
      }

      img {
        width: 24px;
      }
    }
  }
`
