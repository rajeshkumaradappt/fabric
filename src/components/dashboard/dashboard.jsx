import React from "react";
import "@fluentui/react/dist/css/fabric.css";
import SideMenu from "./sidemenu";
import Cards from "./cards";
import Table from "./table";

const Dashboard = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2 ms-xl2">
          <SideMenu />
        </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
          <div className="ms-Grid-row">
            <Cards />
          </div>
          <div className="ms-Grid-row">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
