import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';

import {

  Button,
 
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { COLORS } from 'utils/COLORS.';
import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetCityHook } from 'Hook/City/Get-City-Hook';
import { GetdapartureHook } from 'Hook/daparture-airport/Get-daparture-Hook';
import { GetflightCompanyHook } from 'Hook/Company/Get-Company-Hook';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
      '&:hover': {
        boxShadow: theme.shadows[4],
      },
      '&.Mui-focused': {
        boxShadow: theme.shadows[4],
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(1),
    },
  },
}));
const FiltertwoWay = ({title,tableData,settableData}) => {
  const [checked,setchecked]=useState()




    const {data:GetData}=GetcountryHook()

    const {GetcountryData} =useSelector(state => state.GetcountryRedux)

    const {data:GetDatacity}=GetCityHook()

    const {GetCityData} =useSelector(state => state.GetCityRedux)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosedrop = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
const [value,setvalue]=useState()
const [checkedItems, setCheckedItems] = useState([]);
  const handleChange = (event) => {
    const value1 = event.target.value;

    setState({ ...state, [event.target.name]: event.target.checked });
    setchecked(event.target.checked)
    setvalue(event.target.value)
    if (event.target.checked) {
      // add the checked item to the array
      setCheckedItems([...checkedItems, value1]);

    } else {
      // remove the unchecked item from the array
      setCheckedItems(checkedItems.filter((item) => item !== value1));
    }
  };
 const [data,setdata] = useState([])

  useEffect(()=>{
    if(title === "Country" ){
        setdata(GetcountryData)
    }
  },[title,GetcountryData])

  useEffect(()=>{
    if(title === "City" ){
        setdata(GetCityData)
    }
  },[title,GetCityData])

  

  const {data:GetDataairlines}=GetflightCompanyHook()

  const {GetflightCompanyData} =useSelector(state => state.GetflightCompanyRedux)
const {data:GetDataairport}=GetdapartureHook()

const {GetdapartureData} =useSelector(state => state.GetdapartureRedux)

useEffect(()=>{
  if(title === "AirLines" ){
      setdata(GetflightCompanyData)
  }
},[title,GetflightCompanyData])

useEffect(()=>{
  if(title === "Dep.APT" ){
      setdata(GetdapartureData)
  }
},[title,GetdapartureData])


useEffect(()=>{
  if(title === "Arr.APT" ){
      setdata(GetdapartureData)
  }
},[title,GetdapartureData])

const {data:seatdata}=GetSeatHook()

const {GetSeatData} =useSelector(state => state.GetSeatRedux)
const [flightNo,setflightNo] =useState()

useEffect(()=>{

  if(GetSeatData){
    setflightNo(
      GetSeatData.map((item)=>{return(

        item?.flight_number
      )})
    )
  }
},[GetSeatData])


const [checkData,setcheckData]=useState()
useEffect(()=>{
  if(title === "Flight No." ){
      setdata(flightNo)
  }
},[title,flightNo])


useEffect(()=>{
  if(title === "Arr.APT" ){
      setdata(GetdapartureData)
  }
},[title,GetdapartureData])

const [ceckedsortZtoA,setceckedceckedsortZtoA]=useState()
const [ceckedsortAtoZ,setceckedsortAtoZ]=useState()

const handleChangesortZtOa =(event)=>{
  const isChecked = event.target.checked;
  if(isChecked){
    setceckedceckedsortZtoA(true)
  }else{
    setceckedceckedsortZtoA(false)

  }

}


const handleChangesortAtoZ =(event)=>{
  const isChecked = event.target.checked;
  if(isChecked){
    setceckedsortAtoZ(true)
  }else{
    setceckedsortAtoZ(false)

  }

}




const handelFilter = ()=>{

  if(title === "Country" ){
    if(checked && GetcountryData && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const update = tableData?.filter((item)=>{return(
          item?.country?.name === checkedItems[i]
    
        )})


        itemList.push(update)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)

      }

    }

    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.country.name.localeCompare(b.country.name));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.country.name.localeCompare(a.country.name));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }
  if(title === "City"  ){
    if(checked && GetCityData && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const updatecity = tableData?.filter((item)=>{return(
          item?.city?.name === checkedItems[i]
    
        )})

        itemList.push(updatecity)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)

      }

    }

    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.city.name.localeCompare(b.city.name));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.city.name.localeCompare(a.city.name));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }
     

  if(title === "AirLines"  ){
    if(checked && GetflightCompanyData && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const updatecity = tableData?.filter((item)=>{return(
          item?.airlines === checkedItems[i]
    
        )})

        itemList.push(updatecity)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)

      }

    }

    
    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.airlines.localeCompare(b.airlines));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.airlines.localeCompare(a.airlines));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }



  if(title === "Flight No."  ){
    if(checked && flightNo && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const updatecity = tableData?.filter((item)=>{return(
          item?.flight_number === checkedItems[i]
    
        )})

        itemList.push(updatecity)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)
      }

    }


    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.flight_number.localeCompare(b.flight_number));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.flight_number.localeCompare(a.flight_number));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }


  if(  title === "Arr.APT"){
    if(checked && GetdapartureData && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const update = tableData?.filter((item)=>{return(
          item?.arrival_airport === checkedItems[i]
    
        )})


        itemList.push(update)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)

      }

    }

    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.arrival_airport.localeCompare(b.arrival_airport));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.arrival_airport.localeCompare(a.arrival_airport));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }

  if( title === "Dep.APT"){
    if(checked && GetdapartureData && checkedItems ){
      const itemList = [];
      const newarray = [];

      for (let i = 0; i < checkedItems.length ; i++ ){
        const update = tableData?.filter((item)=>{return(
          item?.departure_airport === checkedItems[i]
    
        )})


        itemList.push(update)
        const combinedArray = newarray.concat(...itemList);


        settableData(combinedArray)
        setcheckData(combinedArray)

      }

    }

    if(ceckedsortZtoA){
      const update = [...tableData]

      update.sort((a, b) => a.departure_airport.localeCompare(b.departure_airport));
      settableData(update)
      setcheckData(update)


    }

    if(ceckedsortAtoZ){
      const update = [...tableData]

      update.sort((b, a) => b.departure_airport.localeCompare(a.departure_airport));
      update.reverse()
      settableData(update)
      setcheckData(update)


    }
  }
}


