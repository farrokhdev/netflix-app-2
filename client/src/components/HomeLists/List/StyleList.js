import styled from "styled-components";
import { colors } from "../../../Variables";
import { device } from "../../../responsive";

export const ListTitle = styled.div``;

export const ListSec = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  /* overflow: hidden; */
  padding: 2rem 0px;
  ${ListTitle} {
    color: ${colors.white};
  }

  .slick-slider {
    width: 100%;
    .slick-arrow {
      z-index: 5;
      &:hover {
      }
      &::before {
        height: 100%;
        border-radius: 0px;
        font-size: 3rem;
      }
    }
    .slick-list {
      height: 100%;
      overflow: visible;
      .slick-track {
        /* padding: 10px; */
        margin-right: 0;
        margin-left: 0;
        /* height: 100%;
        width: 100%; */
        .slick-slide {
          height: 100%;
        }
      }
    }
  }

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
