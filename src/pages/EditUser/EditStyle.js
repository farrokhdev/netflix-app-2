import styled from "styled-components";
import { device } from "Responsive";
import { PageSec } from "ConstComponents";

// COMPONENTS

export const EditSec = styled(PageSec)`
  display: flex;
  flex-direction: column;
  gap: 4rem;

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
