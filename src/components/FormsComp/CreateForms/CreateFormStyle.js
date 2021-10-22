import styled from "styled-components";
import { shadows, colors } from "ConstComponents";
import { device } from "Responsive";
import {
  InputStyled,
  SelectStyled,
  TextStyled,
  H4,
  Button,
  Span,
} from "ConstComponents";

// COMPONENTS

export const Form = styled.div`
  width: fit-content;
  border-radius: 4px;
  box-shadow: ${shadows.boxShadow};
  min-height: 200px;
  padding: 2rem;
  position: relative;
  ${H4} {
    margin-bottom: 4rem;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4rem;
    column-gap: 2rem;
    width: 100%;
    /* justify-content: space-between; */

    .formItem {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      ${InputStyled} {
        border: 1px solid #a3a3a3;
        border-radius: 0%;
        padding: 10px;
        width: 300px;
      }
      ${SelectStyled} {
        border: 1px solid #a3a3a3;
        border-radius: 0%;
        padding: 10px;
        width: 300px;
        height: ${(params) => (params.multiple ? "500px" : "")};
      }
    }
    .formItem-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      ${TextStyled} {
        border-bottom: 1px solid #a3a3a3;
        width: 600px;

        min-height: 200px;
      }
    }
    select {
      border-radius: 0%;
      padding: 10px;
      border-bottom: 1px solid #a3a3a3;
      outline: none;
    }

    ${Button} {
      border: 1px solid ${colors.third};
      background-color: ${colors.white};
      color: ${colors.third};
      width: 100px;
      height: 40px;
      align-self: flex-end;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: ${colors.third};
        color: ${colors.white};
      }
      :disabled {
        border: 1px solid #b2b2b2;
        background-color: #b2b2b2;
        color: ${colors.white};
      }
    }
    .uploadBox {
      position: absolute;
      top: 2rem;
      right: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
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
