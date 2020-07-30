import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";
import "@fluentui/react/dist/css/fabric.css";

const SideMenu = () => {
  const navigationStyles = {
    root: {
      height: "100vh",
      boxSizing: "border-box",
      border: "1px solid #eee",
      overflowY: "auto",
      paddingTop: "10vh",
    },
  };

  const links = [
    {
      links: [
        {
          name: "Dashboard",
          key: "key1",
          url: "/dashboard",
          iconProps: {
            iconName: "News",
            styles: {
              root: {
                fontSize: 20,
                color: "#106ebe",
              },
            },
          },
        },
        {
          name: "Settings",
          key: "key2",
          url: "/",
          iconProps: {
            iconName: "PlayerSettings",
            styles: {
              root: {
                fontSize: 20,
                color: "#106ebe",
              },
            },
          },
        },
        {
          name: "Transfer",
          key: "key3",
          url: "/",
          iconProps: {
            iconName: "SwitcherStartEnd",
            styles: {
              root: {
                fontSize: 20,
                color: "#106ebe",
              },
            },
          },
        },
        {
          name: "Stats",
          key: "key4",
          url: "/",
          iconProps: {
            iconName: "StackedLineChart",
            styles: {
              root: {
                fontSize: 20,
                color: "#106ebe",
              },
            },
          },
        },
      ],
    },
  ];

  initializeIcons();
  return <Nav groups={links} selectedKey="key1" style={navigationStyles} />;
};

export default SideMenu;
