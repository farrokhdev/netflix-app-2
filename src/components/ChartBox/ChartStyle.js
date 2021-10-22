import styled from "styled-components";
import { device } from "Responsive";
import { colors, shadows } from "ConstComponents";

// COMPONENTS

export const ChartSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  min-height: 200px;
  box-shadow: ${shadows.boxShadow};
  color: ${colors.primary};

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
