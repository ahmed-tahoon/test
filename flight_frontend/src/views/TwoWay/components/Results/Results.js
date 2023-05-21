import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-multi-date-picker";

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import Calender from 'views/Seats/AddSeats/Calender';
import { COLORS } from 'utils/COLORS.';
import Edite from 'views/TwoWay/Edite/Edite';
import color from '@material-ui/core/colors/amber';
import AddRoundTrip from 'views/TwoWay/Add-RoundTrip/AddRoundTrip';
import { GetSeatTwoWayHook } from 'Hook/SeatTwoWay/Get-TwoWay-Hook';
import { useSelector } from 'react-redux';
import EditRoundTrip from 'views/TwoWay/Edit-RoundTrip/EditRoundTrip';
import { ToastContainer } from 'react-toastify';
import FiltertwoWay from 'views/TwoWay/FiltertwoWay/FiltertwoWay';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700,
   
    
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#FEE3D8",
    },
  },
}))(TableRow);
const Results = props => {


 


  const [open, setOpen] = useState(false)

  const { className, customers, ...rest } = props;

  const classes = useStyles();

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked
      ? customers.map(customer => customer.id)
      : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(1)
      );
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])
  const datePickerRef = useRef()
  const [smShow, setSmShow] = useState(false);
  
  const handelshow =() => setSmShow(true)
  const handelHide =() => setSmShow(false)


  const [smShowaDD, setsmShowaDD] = useState(false);
  const handelshowADD =() => setsmShowaDD(true)
  const handelCloseADD =() => setsmShowaDD(false)

  const [smShowEdit, setsmShowEdit] = useState(false);
  const handelshowEdit =() => setsmShowEdit(true)
  const handelCloseEdit =() => setsmShowEdit(false)
  const {data}=GetSeatTwoWayHook()

  const {GetSeatTwoWayData} =useSelector(state => state.GetSeatTwoWayRedux)
  // let reversedArray = GetSeatTwoWayData?.map((item, index) => GetSeatTwoWayData[GetSeatTwoWayData.length - 1 - index]);


const [customEditData,setcustomEditData]=useState()




let [reversedArray,setreversedArray] = useState();
const [tableData,settableData]=useState();





useEffect(()=>{
  if(GetSeatTwoWayData){
  const copy =[...GetSeatTwoWayData]
    if(copy)
        settableData(copy)

  }


},[GetSeatTwoWayData])

