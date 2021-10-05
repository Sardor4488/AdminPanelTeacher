import React from "react";
import DashboardWrapper from "./dashboardWrapper";
import logo from "./Logo 1.png";
import AccordionSummary from '@mui/material/AccordionSummary';
import adminImg from "./Ellipse 5.png";
import "bootstrap/dist/css/bootstrap.min.css";
 const Dashboard = (props) => {
  return (
    <DashboardWrapper>
      <div className="dashboard">
        <div className="sidebar">
          <div className="text-center py-3">
            <img src={logo} className="" alt="" />
          </div>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" 
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className="rightSide shadow">
          <header className="w-100 text-center d-flex justify-content-end p-4 align-align-items-center shadow pt-3">
            <div className="d-flex align-items-center">
              <img src={adminImg} className="imgAdmin mx-3" alt="" />
              <p className="m-0 fw-bold  ">Admin</p>
            </div>
          </header>
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
