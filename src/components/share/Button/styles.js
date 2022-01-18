import styled from "styled-components"

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 24px;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 40px;
  }
`
