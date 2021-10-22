import styled from "styled-components";
import { device } from "Responsive";
import { colors, shadows } from "ConstComponents";
import { Para, Span } from "ConstComponents";

// COMPONENTS

export const Box = styled.div``;
export const Content = styled.div``;
export const InfoSec = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 4rem;
  width: 100%;
  ${Box} {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;
    min-height: 200px;
    background-color: ${colors.white};
    box-shadow: ${shadows.boxShadow};
    border-radius: 2px;
    ${Content} {
      width: 100%;
      display: flex;
      flex-direction: column;

      gap: 1rem;
      .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        ${Para} {
          color: ${colors.primary};
        }
        ${Span} {
          color: ${colors.secondary};
        }
      }
    }
  }

  @media ${device.laptopL} {
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
