import { H2, Para } from "ConstComponents";
import { SideMenu } from "FakeData";
import React from "react";
import { SideSec, Menu } from "./SideStyle";
import { SubMenus } from "./SubMenus";

export const Sidebar = () => {
  return (
    <>
      <SideSec>
        {SideMenu.map((sideItem, indx) => {
          const { header, content } = sideItem;
          return (
            <Menu key={indx}>
              <Para>{header}</Para>
              <SubMenus content={content} />
            </Menu>
          );
        })}
      </SideSec>
    </>
  );
};
