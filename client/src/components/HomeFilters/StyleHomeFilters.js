import styled from "styled-components";
import { colors } from "../../Variables";
import { device } from "../../responsive";

export const GenresGroup = styled.div``;
export const FiltersSec = styled.section`
  background-color: ${colors.black};
  padding: 40px 60px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  color: ${colors.white};

  h3 {
    font-size: 2rem;
  }
  ${GenresGroup} {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    button {
      text-align: center;
      padding: 10px;
      border-radius: 4px;
    }
    .red {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
  @media ${device.laptopL} {
    ${GenresGroup} {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  @media ${device.laptop} {
    padding: 40px 40px;
    ${GenresGroup} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media ${device.tablet} {
    padding: 40px 20px;
    ${GenresGroup} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media ${device.mobileL} {
    padding: 40px 10px;
    ${GenresGroup} {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
