import { Home } from "@material-ui/icons";

export const SideMenu = [
  {
    header: "dashboard",
    content: [
      {
        title: "home",
        to: "/",
      },
      {
        title: "analytics",
        to: "/analytics",
      },
    ],
  },
  {
    header: "quick menus",
    content: [
      {
        title: "users",
        submenu: [
          {
            title: "all users",
            to: "/allusers",
          },
          {
            title: "create user",
            to: "/createuser",
          },
        ],
      },
      {
        title: "products",
        submenu: [
          {
            title: "all products",
            to: "/allproducts",
          },
          {
            title: "create products",
            to: "/createproduct",
          },
        ],
      },
      {
        title: "list",
        submenu: [
          {
            title: "all list",
            to: "/alllist",
          },
          {
            title: "create list",
            to: "/createlist",
          },
        ],
      },
    ],
  },
];
