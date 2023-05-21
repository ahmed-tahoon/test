import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Countries from 'layouts/Dashboard/components/NavBar/Countries';
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
import { ToastContainer } from 'react-toastify'
import { GetcountryNavBarHook } from 'Hook/Country/Get-Country-NavBar-Hook';
import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { COLORS } from 'utils/COLORS.';
import { DeletFlightApi } from 'Hook/Flight/Delet-Flight-Hook';
import { useSelector } from 'react-redux';
import EditeFlight from 'views/Flights/EditeFlight/EditeFlight';
import { useEffect } from 'react';
import { AddFlightByCheckBoxtApi } from 'Hook/Flight/Use-Add-Flight-By-CheckBox-Hook';
import EditFlightCopy from 'views/Flights/Editcopy/EditeCopy';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FilterFlight from 'views/Flights/FilterFlight/FilterFlight';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
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
  const { className,GetFlightData,handleShowADD,handleCloseADD, customers, ...rest } = props;

  const classes = useStyles();
  const [arr, setarr] = useState([]);
  const [arrtwoway, setarrtwoway] = useState([]);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (customer) => {
    if(GetSeatData && GetFlightData){
      for (let i = 0; i < GetSeatData?.length; i++) {
        const checkdelet = GetFlightData.filter((item)=>{
          return customer?.id === GetSeatData[i]?.flight?.id;
        });
        setcheklist(checkdelet);
      }
    }
    setShow(true);
  };
  
const [id,setid]=useState()
  const {isLoading,mutate:SubmitDeletFlight,isError,error,data} =  DeletFlightApi()
  const {DeletFlightData} = useSelector(state => state.DeletFlightRedux)
const HandelDelet=(id)=>{
  
    SubmitDeletFlight(id)

  
}
useEffect(()=>{
  if(data){
    handleClose()
  }
},[data])
const[customerData,setCustomerData] =useState()
const [showEdite, setShowEdite] = useState(false);
  const handleCloseEdite = () => setShowEdite(false);
  const handleShowEdite = () =>{ return (setShowEdite(true))}

const [itemData,setitemData]=useState()
const user =JSON.parse(localStorage.getItem('user')) ;

const [ids,setides]=useState([])
const navdata =JSON.parse(localStorage.getItem("navbarcountry"))
const array =navdata?.map((item)=>{return(item?.id)})
const handelchangecheckbox=(e)=>{
  let value =e.target.value
if(array?.length === 0){
  setides((oldarry)=>[...oldarry,value])

}else if(array?.length > 0){
  setides((oldarry)=>[...oldarry,value,array])
}

}
const {data:AddFlightByCheckData,mutate:SubmitAddFlightByCheckBox} =  AddFlightByCheckBoxtApi()
const {AddFlightByCheckBoxtData} = useSelector(state => state.AddFlightByCheckBoxtRedux)

const AddFlightCheckBox =()=>{

  const formdata={
    data:{
      "ids":ids

    },
    id:user?.id
  }

// const  id=user?.id


  SubmitAddFlightByCheckBox(formdata)

}
  let [reversedArray, setreversedArray] = useState();
  let [reversedArray2, setreversedArray2] = useState();
  const [tableData, settableData] = useState();
  const [tableData2, settableData2] = useState();





useEffect(()=>{
  if(GetFlightData){
  const copy =[...GetFlightData]
    if(copy){
        settableData(copy)
    }
    console.log(copy,"skfljksdlhfkjlsdhfjkhsdjkfhdskf");
  }


},[GetFlightData])

