import styled from "styled-components";
import { device } from "Responsive";
import { colors } from "ConstComponents";

// COMPONENTS

export const TableSec = styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${colors.primary};

  .MuiDataGrid-columnHeaderTitle {
    color: ${colors.primary};
    font-size: 1.5rem;
  }

  .MuiDataGrid-cell {
    /* text-align: center !important; */
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: capitalize;
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
