import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { COLORS } from 'utils/COLORS.';
import { useSelector } from 'react-redux';
import notify from 'utils/useNotifaction';
import { GetCityHook } from 'Hook/City/Get-City-Hook';
import { CreateCityApi } from 'Hook/City/Create-City-Hook';
import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {


  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('/api/management/customers').then(response => {
        if (mounted) {
          setCustomers(response.data.customers);
        }
      });
    };

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowadd = () => setShow(true);

 
  const {data:GetData}=GetCityHook()

  const {GetCityData} =useSelector(state => state.GetCityRedux)

  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {isLoading,mutate:SubmitCreateCity,isError,error:handelerror,data} =  CreateCityApi()
  const {CreateCityData,error} = useSelector(state => state.CreateCityRedux)


  
const {data:GetDataCountry}=GetcountryHook()

const {GetcountryData} =useSelector(state => state.GetcountryRedux)

const [CountryId,setCountryId]=useState()
const handelChangeCountryId =(e)=>{
  setCountryId(e.target.value)
}
 

  const HandelSave =()=>{

      
      const data ={
          "name": name,
          "country_id": +CountryId
        }
        SubmitCreateCity(data)

  }

  useEffect(()=>{
      if(error){
          if(error !== [] )
      error.map((item)=>{return(
          notify(item,"error")
      )})
  
      }
  },[error])

useEffect(()=>{
  if(data){
      handleClose() 
  }
},[data])

  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >

<Modal
        className=''
        size="sm"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Add New City</h4>
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

        <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse '>
        <button type="button" className="btn btn-secondary CANCELBTN px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Add</button>

        <button type="button" className="btn btn-secondary CANCELBTN  px-5" onClick={handleClose}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
        </div>
       

        </div>
        </Modal.Body>
      </Modal>


    
       
      <Header  handleClose={handleClose} />
      {/* <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      /> */}
      {customers && (
        <Results
          className={classes.results}
          customers={customers}
          GetCityData={GetCityData}
          handleShowadd={handleShowadd}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
