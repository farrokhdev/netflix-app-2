import styled from "styled-components";
import { colors, shadows } from "../../Variables";
import { device } from "../../responsive";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

// COMPONENTS
export const BgImg = styled.div``;
export const Overlay = styled.div``;

export const LoadingDiv = styled.div``;

export const TitleBox = styled.div``;
export const Title = styled.h1``;
export const Desc = styled.p``;
export const Btns = styled.div``;
export const InfoBtn = styled.button``;
export const WatchBtn = styled.button``;
export const PlayIcon = styled(AiFillPlayCircle)``;

export const GenresBox = styled.div``;
export const ChooseBtn = styled.div``;
export const ChooseIcon = styled(IoMdArrowDropdown)``;
export const GenresGroup = styled.div``;

export const AnouncedWrapper = styled.div``;
export const AnouncedBox = styled.div``;
export const AnouncedBg = styled.div``;
export const AnouncedOverlay = styled.div``;
export const AnouncedTitle = styled.div``;

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
    ${Desc} {
      color: ${colors.white};
    }
    ${Btns} {
      display: flex;
      align-items: center;
      gap: 20px;
      ${InfoBtn} {
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: ${shadows.btnShadow};
        background-color: ${colors.secondaryOp30};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.hover2};
        }
        ${PlayIcon} {
          font-size: 1.5rem;
          color: ${colors.white};
        }
      }
      ${WatchBtn} {
        display: flex;
        align-items: center;
        gap: 5px;

        box-shadow: ${shadows.btnShadow};
        background-color: ${colors.primary};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.hover};
        }
        ${PlayIcon} {
          font-size: 1.5rem;
          color: ${colors.white};
        }
      }
    }
  }

  ${AnouncedWrapper} {
    display: flex;
    align-items: center;
    gap: 20px;
    position: absolute;
    bottom: 40px;
    right: 60px;
    z-index: 2;
    ${AnouncedBox} {
      min-width: 220px;
      min-height: 120px;
      overflow: hidden;
      position: relative;
      border-radius: 4px;
      transition: 0ms.3s ease;
      cursor: pointer;
      ${AnouncedBg} {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      ${AnouncedOverlay} {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: ${colors.bgLight};
      }
      ${AnouncedTitle} {
        position: absolute;
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-100%, -50%);
        z-index: 4;
        color: ${colors.white};
        text-shadow: ${shadows.txtShadow};
        text-align: center;
        margin: 0 auto;
        opacity: 0;
        pointer-events: none;
        transition: 0.3s ease;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${colors.bgLight};
        z-index: 3;
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        opacity: 0;
        pointer-events: none;
        transition: 0.3s ease;
      }
      &:hover {
        ${AnouncedTitle} {
          opacity: 1;

          left: 50%;
          transform: translate(-50%, -50%);
        }
        &::before {
          clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
    ${AnouncedWrapper} {
      display: none;
    }
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
