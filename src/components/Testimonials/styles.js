import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.fundSecond};
`;

export const TestimonialsContent = styled.section`
  margin: auto;
  padding: 40px 0;
  width: 1024px;
  @media (max-width: 768px) {
    padding: 40px 20px;
    width: auto;
  }

  h3 {
    margin-bottom: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      li {
        width: 100%;
      }
    }
  }
`;
