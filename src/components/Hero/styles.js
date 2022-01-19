import styled from "styled-components"

export const HeroContainer = styled.section`
  display: block;
  padding-bottom: 40px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.fundPrimary};
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 20px;
  margin: auto;
  max-width: 1024px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 20px;
  }

  div {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 768px) {
      grid-column: 1;
      grid-row: 2;
    }

    div {
      padding: 0;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 20px;
      width: 100%;

      @media (max-width: 425px) {
        flex-direction: column;
      }

      a {
        color: ${({ theme }) => theme.colors.blueDark};
      }
    }

    p {
      @media (max-width: 768px) {
        width: 100%;
      }

      span {
        color: ${({ theme }) => theme.colors.blueDark};
        font-weight: 700;
      }
    }
  }
`
export const RightImage = styled.span`
  width: 100%;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
  }

  img {
    width: 100%;

    &:nth-child(2) {
      display: none;
    }
    @media (max-width: 768px) {
      display: none;
      &:nth-child(2) {
        display: block;
      }
    }
    @media (max-width: 425px) {
      display: block;
      &:nth-child(2) {
        display: none;
      }
    }
  }
`
export const Images = styled.span`
  position: relative;
  display: flex;
  gap: 0;
  img {
    position: relative;
    left: 0px;
    width: 50px;
    @media (max-width: 768px) {
      display: block;
    }
    @media (max-width: 425px) {
      display: block;
    }

    &:nth-child(2) {
      left: -20px;
    }
    &:nth-child(3) {
      left: -40px;
    }
    &:nth-child(4) {
      left: -60px;
    }
    &:nth-child(5) {
      left: -80px;
    }
    &:nth-child(6) {
      left: -100px;
    }
    &:nth-child(7) {
      left: -120px;
    }
    &:nth-child(8) {
      left: -140px;
    }
    &:nth-child(9) {
      left: -160px;
    }
  }
`
