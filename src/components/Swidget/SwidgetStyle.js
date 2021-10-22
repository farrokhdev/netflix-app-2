import styled from "styled-components";
import { device } from "Responsive";
import { colors, shadows } from "ConstComponents";
import { H3, Para, ALink } from "ConstComponents";

// COMPONENTS

export const Content = styled.div``;
export const Pic = styled.div``;
export const Name = styled.div``;
export const Email = styled.div``;

export const SwidgetSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  min-height: 200px;
  box-shadow: ${shadows.boxShadow};
  color: ${colors.primary};
  ${H3} {
    margin-bottom: 2rem;
  }
  ${Content} {
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    ${Pic} {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50px;
    }
    ${Name} {
      text-align: center;
      ${Para} {
        text-align: center;
      }
    }
    ${Email} {
      text-align: center;
    }
    ${ALink} {
      background-color: ${colors.white};
      color: ${colors.primary};
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid ${colors.primary};
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
