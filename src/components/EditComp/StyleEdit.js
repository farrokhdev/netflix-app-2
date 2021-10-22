import styled from "styled-components";
import { colors, shadows } from "ConstComponents";
import { device } from "Responsive";
import { Para, Span, ALink } from "ConstComponents";

// COMPONENTS
export const TitleImgBox = styled.div``;
export const SmallImg = styled.div``;
export const InfoBox = styled.div``;
export const BackBtn = styled(ALink)``;

export const CastBox = styled.div``;

export const EditInfoSec = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 200px;
  box-shadow: ${shadows.boxShadow};
  border-radius: 4px;
  padding: 2rem;
  ${TitleImgBox} {
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: center;
    ${SmallImg} {
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50px;
    }
  }
  ${BackBtn} {
    background-color: ${colors.white};
    border: 1px solid ${colors.third};
    color: ${colors.third};
    width: fit-content;
    border-radius: 4px;
    padding: 5px;
    &:hover {
      background-color: ${colors.third};
      color: ${colors.white};
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
