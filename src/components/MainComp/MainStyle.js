import styled from "styled-components";
import { colors } from "ConstComponents";
import { device } from "Responsive";

// COMPONENTS

export const MainSec = styled.section`
  display: flex;
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
  top: 90px;
  left: 0;
  overflow: hidden;
  z-index: 1;
  min-height: 100%;

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
