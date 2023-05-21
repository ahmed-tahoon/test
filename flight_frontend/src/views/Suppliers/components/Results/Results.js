import React, { useState } from 'react';
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
import { ToastContainer } from 'react-toastify'


import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { COLORS } from 'utils/COLORS.';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DeletsupplierApi } from 'Hook/Suppliers/Delet-Supplier-Hook';
import { EditesupplierApi } from 'Hook/Suppliers/Edite-Supplier-Hook';
import notify from 'utils/useNotifaction';
import { GetflightCompanyHook } from 'Hook/Company/Get-Company-Hook';
import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';
import { GetdapartureHook } from 'Hook/daparture-airport/Get-daparture-Hook';
import { GetCityHook } from 'Hook/City/Get-City-Hook';
import { GetOnecountryHook } from 'Hook/Country/Get-One-Country-Hook';
import SuppliresFilter from 'views/Suppliers/SuppliresFilter/SuppliresFilter';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook';

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
  const { className,GetsupplierData,handleShowadd, customers, ...rest } = props;
  // let reversedArray = GetsupplierData?.map((item, index) => GetsupplierData[GetsupplierData.length - 1 - index]);

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

  const [show, setShow] = useState(false);
  const {data:getdata}=GetSeatHook()
  const [id,setid]=useState()

  const {GetSeatData} =useSelector(state => state.GetSeatRedux)
  const handleClose = () => setShow(false);
  const handleShow = (customer) => {
    if(GetsupplierData && GetSeatData){
      for (let i = 0; i < GetSeatData?.length; i++) {
        const checkdelet = GetsupplierData.filter((item)=>{
          return customer?.name === GetSeatData[i]?.suppliers;
        });
        setcheklist(checkdelet);
      }
    }
    setShow(true);
  };
  
  const {isLoading,mutate:SubmitDeletsupplier,isError,error,data} =  DeletsupplierApi()
  const {DeletsupplierData} = useSelector(state => state.DeletsupplierRedux)
const HandelDelet=(customer)=>{

  const checkdelet = GetSeatData.filter((item)=>{return(
    item?.seat === customer?.name

  )})

  SubmitDeletsupplier(customer?.id)
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


  /**------------------------------------------------ */
  const [city,setcity]=useState()

  const [called,setcalled]=useState(false)
  const [country,setCountry]=useState()
  const [countryname,setcountryname]=useState()
  const [CountryId,setCountryId]=useState()
  const [airport,setairport]=useState()
  const [airLines,setairLines]=useState()
  const[disabledcity,setdisabledcity]=useState(true)
  
  const {data:ffff,refetch}=GetOnecountryHook(country,called)
  
  useEffect(()=>{
      if(country){
          refetch()
          setdisabledcity(false)
      }
  },[country])
  
  
  const {GetOnecountryData} =useSelector(state => state.GetOnecountryRedux)
  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {mutate:SubmitCreateSupplier,data:DATAEDITE} =  EditesupplierApi()
  const {EditesupplierData,error:ERROR} = useSelector(state => state.EditesupplierRedux)

  const HandelSave =()=>{
const FormData={
  data :{
    "name": name,
    "country": countryname,
          "city": city,
          "airport_name": airport,
          "airline_name": airLines
  },
  id:id
}
      
    
        SubmitCreateSupplier(FormData)

  }

  useEffect(()=>{
      if(ERROR){
          if(ERROR !== [] )
          ERROR.map((item)=>{return(
          notify(item,"error")
      )})
  
      }
  },[ERROR])

useEffect(()=>{
  if(DATAEDITE){
    handleCloseEdite() 
  }
},[DATAEDITE])
const {data:GetDataaa}=GetflightCompanyHook()

const {GetflightCompanyData} =useSelector(state => state.GetflightCompanyRedux)
const {data:GetDataCountry}=GetcountryHook()

const {GetcountryData} =useSelector(state => state.GetcountryRedux)

const {data:GetDataairport}=GetdapartureHook()

  const {GetdapartureData} =useSelector(state => state.GetdapartureRedux)

  const {data:GetDataa}=GetCityHook()

const HanadelCity =(e)=>{  setcity(e.target.value.toUpperCase())  }

const {GetCityData} =useSelector(state => state.GetCityRedux)
const [airportId,setairportId]=useState()

const handelChangeCountryId =(e)=>{
  let val=e.target.value.split('-')
  setCountry(val[0])

  //  setcity(val[1].toUpperCase())
  setcountryname(val[1])
  // setcountry(e.target.value)
}

const handelChangeairportId =(e)=>{
  setairport(e.target.value)
}

const handelChangeAirlines =(e)=>{
  setairLines(e.target.value)
  }

  let [reversedArray,setreversedArray] = useState();
const [tableData,settableData]=useState();





useEffect(()=>{
  if(GetsupplierData){
  const copy =[...GetsupplierData]
    if(copy)
        settableData(copy)

  }


},[GetsupplierData])

useEffect(()=>{

  if(tableData)
  setreversedArray(tableData.reverse())

  // setreversedArray(tableData?.map((item, index) => GetFlightData[GetFlightData.length - 1 - index]))

},[tableData])


const user =JSON.parse(localStorage.getItem('user')) ;

const {data:flightdata}=GetFlightHook()

  const {GetFlightData} =useSelector(state => state.GetFlightRedux)
const [cheklist,setcheklist]=useState([])
console.log(cheklist);

// useEffect(()=>{
//   if(GetsupplierData && GetSeatData){

//     for (let i = 0; i < GetSeatData?.length; i++) {
//       const checkdelet = GetsupplierData.filter((item)=>{

//         return(
//           item?.name === GetSeatData[i]?.suppliers
      
//         )
//       })
//       setcheklist(checkdelet)

//     }
   

//   }
// },[GetFlightData,GetsupplierData])
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal
        className=''
        size="sm"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edite supplier</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <select  onChange={handelChangeCountryId} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

<option selected disabled>Country</option>
{
  GetcountryData?.map((item,index)=>{return(
    <option value={`${item?.id}-${item.name}`}>{item?.name}</option>

  )})
}


</select>

<select disabled={disabledcity} onChange={HanadelCity} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"20px",marginTop:"5px" }} className="form-select border" aria-label="Default select example">
        <option selected disabled>City</option>

            {
                GetOnecountryData?.city?.map((item,index)=>{return(
                 <option value={item?.name}>{item?.name}</option>

                )})
            }


