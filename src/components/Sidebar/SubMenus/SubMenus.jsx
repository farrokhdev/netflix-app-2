import React, { useState } from "react";
import { ALink, Para } from "ConstComponents";
import { SubSec, SubContent } from "./SubStyle";

export const SubMenus = ({ content }) => {
  return (
    <>
      <SubSec>
        {content.map((item, indx) => {
          const { title, to, submenu } = item;
          if (!submenu) {
            return (
              <SubContent key={indx}>
                <ALink to={to}>{title}</ALink>
              </SubContent>
            );
          } else {
            return (
              <SubContent key={indx}>
                <Para>{title}</Para>
                {submenu.map((subItem, indx) => {
                  const { title, to } = subItem;
                  return (
                    <ALink key={indx} to={to}>
                      {title}
                    </ALink>
                  );
                })}
              </SubContent>
            );
          }
        })}
      </SubSec>
    </>
  );
};
