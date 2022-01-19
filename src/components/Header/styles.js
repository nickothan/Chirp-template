import styled from "styled-components"

export const ContenidoHeader = styled.header`
  position: absolut;
  display: flex;
  margin: auto;
  padding: 0;
  justify-content: space-between;
  max-width: 1024px;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;

  ul {
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;

    li {
      list-style: none;
      float: right;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 90px;
    left: 100%;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 200px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.fundPrimary};
    transition: left 0.5s;
    ${({ isOpen }) => {
      return isOpen && `left: 0;`
    }}

    ul {
      width: 100%;
      flex-direction: column;
      gap: 10px;

      li {
        display: block;
        width: 100%;
        padding: 8px 10px;
      }
    }
  }
`
export const MenuMovil = styled.div`
  border: none;

  img {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    cursor: pointer;

    img {
      display: block;
      cursor: pointer;
      margin-right: 30px;
      width: 40px;

      background: transparent;

      color: white;
    }
    svg {
      height: 24px;
      width: 24px;
    }
  }

  @media (max-width: 424px) {
    img {
      margin-right: 0;
    }
  }
`