</select>

<select onChange={handelChangeairportId} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"5px" }} className="form-select border" aria-label="Default select example">

<option selected disabled>AirPort</option>
{
  GetdapartureData?.map((item,index)=>{return(
    <option value={item?.id}>{item?.name}</option>

  )})
}


</select>

<select onChange={handelChangeairportId} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"5px" }} className="form-select border" aria-label="Default select example">

<option selected disabled>AirLines</option>
{
  GetflightCompanyData?.map((item,index)=>{return(
    <option value={item?.id}>{item?.name}</option>

  )})
}


</select>
        <input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"5px"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>
        <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse '>
        <button type="button" className="btn btn-secondary CANCELBTN px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Edite</button>

        <button type="button" className="btn btn-secondary CANCELBTN px-5" onClick={handleCloseEdite}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
        </div>
       

        </div>
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
         <h4 className='ps-5 py-2' style={{color:"white"}}>Delet Supplier</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column '>
        {
            cheklist?.length > 0 ?(
              <h6 className='d-flex justify-content-center align-items-center text-center'>You shall delete all loaded seats on such flights and cancel all reserved or purchased seats</h6>

            ):(
              <h6 className='d-flex justify-content-center align-items-center text-center'>Are you sure you want to delete the  Supplier ?</h6>

            )
}
          <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
        <button type="button" className="btn btn-secondary CANCELBTN m-2 " disabled={cheklist?.length > 0 ? true:false} onClick={()=>HandelDelet(id)} style={{backgroundColor:cheklist?.length > 0 ? "grey":COLORS.purple,color:"white"}} >Delete</button>

        <button type="button" className="btn btn-secondary CANCELBTN  m-2" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white" }}>Cancel</button>

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
                          <h2 style={{marginTop:"0px",marginLeft:"0px",color:COLORS.purple}}>supplier</h2>

               <Button
          style={{backgroundColor:COLORS.purple}}
          onClick={handleShowadd}
          color="primary"
            variant="contained"
          >
          Add New Supplier
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
                   
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">Name</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">
                      <SuppliresFilter title="Country" tableData={tableData} settableData={settableData} />
                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">
                    <SuppliresFilter title="City" tableData={tableData} settableData={settableData} />

                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">
                    <SuppliresFilter title="Airport Name" tableData={tableData} settableData={settableData} />

                    </TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">
                    <SuppliresFilter title="AirLines" tableData={tableData} settableData={settableData} />

                    </TableCell>

                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Created At</TableCell>
                 
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
                      {customer?.name}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.country}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.city}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.airport_name}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.airline_name}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.created_at}
                      </TableCell>
                      
                      <TableCell className='text-center' align="right">
                        {
                          user?.role === "superadmin" ? (
                            <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(setid(customer),handleShow(customer))}} className="fa-solid fa-trash-can m-1"></i>

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
