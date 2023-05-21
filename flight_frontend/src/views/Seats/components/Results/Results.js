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
import { ToastContainer } from 'react-toastify'
import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import Calender from 'views/Seats/AddSeats/Calender';
import { COLORS } from 'utils/COLORS.';
import { GetFlightHook } from 'Hook/Flight/Get-Countries-Hook';
import { useSelector } from 'react-redux';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
import { DeletSeatApi } from 'Hook/Seat/Delet-Seat-Hook';
import EditeSeats from 'views/Seats/EditeSeat/EditeSeat';
import FilterSeats from 'views/Seats/FilterSeats/FilterSeats';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700,
    width:"100%"
   
    
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

  const { className,city,country, customers,handleShowADD, ...rest } = props;

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
const handelhidesm=()=> setSmShow(false)
  const {data}=GetSeatHook()

  const {GetSeatData} =useSelector(state => state.GetSeatRedux)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,setid]=useState()
  const {isLoading,mutate:SubmitDeletseat,isError,error,data:DataDeletSeat} =  DeletSeatApi()
  const {DeletSeatData} = useSelector(state => state.DeletSeatRedux)
const HandelDelet=(id)=>{
  SubmitDeletseat(id)
}
useEffect(()=>{
  if(DataDeletSeat){
    handleClose()
  }
},[DataDeletSeat])

const [customersData, setcustomersData] = useState();
const [showEdite, setShowEdite] = useState(false);

  const handleCloseEdite = () => setShowEdite(false);
  const handleShowEdite = () => setShowEdite(true)

  // let reversedArray = GetSeatData?.map((item, index) => GetSeatData[GetSeatData.length - 1 - index]);

  // const [items, setItems] = useState(reversedArray);
  // const addItem = (newItem) => {
  //   setItems([...items, newItem]);
  // }

  let [reversedArray,setreversedArray] = useState();
const [tableData,settableData]=useState();





useEffect(()=>{
  if(GetSeatData){
  const copy =[...GetSeatData]
    if(copy)
        settableData(copy)

  }


},[GetSeatData])

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
        className=''
        size="md"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edite Seat</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <EditeSeats handleCloseEdite={handleCloseEdite} customersData={customersData} />
        </Modal.Body>
      </Modal>


   <Modal
        className=''
        size="sm"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Alert</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column '>
          <h6 className='d-flex justify-content-center align-items-center'>Are you sure you want to delete the  Seat ?</h6>
          <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
        <button type="button" className="btn btn-secondary  CANCELBTN px-5 " onClick={()=>HandelDelet(id)} style={{backgroundColor:COLORS.purple,color:"white"}} >Delete</button>

        <button type="button" className="btn btn-secondary CANCELBTN px-5" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
        </div>

        
        </Modal.Body>
      </Modal>


<Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 id='451' className='p-2' style={{color:"white"}}>Deplicate</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <Calender customersData={customersData} handelhidesm={handelhidesm} />
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
            <div>
  <div className='d-flex justify-content-between align-items-center'>
            <h2 style={{marginTop:"0px",marginLeft:"0px",color:COLORS.purple}}>Seats</h2>
            <Button
            style={{backgroundColor:COLORS.purple}}
           onClick={handleShowADD}
             color="primary"
             variant="contained"
           >
           Add New Seat
           </Button>
           </div>
           <div>
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> Seat</li>
    <li class="breadcrumb-item"> One Way</li>
    <li class="breadcrumb-item active" aria-current="page">{country}</li>
    <li class="breadcrumb-item active" aria-current="page">{city}</li>
  </ol>
</nav>
           </div>
            </div>
          
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar style={{overflow:"auto"}}>
        
            <div className={classes.inner} >
              <Table >
                
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                   
                  <TableCell style={{fontSize:"15px",marginRight:"5px",color:"white",fontWeight:"700"}} className='text-center'>
                  <FilterSeats title="AirLines" tableData={tableData} settableData={settableData}/>

                  </TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterSeats title="Flight No." tableData={tableData} settableData={settableData}/>

                    
                    </TableCell>

                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Dep.Date</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Arr.Date</TableCell>

                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>
                      <FilterSeats title="Dep.APT" tableData={tableData} settableData={settableData}  />
                    </TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterSeats title="Arr.APT" tableData={tableData} settableData={settableData}  />
                    </TableCell>

                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Dep.Time</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Arr.Time</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Duration</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Weight</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>To.Seats No.</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Avail.Seats</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>Suppliers</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>U.S.price</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center'>CO.S.price</TableCell>

                    {/* <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Craeted At</TableCell> */}

                    <TableCell style={{fontSize:"15px",color:"white",fontWeight:"700"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reversedArray?.map(customer => (
                    <StyledTableRow
                      // hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                     
                      
                      <TableCell className={customer === GetSeatData[GetSeatData?.length - 1] ? "new-item" : ""} style={{padding:"6px"}}>
                        {customer?.airlines}
                      </TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.flight_number}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.departure_date}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.arrival_date}</TableCell>

                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.departure_airport}</TableCell>

                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.arrival_airport}</TableCell>

                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.departure_time}</TableCell>

                      <TableCell className='text-center' style={{padding:"6px"}}>
                      {customer?.arrival_time}
                      </TableCell>


                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.duration}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.weight}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.total_seat_number}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.available_seats}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.suppliers}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.seat_price_enduser}</TableCell>
                      <TableCell className='text-center' style={{padding:"6px"}}>{customer?.seat_price_company}</TableCell>

                      {/* <TableCell className='text-center' style={{padding:"6px"}}>{customer?.created_at}</TableCell> */}

                      <TableCell className='text-center' align="right" style={{padding:"6px"}}>
                        <div className='d-flex '>
                        {
                          user?.role === "superadmin" ? (
                            <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(handleShow(),setid(customer?.id))}} className="fa-solid fa-trash-can m-1"></i>

                          ):null
                        }
                        

                       
                      <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(handleShowEdite(),setcustomersData(customer))}} className="fa-solid fa-pen-to-square m-1"></i>
                      <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}}  onClick={()=>{return(handelshow(),setcustomersData(customer))}} className="fa-solid fa-calendar-days m-1"></i>
                        </div>
                        
                        
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedCustomers} />
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