useEffect(()=>{

  if(tableData)
  setreversedArray(tableData.reverse())

  // setreversedArray(tableData?.map((item, index) => GetFlightData[GetFlightData.length - 1 - index]))

},[tableData])
const user =JSON.parse(localStorage.getItem('user')) ;

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
   
    
<Modal
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 style={{color:"white"}} className='p-2'>EDIT</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <Edite handelHide={handelHide} />
        </Modal.Body>
      </Modal>


   
    
      <Modal
        size="lg"
        show={smShowaDD}
        onHide={() => setsmShowaDD(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 style={{color:"white"}} className='p-2'>Add Round Trip</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <AddRoundTrip handelCloseADD={handelCloseADD}/>
        </Modal.Body>
      </Modal>


      <Modal
        size="xl"
        show={smShowEdit}
        onHide={handelCloseEdit}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 style={{color:"white"}} className='p-2'>Edit Round Trip</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <EditRoundTrip handelCloseEdit={handelCloseEdit} customEditData={customEditData}/>
        </Modal.Body>
      </Modal>

{/* <DatePicker multiple  value={value} onChange={setValue} autofocus/> */}

      {/* <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {customers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(customers.length / rowsPerPage)}
      </Typography> */}
      <Card style={{fontSize:"50px"}}>
        
        <CardHeader
        // style={{margin:"0px",padding:0}}
        // avatar={
        //   <img 
        //   style={{height:"100px",width:"200px"}}
        // src='/images/logos/Dark.png'
        // />
        // }
          action={<GenericMoreButton />}
          title={
            <div className='d-flex justify-content-start  flex-column'>
            <h2 style={{marginTop:"0px",marginLeft:"0px",color:COLORS.purple}}>Seats</h2>
            <div>
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"style={{color:COLORS.purple}}> Seat</li>
    <li class="breadcrumb-item" style={{color:COLORS.purple}}>two Way</li>
    <li class="breadcrumb-item active" style={{color:COLORS.purple}} aria-current="page">data</li>

  </ol>
</nav>
           </div>
            <div className='d-flex justify-content-start align-items-center'>
            <Checkbox color={COLORS.purple}
                   checked   
                       
                      />
              <h5 style={{marginBottom:0 ,marginRight:20}}>Default price = OutBound Flight Price + Return Flight Price</h5>
              <Button
           style={{backgroundColor:COLORS.purple}}
            color="primary"
            variant="contained"
            onClick={handelshow}
          >
          Edit
          </Button>
            </div>
            </div>
           
          }
        />
        <Divider />
        <CardContent className={classes.content} style={{overflow:"auto"}}>
          <PerfectScrollbar style={{overflow:"auto"}} >
            <div className={classes.inner}  >
       

              <Table >
                
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                   
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Flight Two Way</TableCell>
                    <TableCell style={{fontSize:"19px",marginRight:"5px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FiltertwoWay title="AirLines" tableData={tableData} settableData={settableData}/>

                    </TableCell>
                    <TableCell style={{fontSize:"19px",marginRight:"5px",color:"white",fontWeight:"700"}} className='text-center'>Flight No.</TableCell>



                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Dep.APT</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Arr.APT</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Dep.Time</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Arr.Time</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Duration</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Weight</TableCell>

                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Suppliers</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>No Of Dayes</TableCell>

                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>S.price</TableCell>

                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reversedArray?.map(customer => (
                      <StyledTableRow
                      // hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                     
                     

                      <TableCell className='text-center'>
                      AMM-IST-AMM
                      </TableCell>
                      

                      <TableCell className='text-center '>RJ</TableCell>
                      <TableCell className='text-center px-0'><div>
                        <p>{customer?.seat?.flight_number}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.flight_number}</p>
                        </div></TableCell>
                      <TableCell className='text-center px-0'><div>
                        <p>{customer?.seat?.departure_airport}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.departure_airport}</p>
                        </div></TableCell>
                      <TableCell className='text-center px-0'>
                        <div>
                        <p>{customer?.seat?.arrival_airport}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.arrival_airport}</p>
                        </div>
                        </TableCell>

                      <TableCell className='text-center px-0'>
                      <div>
                        <p>{customer?.seat?.departure_time}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.departure_time}</p>
                        </div>
                      </TableCell>


                      <TableCell className='text-center px-0'>
                      <div>
                        <p>{customer?.seat?.arrival_time}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.arrival_time}</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>{customer?.seat?.duration}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.duration}</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>{customer?.seat?.weight}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.weight}</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>{customer?.seat?.suppliers}</p> 
                        <hr/>
                        <p>{customer?.secondseat?.suppliers}</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>Days={customer?.days}</TableCell>
                      <TableCell className='text-center'>{customer?.price}</TableCell>
                     
                      <TableCell className='text-center' align="right">
                        <div className='d-flex '>
                        {
                          user?.role === "superadmin" ? (
                            <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} className="fa-solid fa-trash-can m-1"></i>

                          ):null
                        }

                       
                      <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(setcustomEditData(customer),handelshowEdit()) }}  className="fa-solid fa-pen-to-square m-1"></i>
                     
                        </div>
                        
                        
                      </TableCell>
                    </StyledTableRow>

                    
                    
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        {/* <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions> */}
      </Card>
      {/* <TableEditBar selected={selectedCustomers} /> */}
      <Button
           style={{backgroundColor:COLORS.purple,marginTop:20}}
            color="primary"
            variant="contained"
            onClick={handelshowADD}
          >
          Add Round Trip
          </Button>
          <ToastContainer></ToastContainer>

    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

Results.defaultProps = {
  customers: []
};

export default Results;
