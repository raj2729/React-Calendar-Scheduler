import React,  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { List, ListItem, Drawer } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UserTable from "./AdminUsers";
import InstructorTable from "./AdminInstructors";
import OrdersTable from "./AdminOrders";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card"
import "./admindashboard.css"
import GroupIcon from '@material-ui/icons/Group';
import ComputerIcon from '@material-ui/icons/Computer';
// actions
import { getAllUsers, getAllInstructors, getCoursesSummary, getAllOrders } from "../actions/adminActions";
import CourseTable from "./AdminCourses";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// var Component = React.Component;
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ReactJS', 159, 6.0),
  createData('NodeJS', 237, 9.0),
  createData('AngularJS', 262, 16.0),
  createData('Django', 262, 16.0),
];
function AdminDashboard() {
    const dispatch = useDispatch()
    const [date, changeDate] = useState(new Date());

    const [open, setOpen] = useState(false)
    useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllInstructors())
      dispatch(getCoursesSummary())
      dispatch(getAllOrders())
    }, [])
    const [mode, setMode] = useState("dashboard")

    const list = ()=> (
        <div onClick={()=>{setOpen(false)}}>
          <List>
            <ListItem><Button onClick = {()=>setMode("dashboard")}><h4><i className="fa fa-th-large"></i> Dashboard</h4></Button></ListItem>
            <ListItem><Button onClick = {()=>setMode("courses")}><h4><i className="fa fa-play-circle"></i> Courses</h4></Button></ListItem>
            <ListItem><Button onClick = {()=>setMode("users")}><h4><i className="fa fa-users"></i> Students</h4></Button></ListItem>
            <ListItem><Button onClick = {()=>setMode("instructors")}><h4><i className="fa fa-bar-chart"></i> Instructors</h4></Button></ListItem>
            <ListItem><Button onClick = {()=>setMode("orders")}><h4><i className="fa fa-money"></i> Orders</h4></Button></ListItem>
          </List>
        </div>
      )
      const splineoptions = {
        animationEnabled: true,
        title:{
          text: "Monthly Sales - 2017"
        },
        axisX: {
          valueFormatString: "MMM"
        },
        axisY: {
          title: "Sales (in USD)",
          prefix: "$"
        },
        data: [{
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 }
          ]
        }]
      }
      const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Purchased Courses Analytics"
        },
        data: [{
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Frontend" },
            { y: 49, label: "Backend" },
            { y: 9, label: "Database" },
            { y: 5, label: "Data Science" },
            { y: 19, label: "Cyber Security" }
          ]
        }]
      }
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"black"}}>
                <Button  style={{ textDecoration: "none", color: "white" }} onClick={()=>{setOpen(true)}}><MenuIcon/>Admin Panel</Button>
                <Button  style={{ textDecoration: "none", color: "white" }} onClick={()=>{alert('Log out implement karna hai')}}>Logout<ExitToAppIcon/></Button>
            </div>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={()=>{setOpen(false)}}
            >
                {list()}
            </Drawer>
            {mode==="dashboard" && 


            <div>
            <h1 style={{padding:"20px"}}>Admin Panel Dashboard</h1>
            <br />
            <Grid container>
              <Grid item xs={12} sm={4} style={{padding: "20px", marginRight:"5%"}}>
              <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: "300px" }} size="small" aria-label="a dense table">
        <TableHead>
        <h3 style={{paddingLeft:"40px"}}>Top&nbsp;Selling&nbsp;Courses</h3>
          <TableRow>
         
            <TableCell><h4>Course</h4></TableCell>
            <TableCell><h4>Sales</h4></TableCell>
            <TableCell><h4>Price</h4></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className="userscard">
                  <h1 style={{textAlign:"center"}}>Users</h1>
                  <GroupIcon className="groupicon" />
                  <h1 style={{textAlign:"center"}}>4971</h1>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Card className="coursecard">
                  <h1 style={{textAlign:"center"}}>Courses</h1>
                  <ComputerIcon className="courseicon" />
                  <h1 style={{textAlign:"center"}}>4971</h1>
                </Card>
              
              </Grid> 
            </Grid>

            <Grid container>
              <Grid item xs={12} sm={4}>
              <br /><br />
              <div className="calendar">
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                autoOk
                orientation="landscape"
                variant="static"
                openTo="date"
                value={date}
                onChange={changeDate}
                
              />
              </MuiPickersUtilsProvider>
              </div> 
              </Grid>
              <Grid item xs={12} sm={4}>
            <div className="piechart">
              <CanvasJSChart options = {options} 
				      //  onRef={ref => this.chart = ref}
			        /></div>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Card className="coursecard">
                  <h1 style={{textAlign:"center"}}>Instructors</h1>
                  <GroupIcon className="courseicon" />
                  <h1 style={{textAlign:"center"}}>4971</h1>
                </Card>
              </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={12} sm={4}>
            <CanvasJSChart options = {splineoptions}
				/* onRef={ref => this.chart = ref} */
			/>
                </Grid>
              <Grid item xs={12} sm={4}>
              <Card className="coursecard">
                  <h1 style={{textAlign:"center"}}>Revenue(Rs.)</h1>
                  <GroupIcon className="courseicon" />
                  <h1 style={{textAlign:"center"}}>4971</h1>
                </Card>
              </Grid>
            
            </Grid>
          
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }
            {mode==="courses" && <CourseTable/>}
            {mode==="users" && <UserTable/>}
            {mode==="instructors" && <InstructorTable/>}
            {mode==="orders" && <OrdersTable/>}
        </div>
     );
}

export default AdminDashboard;