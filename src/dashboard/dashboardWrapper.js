import styled from "styled-components";
const DashboardWrapper = styled.div`
  .dashboard {
    display:flex;
   }
   .sidebar{
     width:300px;
     height:100vh;
     position:sticky;
     top:0;
     background-color:#222D32;
    }
    .accordion-item{
     background-color:#222D32;
color:#fff;
    }
    .collapsed{
      background-color:#222D32;
      color:#fff
    }
    .accordion-button:focus{
      background-color:#2C3B41  !important;
      
    }
    
    header{
      position:sticky;
      top:0;
      background-color:#F5F5F7;
    }
   .rightSide{
    flex:1;
       
 
    }
    .content{

    }
   .imgAdmin{
     width:32px;
     height:32px;
   }
`;
export default DashboardWrapper;
