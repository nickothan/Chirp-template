import styled from "styled-components"

export const TestimonialContainer = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  width: fit-content;
  max-width: 100%;
  height: fit-content;
  max-height: auto;
  background-color: ${({ theme }) => theme.colors.white};
`
export const TestimonialHead = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 15px;

    h4 {
      margin: 0;
    }
    p {
      font-size: 16px;

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  }
`
export const Testimonialfooter = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`
