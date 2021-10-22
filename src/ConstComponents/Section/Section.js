import styled from "styled-components";
import { device } from "Responsive";
import { colors } from "../colors";

export const PageSec = styled.section`
  padding: 40px 60px;
  width: 100%;
  flex: 5;
  background-color: ${colors.white};
  min-height: 700px;

  @media ${device.laptopL} {
    padding: 40px 60px;
  }
  @media ${device.laptop} {
    padding: 40px 40px;
  }
  @media ${device.tablet} {
    padding: 20px 20px;
  }
  @media ${device.mobileL} {
    padding: 20px 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