useEffect(()=>{

  if(tableData)
  setreversedArray(tableData.reverse())
  console.log(tableData,'fsdfsdlfksdlfksdlfk');
  // setreversedArray(tableData?.map((item, index) => GetFlightData[GetFlightData.length - 1 - index]))

},[tableData])




  useEffect(() => {
    if (navdata) {
      // Combine all flight IDs from navbarcountry.city into a Set for efficient lookup
      const flightIds = new Set();
      navdata.forEach(item => {
        item.city.forEach(city => {
          if (city.flight) {
            city.flight.forEach(flight => {
              flightIds.add(flight.id);
            });
          }
        });
      });

      // Filter flights from tableData based on their presence in navbarcountry.city
      if (tableData) {
        const filteredFlights = tableData.filter(flight => flightIds.has(flight.id));
        settableData2(filteredFlights);
        console.log('Welcome', filteredFlights);
      }
    }
    return () => {
      // Cleanup function
      // Clear any pending tasks or subscriptions
    };
  }, [tableData]);

  useEffect(() => {

    if (tableData2) {
      setreversedArray2(tableData2.reverse())
      console.log(tableData2, 'ahmed please');
    }
    // setreversedArray(tableData?.map((item, index) => GetFlightData[GetFlightData.length - 1 - index]))

  }, [tableData2])

const {data:seatdata}=GetSeatHook()

const {GetSeatData} =useSelector(state => state.GetSeatRedux)

const [cheklist,setcheklist]=useState([])
console.log(cheklist);

// useEffect(()=>{
//   if(GetSeatData && GetFlightData){

//     for (let i = 0; i < GetSeatData?.length; i++) {
//       const checkdelet = GetFlightData.filter((item)=>{

//         return(
//           item?.id === GetSeatData[i]?.flight?.id
      
//         )
//       })
//       setcheklist(checkdelet)

//     }
   

//   }
// },[GetFlightData,GetSeatData])
// useEffect(()=>{
// if(cheklist){
//   alert("You shall delete all loaded seats on such flights and cancel all reserved or purchased seats")
// }
// },[cheklist])

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal
        className=''
        size="lg"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edit Flight</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <EditFlightCopy id={id} handleCloseEdite={handleCloseEdite} customerData={customerData}/>
        </Modal.Body>
      </Modal>


<Modal
        className=''
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Delet Flight</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column '>
          {
            cheklist?.length > 0 ?(
              <h6 className='d-flex justify-content-center align-items-center text-center'>You shall delete all loaded seats on such flights and cancel all reserved or purchased seats</h6>

            ):(
              <h6 className='d-flex justify-content-center align-items-center text-center'>Are you sure you want to delete the  flight ?</h6>

            )


          }
          <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
          <button type="button" className="btn btn-secondary CANCELBTN m-2 " disabled={cheklist?.length > 0 ? true:false} onClick={()=>HandelDelet(id)} style={{backgroundColor:cheklist?.length > 0 ? "grey":COLORS.purple,color:"white"}} >Delete</button>