useEffect(()=>{
  if(checkData){
    handleClosedrop()
  }
},[checkData])
  return (
    <div className='d-flex justify-content-center align-items-center flex-row-reverse ' >
      <div className='d-flex justify-content-center align-items-center  '>
      <h5  style={{fontSize:"15px",color:COLORS.purple ,fontWeight:"700",marginBottom:0}}>{title}</h5>
<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{minWidth:"20px",padding:0}}>
<ExpandMoreIcon fontSize="small"  style={{padding:2}}/>
</Button>
      </div>
    
<Menu
style={{marginTop:"58px",borderRadius:"20px"}}
className='box-shadow-example'
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClosedrop}
>
<div className='d-flex justify-content-center align-items-center flex-row-reverse' style={{width:"150px"}}>
<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={ceckedsortAtoZ}
            onChange={(event)=>handleChangesortAtoZ(event)}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="Sort A to Z"
      />
{/* <MenuItem style={{fontWeight:"bold"}} onClick={handleClosedrop}>Sort A to Z</MenuItem> */}
<ArrowDownwardIcon />


</div>
<div className='d-flex justify-content-center align-items-center flex-row-reverse' style={{width:"150px"}}>
{/* <MenuItem style={{fontWeight:"bold"}} onClick={handleClosedrop}>Sort Z to A</MenuItem> */}
<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={ceckedsortZtoA}
            onChange={(event)=>handleChangesortZtOa(event)}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="Sort Z to A"
      />
<ArrowDownwardIcon />


</div>
<div className='d-flex justify-content-start align-items-center flex-column mt-2'>
<h6>Text Filter</h6>
<TextField
style={{width:"170px",border:"0px",marginTop:"15px",borderRadius:"20px"}}
      className={classes.root}
      variant="outlined"
      placeholder="Search"
    />
     </div>  
<div style={{marginLeft:"17px",marginTop:"15px"}} >
<FormGroup  >
<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={ceckedsortZtoA}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="Select All"
      />

{
    data?.map((item,index)=>{return(
<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
          value={ title === "Flight No." ? item :  item?.name}
            onChange={(event)=>handleChange(event)}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label={ title === "Flight No." ? item :  item?.name}
      />
    )})
}





</FormGroup>
</div>

<div>
  
<div className='  d-flex justify-content-around align-items-center' style={{margin:5}}>
      <button style={{marginRight:10,backgroundColor:COLORS.purple}} onClick={handelFilter} type="button" className="btn btn-secondary ">Ok</button>
        <button style={{marginLeft:10,backgroundColor:COLORS.purple}} onClick={handleClosedrop}  type="button" className="btn btn-secondary ">Cancel</button>  
      </div>
</div>
     

</Menu>
</div>
  )
}

export default FiltertwoWay
