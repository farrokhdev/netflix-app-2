import styled from "styled-components";
import { device } from "Responsive";
import { Link } from "react-router-dom";
// IMG inside a div
export const ImgFit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;
// Link
export const ALink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s ease;

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
// BUTTON
export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
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
// Label
export const LabelStyled = styled.label`
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s ease;
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
// Input
export const InputStyled = styled.input`
  font-size: 1.5rem;
  font-weight: 400;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  &::placeholder {
    font-size: 1.5rem;
  }
  &:focus-visible {
    outline: none;
  }

  transition: 0.3s ease;
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    &::placeholder {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileS} {
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
`;
// Input
export const TextStyled = styled.textarea`
  font-size: 1.5rem;
  font-weight: 400;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  &::placeholder {
    font-size: 1.5rem;
  }
  &:focus-visible {
    outline: none;
  }

  transition: 0.3s ease;
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    &::placeholder {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileS} {
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
`;
// Select
export const SelectStyled = styled.select`
  font-size: 1.5rem;
  font-weight: 400;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  &::placeholder {
    font-size: 1.5rem;
  }
  &:focus-visible {
    outline: none;
  }

  transition: 0.3s ease;
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    &::placeholder {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileS} {
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
`;
