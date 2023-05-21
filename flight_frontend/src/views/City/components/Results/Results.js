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
import { DeletCityApi } from 'Hook/City/Delet-City-Hook';
import { EditeCityApi } from 'Hook/City/Edite-City-Hook';
import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';
import CityFilter from 'views/City/CityFilter/CityFilter';


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
  },
  tableBody: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
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
  const { className,GetCityData,handleShowadd, customers, ...rest } = props;

  
  // let reversedArray = GetCityData?.map((item, index) => GetCityData[GetCityData.length - 1 - index]);
  

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [id,setid]=useState()
  const {isLoading,mutate:SubmitDeletCity,isError,error,data} =  DeletCityApi()
  const {DeletCityData} = useSelector(state => state.DeletCityRedux)
const HandelDelet=(id)=>{
  SubmitDeletCity(id)
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


  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {mutate:SubmitEditeCity,data:DATAEDITE} =  EditeCityApi()
  const {EditeCityData,error:ERROR} = useSelector(state => state.EditeCityRedux)

  const {data:GetData}=GetcountryHook()

  const {GetcountryData} =useSelector(state => state.GetcountryRedux)
  
  const [CountryId,setCountryId]=useState()
  const handelChangeCountryId =(e)=>{
    setCountryId(e.target.value)
  }

  const HandelSave =()=>{
const FormData={
  data :{
    "name": name,
    "country_id": +CountryId
    
  },
  id:id
}
      
    
SubmitEditeCity(FormData)

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



let [reversedArray,setreversedArray] = useState();
const [tableData,settableData]=useState();





useEffect(()=>{
  if(GetCityData){
  const copy =[...GetCityData]
    if(copy)
        settableData(copy)

  }


},[GetCityData])

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
        size="sm"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edite City</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <select onChange={handelChangeCountryId} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

        <option selected disabled>Country</option>
        {
          GetcountryData?.map((item,index)=>{return(
            <option value={item?.id}>{item?.name}</option>

          )})
        }


</select>
        <input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"15px"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>
        <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
        <button type="button" className="btn btn-secondary CANCELBTN px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Edite</button>

        <button type="button" className="btn btn-secondary CANCELBTN  px-5" onClick={handleCloseEdite}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
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
         <h4 className='ps-5 py-2' style={{color:"white"}}>Delet City</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column '>
          <h6 className='d-flex justify-content-center align-items-center text-center'>Are you sure you want to delete the  City ?</h6>
          <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
        <button type="button" className="btn btn-secondary CANCELBTN  m-2 " onClick={()=>HandelDelet(id)} style={{backgroundColor:COLORS.purple,color:"white"}} >Delete</button>

        <button type="button" className="btn btn-secondary CANCELBTN m-2" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

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
                          <h2 style={{marginTop:"0px",marginLeft:"0px",color:COLORS.purple}}>City</h2>

              <Button
          style={{backgroundColor:COLORS.purple}}
          onClick={handleShowadd}
          color="primary"
            variant="contained"
          >
          Add New City
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
                  <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">
                    <CityFilter title="Country" tableData={tableData} settableData={settableData}/>
                  </TableCell>

                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className="text-center">Name</TableCell>
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center'>Created At</TableCell>
                 
                    <TableCell style={{fontSize:"19px",color:"white",fontWeight:"700"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {reversedArray?.map(customer => (
                    <StyledTableRow
                      // hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                      <TableCell className='text-center'>
                      Country
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.name}
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.created_at}
                      </TableCell>
                      
                      <TableCell className='text-center' align="right">
                      {
                          user?.role === "superadmin" ? (
                            <i style={{padding:"5px",border:"1px solid",backgroundColor:COLORS.purple,color:"white"}} onClick={()=>{return(setid(customer?.id),handleShow())}} className="fa-solid fa-trash-can m-1"></i>

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