<button type="button" className="btn btn-secondary CANCELBTN m-2 " onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
          </div>
       

        </div>
        
        </Modal.Body>
      </Modal>
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
            <div className='d-flex justify-content-between align-items-center'>
              
            <h2 style={{marginTop:"0px",marginLeft:"0px",color:COLORS.purple}}>Flight</h2>
            <Button
            style={{backgroundColor:COLORS.purple}}
            onClick={handleShowADD}
            color="primary"
              variant="contained"
            >
            Add New Flight
            </Button>
            </div>
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar style={{overflow:"auto"}}>
            <div className={classes.inner}  >
           
              <Table >
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                    <TableCell >
                      {/* <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        style={{color:"white"}}
                        indeterminate={
                          selectedCustomers.length > 0 &&
                          selectedCustomers.length < customers.length
                        }
                       
                      /> */}
                      <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">Add</TableCell>

                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"red" ,fontWeight:"700"}} className="text-center">
                      <FilterFlight title="Country" tableData={tableData} settableData={settableData}/>
          
                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="City" tableData={tableData} settableData={settableData}/>
                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="AirLines" tableData={tableData} settableData={settableData}/>

                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Flight No." tableData={tableData} settableData={settableData}/>
                     </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Dep.APT" tableData={tableData} settableData={settableData}/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Arr.APT" tableData={tableData} settableData={settableData}/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Dep.Time"/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Arr.Time"/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Duration"/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>
                    <FilterFlight title="Weight"/>
                      </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reversedArray?.map(customer => (
                    <StyledTableRow
                      // hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer?.id) !== -1}
                    >
                      <TableCell className='text-center' padding="checkbox">

                        <Checkbox
                        
                          color="primary"
                          onChange={(e) => {return(handelchangecheckbox(e),setitemData(customer?.id))}  }
                          value={customer?.country?.id}
                        />
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.country?.name}
                      </TableCell>
                      <TableCell className='text-center'>{customer?.city?.name}</TableCell>
                      <TableCell className='text-center'>
                      {customer?.company?.name}
                      </TableCell>
                      <TableCell className='text-center'>{customer?.flight_number}</TableCell>
                      <TableCell className='text-center'>{customer?.departure_airport?.name}</TableCell>
                      <TableCell className='text-center'>
                      {customer?.arrival_airport}
                      </TableCell>


                      <TableCell className='text-center'>{customer?.departure_time}</TableCell>
                      <TableCell className='text-center'>{customer?.arrival_time}</TableCell>
                      <TableCell className='text-center'>{customer?.duration}</TableCell>
                      <TableCell className='text-center'>{customer?.weight}</TableCell>
                      <TableCell className='text-center' align="right">
                      {
                          user?.role === "superadmin" ? (
                            <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(setid(customer?.id),handleShow(customer))}} className="fa-solid fa-trash-can m-1"></i>

                          ):null
                        }

                        
                        <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}}  onClick={()=>{return(setid(customer?.id),setCustomerData(customer),handleShowEdite())}} className="fa-solid fa-pen-to-square m-1"></i>

                        
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
      <div className='w-100 d-flex flex-row-reverse mt-2'>
      <Button
          style={{backgroundColor:COLORS.purple}}
          onClick={AddFlightCheckBox}
          color="primary"
            variant="contained"
          >
          Add Selected Flights
          </Button>
      </div>
    <h2 style={{ marginTop: "0px", marginLeft: "0px", color: COLORS.purple }}> My Flights</h2>
      <CardContent className={classes.content}>
        <PerfectScrollbar style={{ overflow: "auto" }}>
          <div className={classes.inner}  >

            <Table >
              <TableHead style={{ backgroundColor: COLORS.purple }}>
                <TableRow className='shadowBox'>
                  
                  <TableCell style={{ fontSize: "19px", color: "red", fontWeight: "700" }} className="text-center">
                    <FilterFlight title="Country" tableData={tableData2} settableData={settableData2} />

                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="City" tableData={tableData2} settableData={settableData2} />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="AirLines" tableData={tableData2} settableData={settableData2} />

                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Flight No." tableData={tableData2} settableData={settableData2} />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Dep.APT" tableData={tableData2} settableData={settableData2} />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Arr.APT" tableData={tableData2} settableData={settableData2} />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Dep.Time" />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Arr.Time" />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Duration" />
                  </TableCell>
                  <TableCell style={{ fontSize: "19px", color: "white", fontWeight: "700" }} className='text-center'>
                    <FilterFlight title="Weight" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reversedArray2?.map(customer => (
                  <StyledTableRow
                    // hover
                    key={customer.id}
                    selected={selectedCustomers.indexOf(customer?.id) !== -1}
                  >
                    
                    <TableCell className='text-center'>
                      {customer?.country?.name}
                    </TableCell>
                    <TableCell className='text-center'>{customer?.city?.name}</TableCell>
                    <TableCell className='text-center'>
                      {customer?.company?.name}
                    </TableCell>
                    <TableCell className='text-center'>{customer?.flight_number}</TableCell>
                    <TableCell className='text-center'>{customer?.departure_airport?.name}</TableCell>
                    <TableCell className='text-center'>
                      {customer?.arrival_airport}
                    </TableCell>


                    <TableCell className='text-center'>{customer?.departure_time}</TableCell>
                    <TableCell className='text-center'>{customer?.arrival_time}</TableCell>
                    <TableCell className='text-center'>{customer?.duration}</TableCell>
                    <TableCell className='text-center'>{customer?.weight}</TableCell>
                   
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>

          </div>
        </PerfectScrollbar>
      </CardContent>
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
