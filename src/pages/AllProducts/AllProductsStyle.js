import styled from "styled-components";
import { colors } from "ConstComponents";
import { device } from "Responsive";

// COMPONENTS

export const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  button,
  a {
    cursor: pointer;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    border: 1px solid ${colors.primary};
    outline: none;
    padding: 5px;
    border-radius: 4px;
    transition: 0.3s ease;

    svg {
      transition: 0.3s ease;
      color: ${colors.primary};
      font-size: 1.5rem;
    }

    &:hover {
      background-color: ${colors.primary};
      svg {
        color: ${colors.white};
      }
    }
  }

  button.delete {
    border: 1px solid red;

    svg {
      color: red;

      font-size: 1.5rem;
    }
    &:hover {
      background-color: red;
      svg {
        color: ${colors.white};
      }
    }
  }

  @media ${device.laptopL} {
  }
  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
