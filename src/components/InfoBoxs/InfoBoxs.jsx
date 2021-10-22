import { H2, Para, Span } from "ConstComponents";
import React from "react";
import { InfoSec, Box, Content } from "./InfoBoxsStyle";
export const InfoBoxs = ({ userMonthly, userDaily, userYearly }) => {
  return (
    <InfoSec>
      <Box>
        <H2>Users Per Day</H2>
        <Content>
          {userDaily.map((item, indx) => {
            return (
              <div className="item" key={indx}>
                <Para> Day | {item._id}</Para>
                <Span>total | {item.total}</Span>
              </div>
            );
          })}
        </Content>
      </Box>
      <Box>
        <H2>Users Per Month</H2>
        <Content>
          {userMonthly.map((item, indx) => {
            return (
              <div className="item" key={indx}>
                <Para>Month | {item.name}</Para>
                <Span>Total | {item.userPerMonth}</Span>
              </div>
            );
          })}
        </Content>
      </Box>
      <Box>
        <H2>Users Per Year</H2>
        <Content>
          {userYearly.map((item, indx) => {
            return (
              <div className="item" key={indx}>
                <Para>Year | {item._id}</Para>
                <Span>Total | {item.total}</Span>
              </div>
            );
          })}
        </Content>
      </Box>
    </InfoSec>
  );
};
