import styled from "styled-components";
import { colors } from "ConstComponents";
import { device } from "Responsive";

// COMPONENTS
export const Logo = styled.div``;
export const Welcome = styled.div``;

export const Box = styled.div``;
export const ProfileImg = styled.div``;

export const NavSec = styled.section`
  padding: 0px 60px;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  ${Box} {
    display: flex;
    gap: 2rem;
    align-items: center;
    ${ProfileImg} {
      overflow: hidden;
      border-radius: 50px;
      width: 40px;
      height: 40px;
    }
    a {
      background-color: ${colors.forth};
      color: ${colors.white};
      padding: 5px 10px;
      border-radius: 4px;
      &:hover {
        background-color: ${colors.secondary};
      }
    }
  }

  @media ${device.laptopL} {
    padding: 0px 60px;
  }
  @media ${device.laptop} {
    padding: 0px 40px;
  }
  @media ${device.tablet} {
    padding: 0px 20px;
  }
  @media ${device.mobileL} {
    padding: 0px 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
