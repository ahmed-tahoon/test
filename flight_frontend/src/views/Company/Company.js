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

import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';
import { GetflightCompanyHook } from 'Hook/Company/Get-Company-Hook';
import { CreateflightCompanyApi } from 'Hook/Company/Create-Company-Hook';
import { GetdapartureHook } from 'Hook/daparture-airport/Get-daparture-Hook';
import { GetCityHook } from 'Hook/City/Get-City-Hook';
import { GetOnecountryHook } from 'Hook/Country/Get-One-Country-Hook';

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


const [called,setcalled]=useState(false)
const [country,setCountry]=useState()
const [countryname,setcountryname]=useState()

const[disabledcity,setdisabledcity]=useState(true)

const {data:ffff,refetch}=GetOnecountryHook(country,called)

useEffect(()=>{
    if(country){
        refetch()
        setdisabledcity(false)
    }
},[country])


const {GetOnecountryData} =useSelector(state => state.GetOnecountryRedux)
 
  const {data:GetData}=GetflightCompanyHook()

  const {GetflightCompanyData} =useSelector(state => state.GetflightCompanyRedux)

  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {isLoading,mutate:SubmitCreateflightCompany,isError,error:handelerror,data} =  CreateflightCompanyApi()
  const {CreateflightCompanyData,error} = useSelector(state => state.CreateflightCompanyRedux)


  
const {data:GetDataCountry}=GetcountryHook()

const {GetcountryData} =useSelector(state => state.GetcountryRedux)

const [logo,setlogo]=useState()
const handelChangeLogo =(e)=>{
  if(e.target.files && e.target.files[0]){


    
    setlogo(e.target.files[0])
}}
 

  const HandelSave =()=>{
    const formData = new FormData();
    formData.append("logo",logo)
    formData.append("name",name)
    formData.append("country",countryname)

    formData.append("city",city)
      // const data ={
      //     "name": name,
      //     "logo": logo
      //   }
        SubmitCreateflightCompany(formData)

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
const [city,setcity]=useState()

const {data:GetDataairport}=GetdapartureHook()

  const {GetdapartureData} =useSelector(state => state.GetdapartureRedux)

  const HanadelCity =(e)=>{  setcity(e.target.value.toUpperCase())  }
  const {data:GetDataa}=GetCityHook()

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
  setairportId(e.target.value)
}
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
         <h4 className='ps-5 py-2' style={{color:"white"}}>Add New AirLines</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <select onChange={handelChangeCountryId} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

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
        <input onChange={handelChangeLogo} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"5px"}} className="form-control" type="file" placeholder="Name" aria-label="default input example"/>
<input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"5px"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>

        <div className='d-flex justify-content-center align-items-center mt-3 flex-row-reverse'>
        <button type="button" className="btn btn-secondary CANCELBTN  px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Add</button>

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
          GetflightCompanyData={GetflightCompanyData}
          handleShowadd={handleShowadd}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
