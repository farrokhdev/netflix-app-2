import styled from "styled-components";

import { colors, shadows } from "../../../../Variables";
import { device } from "../../../../responsive";
import { Link } from "react-router-dom";

export const HoverLink = styled(Link)``;
export const MovieBg = styled.div``;
export const MovieOverlay = styled.div``;
// hoverComponents
export const MovieBgHover = styled.div``;
export const MovieContent = styled.div``;
export const PlayBtn = styled.button``;
export const MovieTitle = styled.div``;
export const DurationAndYear = styled.div``;

export const MovieDesc = styled.div``;
export const GenreAndSocials = styled.div``;

export const MovieItemSec = styled.div`
  ${HoverLink} {
    position: relative;
    background-color: ${colors.black};
    color: ${colors.white};
    cursor: pointer;
    min-width: calc(20vw - 60px);
    max-width: calc(20vw - 60px);
    height: 400px;

    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-between;
    box-shadow: ${shadows.boxShadow};

    ${MovieBg} {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.3s ease;
    }
    ${MovieOverlay} {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      background-color: ${colors.overlay};
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;
    }
    /* THESE ELEMENTS ARE SHOWING WHEN ITEM IS ON HOVER  */
    ${MovieBgHover} {
      width: 100%;
      height: 50%;
      transition: 0.3s ease;
      flex: 50%;
      overflow: hidden;
    }
    ${MovieContent} {
      flex: 50%;

      color: ${colors.white};
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-between;
      width: 100%;
      padding: 1rem;

      ${MovieTitle} {
        h4 {
          font-size: 1.5rem;
          line-height: 1.5rem;
        }
        /* margin-bottom: 1rem; */
      }
      ${DurationAndYear} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 1.1rem;
          line-height: 1.1rem;
          font-weight: 200;
          letter-spacing: 1px;
        }
      }
      ${MovieDesc} {
        flex: 2;
        p {
          font-size: 1.2rem;
          line-height: 2rem;
          font-weight: 200;
        }
      }
      ${GenreAndSocials} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 1.1rem;
          line-height: 1.1rem;
          font-weight: 200;
          letter-spacing: 1px;
          text-transform: capitalize;
        }
        svg {
          font-size: 1.2rem;
          padding: 2px;
          transition: 0.3s ease;
        }
      }
    }
  }
  &:hover {
    a {
      color: ${colors.white};
      transform: scale(1.08);
      transform-origin: center;
    }
  }

  @media ${device.laptopL} {
    ${HoverLink} {
      min-width: calc(25vw - 60px);
      max-width: calc(25vw - 60px);
      height: 370px;
    }
  }
  @media ${device.laptop} {
    ${HoverLink} {
      min-width: calc(33.3vw - 40px);
      max-width: calc(33.3vw - 40px);
      height: 400px;
    }
  }
  @media ${device.tablet} {
    ${HoverLink} {
      min-width: calc(50vw - 20px);
      max-width: calc(50vw - 20px);
      height: 460px;
    }
  }
  @media ${device.mobileL} {
    ${HoverLink} {
      min-width: calc(100vw - 20px);
      max-width: calc(100vw - 20px);
      height: 460px;
    }
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
