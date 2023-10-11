import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .logo {
      max-width: 45%;
    }
  }
`;
