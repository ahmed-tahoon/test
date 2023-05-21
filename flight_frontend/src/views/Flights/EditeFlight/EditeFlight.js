import { CreateFlightApi } from 'Hook/Flight/Create-Flight-Hook'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from 'utils/COLORS.'
import notify from 'utils/useNotifaction'
import AddFlightCard from './EditeFlightCard'
import { ToastContainer } from 'react-toastify'
import EditeFlightCard from './EditeFlightCard'
import { EditeFlightApi } from 'Hook/Flight/Edite-Flight-Hook'

const EditeFlight = ({id,handleCloseEdite,customerData}) => {
    
    const [country,setcountry]=useState(customerData?.country?.name)
    const [city,setcity]=useState(customerData?.city?.name)
    const [airlines,setairlines]=useState(customerData?.airlines)
    const [flight_number,setflight_number]=useState(customerData?.flight_number)
    const [departure_airport,setdeparture_airport]=useState(customerData?.departure_airport?.id)
    const [arrival_airport,setarrival_airport]=useState(customerData?.arrival_airport)
    const [departure_time,setdeparture_time]=useState(customerData?.departure_time)
    const [arrival_time,setarrival_time]=useState(customerData?.arrival_time)
    const [duration,setduration]=useState(customerData?.duration)
    const [weight,setweight]=useState(customerData?.weight)

    const HanadelCountry =(e)=>{     setcountry(e.target.value.toUpperCase()) }
    const HanadelCity =(e)=>{  setcity(e.target.value.toUpperCase())  }
    const Hanadelairlines =(e)=>{    setairlines(e.target.value.toUpperCase())    }
    const Hanadelflight_number =(e)=>{     setflight_number(e.target.value.toUpperCase())  }
    const Hanadeldeparture_airport =(e)=>{   setdeparture_airport(e.target.value.toUpperCase()) }
    const Hanadelarrival_airport =(e)=>{    setarrival_airport(e.target.value.toUpperCase())  }
    const Hanadeldeparture_time =(e)=>{    setdeparture_time(e.target.value) }
    const Hanadelarrival_time =(e)=>{  setarrival_time(e.target.value)  }
    const Hanadelduration =(e)=>{setduration(e.target.value)}     
    const Hanadelweight =(e)=>{   setweight(e.target.value)  }


   

    const {isLoading,mutate:SubmiteEditeFlight,isError,error,data} =  EditeFlightApi()
    const {EditeFlightData} = useSelector(state => state.EditeFlightRedux)

    const HandelSave =()=>{

        
        const FormData ={
            data:{
            "country": country,
            "city": city,
            "airlines": airlines,
            "flight_number": flight_number,
            "departure_airport": departure_airport,
            "arrival_airport": arrival_airport,
            "departure_time": departure_time,
            "arrival_time": arrival_time,
            "duration": duration,
            "weight": weight
            },
            id:id
          }
          SubmiteEditeFlight(FormData)
    }


    // useEffect(()=>{
    //     if(error){
    //         if(error !== [] )
    //     error.map((item)=>{return(
    //         notify(item,"error")
    //     )})
    
    //     }else{
            
    //     }
    // },[error])

    useEffect(()=>{
        if(data){
            handleCloseEdite() 
        }
    },[data])
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
            <input onChange={HanadelCity} value={city} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="City" aria-label="default input example"/>

        </>),
       
        InputAirlines:( <>
            <input onChange={Hanadelairlines} value={airlines} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Airlines" aria-label="default input example"/>

        </>),
        InputDeparture_Airport:( <>
            <input onChange={Hanadeldeparture_airport} value={departure_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Departure Airport" aria-label="default input example"/>

        </>),
        InputArrival_Airport:( <>
            <input onChange={Hanadelarrival_airport} value={arrival_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Arrival_Airport" aria-label="default input example"/>

        </>),
        InputCountry:( <>
            <input onChange={HanadelCountry} value={country} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Country" aria-label="default input example"/>

        </>),
        InputWight:( <>
            <input onChange={Hanadelweight} value={weight} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Wight" aria-label="default input example"/>

        </>),
         InputFightNumber:( <>
            <input onChange={Hanadelflight_number} value={flight_number} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Fight No." aria-label="default input example"/>

        </>),
        InputArrivalTime:( <>
            <input onChange={Hanadelarrival_time} value={arrival_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Arrival Time" aria-label="default input example"/>

        </>),
        InputDepatureTime:( <>
            <input onChange={Hanadeldeparture_time} value={departure_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Depature Time" aria-label="default input example"/>

        </>),
        InputDurationTime:( <>
            <input onChange={Hanadelduration} value={duration} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Duration" aria-label="default input example"/>

        </>),
    }
  return (
    <div >
        <div className='d-flex justify-content-around align-items-center'>
        <div>
           <EditeFlightCard title="Country" Chosing={Inputs.InputCountry} />
           <EditeFlightCard title="Airlines" Chosing={Inputs.InputAirlines}/>
           <EditeFlightCard title="Departure Airport" Chosing={Inputs.InputDeparture_Airport}/>
           <EditeFlightCard title="Departure Time" Chosing={Inputs.InputDepatureTime}/>
           <EditeFlightCard title="Duration" Chosing={Inputs.InputDurationTime}/>
        </div>

        <div>
           <EditeFlightCard title="City" Chosing={Inputs.InputCity}/>
           <EditeFlightCard title="Flight Number" Chosing={Inputs.InputFightNumber}/>
           <EditeFlightCard title="Arrival Airport" Chosing={Inputs.InputArrival_Airport}/>
           <EditeFlightCard title="Arrival Time" Chosing={Inputs.InputArrivalTime}/>
           <EditeFlightCard title="Wight" Chosing={Inputs.InputWight}/>
        </div>
        </div>
       

        <div className='d-flex justify-content-center align-items-center flex-row-reverse'>
        <button type="button" className="btn btn-secondary m-5 CANCELBTN px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Edit</button>

        <button type="button" className="btn btn-secondary m-5 CANCELBTN px-5" onClick={handleCloseEdite}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
        <ToastContainer></ToastContainer>

    </div>
  )
}

export default EditeFlight
