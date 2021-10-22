import styled from "styled-components";
import { colors } from "ConstComponents";
import { device } from "Responsive";

// COMPONENTS

export const Menu = styled.div``;
export const SideSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${colors.secondary};
  color: ${colors.white};
  min-width: 200px;
  flex: 1;
  padding: 40px 0px;
  height: auto;
  ${Menu} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-transform: capitalize;
    p {
      padding: 0px 60px;
    }
  }

  @media ${device.laptopL} {
    ${Menu} {
      p {
        padding: 0px 60px;
      }
    }
  }
  @media ${device.laptop} {
    ${Menu} {
      p {
        padding: 0px 40px;
      }
    }
  }
  @media ${device.tablet} {
    ${Menu} {
      p {
        padding: 0px 20px;
      }
    }
  }
  @media ${device.mobileL} {
    ${Menu} {
      p {
        padding: 0px 10px;
      }
    }
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
