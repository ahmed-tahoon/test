import { CreateFlightApi } from 'Hook/Flight/Create-Flight-Hook'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from 'utils/COLORS.'
import notify from 'utils/useNotifaction'
import AddFlightCard from './AddFlightCard'
import { ToastContainer } from 'react-toastify'
import { GetflightCompanyHook } from 'Hook/Company/Get-Company-Hook'
import { GetcountryHook } from 'Hook/Country/Get-Country-Hook'
import { GetOnecountryHook } from 'Hook/Country/Get-One-Country-Hook'
import { GetAirPortBasecCityHook } from 'Hook/daparture-airport/Get-Airport-Based-City-Hook'
import Select from 'react-select'
import { GetdapartureHook } from 'Hook/daparture-airport/Get-daparture-Hook'


const AddFlight = ({handleClose,isSuccses,setisSuccses}) => {


   

const [check,setcheck]=useState(true)
    const [country,setcountry]=useState("")
    const [city,setcity]=useState()
    const [cityID,setcityID]=useState("")
    const [chickcity,setchickcity]=useState(false)
const[disabledcity,setdisabledcity]=useState(true)
    const [airlines,setairlines]=useState("")
    const [flight_number,setflight_number]=useState("")
    const [departure_airport,setdeparture_airport]=useState("")
    const [arrival_airport,setarrival_airport]=useState("")
    const [departure_time,setdeparture_time]=useState("")
    const [arrival_time,setarrival_time]=useState("")
    const [duration,setduration]=useState("")
    const [weight,setweight]=useState("")
    const [selected, setSelected] = useState(null);
    const [selectedArival, setselectedArival] = useState(null);

    const HanadelCountry =(e)=>{     setcountry(e.target.value.toUpperCase()) }
    const HanadelCity =(e)=>{ 
        let val=e.target.value.split('-')
        setcityID(val[0])

         setcity(val[1].toUpperCase())  }
    const Hanadelairlines =(e)=>{    setairlines(e.target.value.toUpperCase())    }
    const Hanadelflight_number =(e)=>{     setflight_number(e.target.value.toUpperCase())  }
    const Hanadeldeparture_airport =(selectedOption)=>{ 
        setSelected(selectedOption)
        setdeparture_airport(selectedOption?.value)
     }
    const Hanadelarrival_airport =(selectedOption)=>{ 
        setselectedArival(selectedOption)

        setarrival_airport(selectedOption?.label.toUpperCase())

         }
    const Hanadeldeparture_time =(e)=>{    setdeparture_time(e.target.value) }
    const Hanadelarrival_time =(e)=>{  setarrival_time(e.target.value)  }
    const Hanadelduration =(e)=>{setduration(e.target.value)}     
    const Hanadelweight =(e)=>{   setweight(e.target.value)  }
    const [called,setcalled]=useState(false)

    const {mutate:SubmitCreateFlight,isError,error:handelerror,data} =  CreateFlightApi()
    const {CreateFlightData,error} = useSelector(state => state.CreateFlightRedux)


    const HandelSave =()=>{

        if(country == "" || cityID == "" || airlines == "" || flight_number == "" || departure_airport == "" || arrival_airport == "" || arrival_time ==  "",departure_time == '' || weight == "" || duration == ""){
            setcheck(false)
         }else{
            const data ={
                "country_id": +country,
                "city_id": +cityID,
                "company_id": +airlines,
                "flight_number": flight_number,
                "departure_airport": +departure_airport,
                "arrival_airport": arrival_airport,
                "departure_time": departure_time,
                "arrival_time": arrival_time,
                "duration": duration,
                "weight": weight
              }
              SubmitCreateFlight(data)
         }
        

    }

    useEffect(()=>{
        if(error){
            if(error !== [] )
        error.map((item)=>{return(
            notify(item,"error")
        )})
    
        }
    },[error])
    const {data:GetDataAirPort,refetch:refetchAirPort,isLoading}=GetAirPortBasecCityHook(cityID,chickcity)

    const {GetAirPortBasecCityData} =useSelector(state => state.GetAirPortBasecCityRedux)
useEffect(()=>{
    if(data){
        handleClose() 
    }
},[data])

useEffect(()=>{
    if(cityID){
        refetchAirPort()
setchickcity(true)
    }
},[cityID])


const [options,setoptions]=useState([]) 
const [optionsArrival,setoptionsArrival]=useState([]) 
const {data:GetDataArrivalAirport}=GetdapartureHook()

const {GetdapartureData} =useSelector(state => state.GetdapartureRedux)
const [ArrivalAirPOrt,setArrivalAirPOrt]=useState("gfh")

useEffect(()=>{
    if(departure_airport){
        setArrivalAirPOrt(GetdapartureData?.filter((item)=>{return(item?.id != departure_airport)}))

    }

},[departure_airport,GetdapartureData])







useEffect(()=>{
    if(GetDataAirPort){
        setoptions(GetAirPortBasecCityData?.departure_airport?.map((item)=>{  return({ value: `${item?.id}`, label: `${item?.name}` })  }))
    }
},[GetDataAirPort])


useEffect(()=>{
    if(departure_airport){
        setoptionsArrival(GetdapartureData?.map((item)=>{  return({ value: `${item?.id}`, label: `${item?.name}` })  }))
    }
},[departure_airport])

const {data:GetData}=GetflightCompanyHook()

const {GetflightCompanyData} =useSelector(state => state.GetflightCompanyRedux)


const {data:GetDataa}=GetcountryHook()

const {GetcountryData} =useSelector(state => state.GetcountryRedux)

const {data:ffff,refetch}=GetOnecountryHook(country,called)

useEffect(()=>{
    if(country){
        refetch()
        setdisabledcity(false)
    }
},[country])


const {GetOnecountryData} =useSelector(state => state.GetOnecountryRedux)

// useEffect(()=>{
//     if(country === "" || cityID === "" || airlines === "" || flight_number === "" || departure_airport === "" || arrival_airport === "" || arrival_time ===  "",departure_time === '' || weight === "" || duration === ""){
//        setcheck(false)
//     }
// },[check])
    const items = {
        itemsCountry:( <>
            <select style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </>)
           
        
    }
    const Inputs={
        InputCity:( <>
         <select disabled={disabledcity} onChange={HanadelCity} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
        <option selected disabled>Open this select menu</option>

            {
                GetOnecountryData?.city?.map((item,index)=>{return(
                 <option value={`${item?.id}-${item.name}`}>{item?.name}</option>

                )})
            }


</select>

        </>),
       
        InputAirlines:( <>
        <select onChange={Hanadelairlines} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
        <option selected disabled>Open this select menu</option>

            {
                GetflightCompanyData?.map((item,index)=>{return(
                 <option value={item?.id}>{item?.name}</option>

                )})
            }


</select>

        </>),
        InputDeparture_Airport:( <>
          <Select onChange={Hanadeldeparture_airport}
          
           styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor:COLORS.blue,
      borderRadius:"10px",
      width:"100%"
    }),
  }} options={options} />

            {/* <input onChange={Hanadeldeparture_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Departure Airport" aria-label="default input example"/> */}

        </>),
        InputArrival_Airport:( <>
           <Select onChange={Hanadelarrival_airport}
          
          styles={{
   control: (baseStyles, state) => ({
     ...baseStyles,
     backgroundColor:COLORS.blue,
     borderRadius:"10px",
     width:"100%"
   }),
 }} options={optionsArrival} />
            {/* <input onChange={Hanadelarrival_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Arrival_Airport" aria-label="default input example"/> */}

        </>),
        InputCountry:( <>
         <select onChange={HanadelCountry} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
        <option selected disabled>Open this select menu</option>

            {
                GetcountryData?.map((item,index)=>{return(
                 <option value={item?.id}>{item?.name}</option>

                )})
            }


</select>


        </>),
        InputWight:( <>
            <input onChange={Hanadelweight} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Wight" aria-label="default input example"/>

        </>),
         InputFightNumber:( <>
            <input onChange={Hanadelflight_number} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Fight No." aria-label="default input example"/>

        </>),
        InputArrivalTime:( <>
            <input onChange={Hanadelarrival_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Arrival Time" aria-label="default input example"/>

        </>),
        InputDepatureTime:( <>
            <input onChange={Hanadeldeparture_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Depature Time" aria-label="default input example"/>

        </>),
        InputDurationTime:( <>
            <input onChange={Hanadelduration} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Duration" aria-label="default input example"/>

        </>),
    }
  return (
    <div >
        <div className='d-flex justify-content-around align-items-center'>
        <div>
           <AddFlightCard title="Country" Chosing={Inputs.InputCountry} />
           <AddFlightCard title="Airlines" Chosing={Inputs.InputAirlines}/>
           <AddFlightCard title="Departure Airport" Chosing={Inputs.InputDeparture_Airport}/>
           <AddFlightCard title="Departure Time" Chosing={Inputs.InputDepatureTime}/>
           <AddFlightCard title="Duration" Chosing={Inputs.InputDurationTime}/>
        </div>

        <div>
           <AddFlightCard title="City" Chosing={Inputs.InputCity}/>
           <AddFlightCard title="Flight Number" Chosing={Inputs.InputFightNumber}/>
           <AddFlightCard title="Arrival Airport" Chosing={Inputs.InputArrival_Airport}/>
           <AddFlightCard title="Arrival Time" Chosing={Inputs.InputArrivalTime}/>
           <AddFlightCard title="Wight" Chosing={Inputs.InputWight}/>
        </div>
        </div>

        {
            check === false ? (
                <div className='d-flex justify-content-center align-items-center mt-5 '>
            <h6 style={{color:"red"}}> Please fill in the fields</h6>

        </div >
            ):null
        }
        
       

        <div className='d-flex justify-content-center align-items-center flex-row-reverse'>
        <button type="button" className="btn btn-secondary CANCELBTN m-5 px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}}  >Add</button>

        <button type="button" className="btn btn-secondary CANCELBTN m-5 px-5" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
        <ToastContainer></ToastContainer>

    </div>
  )
}

export default AddFlight
