import styled from "styled-components";
import { colors, shadows } from "../../Variables";
import { device } from "../../responsive";

// COMPONENTS
export const BgImg = styled.div``;
export const Overlay = styled.div``;

export const LoadingDiv = styled.div``;

export const TitleBox = styled.div``;
export const Title = styled.h1``;
export const HomeBtn = styled.button``;

export const HeroSec = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  min-height: 500px;
  overflow: hidden;
  background-color: ${colors.black};
  color: ${colors.white};
  ${LoadingDiv} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${BgImg} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    img {
    }
    ${Overlay} {
      width: 100%;
      height: 100%;
      background: ${colors.overlay};
      z-index: 1;
      position: absolute;
      top: 0;
    }
  }
  ${TitleBox} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    bottom: 40px;
    left: 60px;
    right: 60px;
    padding: 20px;
    max-width: 500px;
    background-color: ${colors.bgLight};
    backdrop-filter: blur(4px);
    border-radius: 4px;
    z-index: 2;
    ${Title} {
      color: ${colors.white};
      text-shadow: ${shadows.txtShadow};
    }
  }
  ${HomeBtn} {
    position: absolute;
    bottom: 40px;
    right: 60px;
    padding: 20px;
    display: block;
    min-width: 200px;
    background-color: ${colors.primary};
    color: ${colors.white};
    backdrop-filter: blur(4px);
    border-radius: 4px;
    z-index: 2;
    &:hover {
      background-color: ${colors.hover};
    }
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
