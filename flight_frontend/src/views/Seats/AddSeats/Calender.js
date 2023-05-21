import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook';
import { CreateSeatApi } from 'Hook/Seat/Create-Seat-Hook';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { useSelector } from 'react-redux';
import { COLORS } from 'utils/COLORS.';

const Calender = ({customersData,handelhidesm}) => {

const [airlinesName,setairlinesName] =useState(customersData?.airlines)
const [SeatPricecompany,setSeatPricecompany]=useState(customersData?.seat_price_company)

  const [SeatPrice,setSeatPrice]=useState(customersData?.seat_price_enduser)
  const [ArrivalDate,setArrivalDate]=useState(customersData?.  arrival_date)
  const [departureDate,setdepartureDate]=useState(customersData?.departure_date)
  const [Total,setTotal]=useState(customersData?.total_seat_number)
  const [AVAseates,setAVAseates]=useState(customersData?.available_seats)
  const [departure_airport,setdeparture_airport]=useState(customersData?.departure_airport)
  const [arrival_airport,setarrival_airport]=useState(customersData?.arrival_airport)
  const [departure_time,setdeparture_time]=useState(customersData?.departure_time)
  const [arrival_time,setarrival_time]=useState(customersData?.arrival_time)
  const [duration,setduration]=useState(customersData?.duration)
  const [weight,setweight]=useState(customersData?.weight)
  const [suppliers,setsuppliers]=useState(customersData?.suppliers)
  const [airlines,setairlines]=useState(customersData?.airlines)
  const [FlightNumber,setFlightNumber]=useState(customersData?.flight?.flight_number)
  const [id,setid]=useState(customersData?.flight?.id)
  const [FlightItem,setFlightItem]=useState()
    const today = new Date()
    const tomorrow = new Date()
  
    tomorrow.setDate(tomorrow.getDate() + 1)
  
    const [values, setValues] = useState([today])
    let cal =values?.map((item)=>{return(`${item?.day}-${item?.month?.number}-${item?.year}`)})
    const datePickerRef = useRef()
    const shwCalnder= () => datePickerRef.current.openCalendar()
    useEffect(()=>{
        shwCalnder()
    },[])
    const {isLoading,mutate:SubmitCreateseat,isError,error,data:CreateSeatdata} =  CreateSeatApi()
    const {CreateSeatData} = useSelector(state => state.CreateSeatRedux)


    const {data}=GetFlightHook()
    const [flighId,setFlightId] =useState()
      const {GetFlightData} =useSelector(state => state.GetFlightRedux)
const [rusult,setrusult]=useState()
useEffect(()=>{
  if(GetFlightData){
    setrusult(GetFlightData?.filter(item => item?.flight_number === customersData?.flight_number))

  }
},[GetFlightData])
      useEffect(()=>{
        if(rusult){
setFlightId(rusult[0]?.id)
        }

      },[rusult])

      const handelSupmit=()=>{
       let DepTime= cal?.map((item)=>{return(  HandelSave(item))})
       
      }
    const HandelSave =(DepTime)=>{
      const data =[
       
        {
       
          "airlines": airlinesName,
          "flight_number": FlightNumber,
          "departure_airport":departure_airport,
          "arrival_airport": arrival_airport,
          "departure_time": departure_time,
          "arrival_time": arrival_time,
          "departure_date": DepTime,
          "arrival_date": DepTime,
          "duration": duration,
          "weight": weight,
          "total_seat_number": Total,
          "available_seats": AVAseates,
          "suppliers": suppliers,
          "seat_price_enduser": SeatPrice,
        "seat_price_company": SeatPricecompany,
          // "seat_price": SeatPrice,
          "flightId":id
    }
      ]
     
       SubmitCreateseat(data)
    
     

    }

    useEffect(()=>{
      if(CreateSeatdata){
        handelhidesm()
      }
    },[CreateSeatdata])
  return (
    <div className="w-100 d-flex justify-content-start align-items-center flex-column  " style={{height:"400px"}}>
 
    <DatePicker 
    multiple
   
    value={values} 
    onChange={setValues}
      ref={datePickerRef} 
      inputClass="custom-input"
      style={{
       paddingTop:"-60px",
        paddingRight: "65px"
      }}
      
    >
      
    </DatePicker>

    <div className='d-flex justify-content-center align-items-center flex-row-reverse'>
        <button onClick={handelSupmit}  type="button" className="btn btn-secondary CANCELBTN me-2" style={{marginTop:"300px",backgroundColor:COLORS.purple,color:"white"}} >Add</button>

        <button type="button" onClick={handelhidesm} className="btn btn-secondary CANCELBTN  " style={{marginTop:"300px",backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
   </div>
  )
}

export default Calender
