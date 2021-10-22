import styled from "styled-components";
import { device } from "Responsive";

export const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  text-transform: capitalize;
  @media ${device.laptopL} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 2.8rem;
  }
  @media ${device.tablet} {
    font-size: 2.6rem;
  }
  @media ${device.mobileL} {
    font-size: 2.4rem;
  }
  @media ${device.mobileM} {
    font-size: 2.2rem;
  }
  @media ${device.mobileS} {
    font-size: 2rem;
  }
`;
export const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  text-transform: capitalize;
  @media ${device.laptopL} {
    font-size: 2.6rem;
  }
  @media ${device.laptop} {
    font-size: 2.4rem;
  }
  @media ${device.tablet} {
    font-size: 2.2rem;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
  }
  @media ${device.mobileM} {
    font-size: 1.8rem;
  }
  @media ${device.mobileS} {
    font-size: 1.6rem;
  }
`;
export const H3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: capitalize;

  @media ${device.laptopL} {
    font-size: 2.2rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
`;
export const H4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: capitalize;

  @media ${device.laptopL} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
  @media ${device.mobileM} {
    font-size: 1.4rem;
  }
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
`;
export const Para = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  @media ${device.laptopL} {
    font-size: 1.6rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  @media ${device.tablet} {
    font-size: 1.4rem;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`;
export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`;
