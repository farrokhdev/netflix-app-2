import styled from "styled-components";
import { device } from "Responsive";
import { PageSec, colors } from "ConstComponents";
import { shadows } from "ConstComponents";
import { LabelStyled, InputStyled } from "ConstComponents";

// COMPONENTS

export const FormSec = styled(PageSec)`
  max-width: 400px;
  min-height: 200px;
  margin: 0 auto;
  box-shadow: ${shadows.boxShadow};
  border-radius: 4px;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    h4 {
      margin-bottom: 2rem;
    }
    .form-item {
      ${InputStyled} {
        border: 1px solid #c9c9c9;
        width: 100%;
      }
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    button {
      background-color: ${colors.white};
      color: ${colors.primary};
      border: 1px solid ${colors.primary};
      text-align: center;
      display: block;
      &:hover {
        background-color: ${colors.primary};
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
