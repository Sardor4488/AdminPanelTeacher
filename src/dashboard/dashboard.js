import React from "react";
import DashboardWrapper from "./dashboardWrapper";
import logo from "./Logo 1.png";
import AccordionSummary from "@mui/material/AccordionSummary";
import adminImg from "./Ellipse 5.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
const Dashboard = (props) => {
  return (
    <DashboardWrapper>
      <div className="dashboard">
        <div className="sidebar">
          <div className="text-center py-3">
            <img src={logo} className="" alt="" />
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="rightSide shadow">
          <header className="w-100 text-center d-flex justify-content-end p-4 align-align-items-center shadow pt-3">
            <div className="d-flex align-items-center">
              <img src={adminImg} className="imgAdmin mx-3" alt="" />
              <p className="m-0 fw-bold  ">Admin</p>
            </div>
          </header>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
          <h1>iiiii</h1>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
// <Badge badgeContent={4} color="primary">import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import { Badge } from '@mui/material';
//               <NotificationsNoneIcon color="action" />
//             </Badge>
