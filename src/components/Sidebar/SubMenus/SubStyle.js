import styled from "styled-components";
import { colors } from "ConstComponents";
import { device } from "Responsive";

// COMPONENTS

export const SubContent = styled.div``;
export const SubSec = styled.div`
  ${SubContent} {
    display: flex;
    flex-direction: column;
    gap: 0rem;

    a {
      color: ${colors.white};
      padding: 10px 0px 10px 60px;
      display: block;
      gap: 0;
      &:hover {
        color: ${colors.primary};
        background-color: ${colors.white};
      }
    }
    p {
      padding: 10px 0px 10px 60px;
      cursor: pointer;
    }
  }

  /* padding: 0px 10px; */

  @media ${device.laptopL} {
    ${SubContent} {
      a {
        padding: 10px 0px 10px 60px;
      }
      p {
        padding: 10px 0px 10px 60px;
      }
    }
  }

  @media ${device.laptop} {
    ${SubContent} {
      a {
        padding: 10px 0px 10px 40px;
      }
      p {
        padding: 10px 0px 10px 40px;
      }
    }
  }

  @media ${device.tablet} {
    ${SubContent} {
      a {
        padding: 10px 0px 10px 20px;
      }
      p {
        padding: 10px 0px 10px 20px;
      }
    }
  }

  @media ${device.mobileL} {
    ${SubContent} {
      a {
        padding: 10px 0px 10px 10px;
      }
      p {
        padding: 10px 0px 10px 10px;
      }
    }
  }

  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
