import { EditeFlightApi } from 'Hook/Flight/Edite-Flight-Hook'
import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook'
import { GetOneFlightHook } from 'Hook/Flight/Get-One-Flight-Hook'
import { CreateSeatApi } from 'Hook/Seat/Create-Seat-Hook'
import { EditeSeatApi } from 'Hook/Seat/Edite-Seat-Hook'
import { GetsupplierHook } from 'Hook/Suppliers/Get-Supplier-Hook'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BUTTONS } from 'utils/BUTTONS'
import { COLORS } from 'utils/COLORS.'
import EditSeatsCard from './EditeSeatsCard'

const EditeSeats = ({handleCloseEdite,customersData}) => {

    const {data:getFlight}=GetFlightHook()
    const {GetFlightData} =useSelector(state => state.GetFlightRedux)
    const [FlightNum,setFlightNum]=useState()
    const handelchange=(e)=>{

    
        setFlightNum(GetFlightData?.filter((item)=>{return(
       item.airlines === e.target.value
)}))
    }
const [id,setid]=useState(customersData?.id)
    const handelChange=(e)=>{
        setid(e.target.value);
    }


    // useEffect(()=>{
    //   if(FlightNumber){
    //     const {data}=GetOneFlightHook(id)

    //   }

    // },[FlightNumber])
    const [airlinesName,setairlinesName] =useState(customersData?.airlines)
    const [SeatPricecompany,setSeatPricecompany]=useState(customersData?.seat_price_company)

    const [SeatPrice,setSeatPrice]=useState(customersData?.seat_price)
    const [ArrivalDate,setArrivalDate]=useState(customersData?.arrival_date)
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
  const [ID,setID]=useState(customersData?.flight?.id)

    const HandelSeatPrice=(e)=>{
      setSeatPrice(e.target.value)

    }

    const HandelArrivalDate=(e)=>{
      setArrivalDate(e.target.value)

    }

    const HandeldepartureDate=(e)=>{
      setdepartureDate(e.target.value)

    }

    const HandelTotal=(e)=>{
      setTotal(e.target.value)

    }

    const HandelAVAseates=(e)=>{
      setAVAseates(e.target.value)

    }

    const HandelSupliers=(e)=>{
      setsuppliers(e.target.value)
    }

    const HandelAirlines=(e)=>{
      setairlinesName(e.target.value)
    }

    const HandelSeatPricecompany=(e)=>{
      setSeatPricecompany(e.target.value)

    }
    const HandelFlightNumber=(e)=>{
      setFlightNumber(e.target.value)
    }
    // useEffect(()=>{
    //     if(GetOneFlightData){
    //         setweight(GetOneFlightData?.weight)
    //         setduration(GetOneFlightData?.duration)
    //         setarrival_time(GetOneFlightData?.arrival_time)
    //         setdeparture_time(GetOneFlightData?.departure_time)
    //         setarrival_airport(GetOneFlightData?.arrival_airport)
    //         setdeparture_airport(GetOneFlightData?.departure_airport)
    //     }
    // },[GetOneFlightData])
 

const {data:GetData}=GetsupplierHook()

const {GetsupplierData} =useSelector(state => state.GetsupplierRedux)
    

const {isLoading,mutate:SubmitEditeseat,isError,error,data:EditeeSeatdata} =  EditeSeatApi()
const {EditeSeatData} = useSelector(state => state.EditeSeatRedux)

useEffect(()=>{
  if(EditeeSeatdata){
    handleCloseEdite()
  }
},[EditeeSeatdata])

    const [flighId,setFlightId] =useState()

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

const HandelSave=()=>{
  const formdata ={
    data :
    {
      "airlines": airlinesName,
    "flight_number": FlightNumber,
    "departure_airport":departure_airport,
    "arrival_airport": arrival_airport,
    "departure_time": departure_time,
    "arrival_time": arrival_time,
    "departure_date": departureDate,
    "arrival_date": ArrivalDate,
    "duration": duration,
    "weight": weight,
    "total_seat_number": Total,
    "available_seats": AVAseates,
    "suppliers": suppliers,
    "seat_price_enduser": SeatPrice,
  "seat_price_company": SeatPricecompany,
    "flightId":ID,
    "seat_price":"jhjh"
  },
  idapi:id
  }
    
  
  SubmitEditeseat(formdata)

}

    const items = {
        itemsAirLiens:( <>
          <input value={airlinesName} onChange={HandelAirlines} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="130" aria-label="default input example"/>

            
        </>),
     itemsDepartureAirport:( <>
     
     <input value={departure_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="departure airport" aria-label="default input example"/>

               
            </>),
               itemsSuppliears:( <>
                <select onChange={HandelSupliers} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
                <option selected>Open this select menu</option>
  
                 {
                  GetsupplierData?.map((item,index)=>{return(
                      <option key={index} value={item?.name}>{item?.name}</option>
  
                  )})
                 }
             
                </select>
            </>),
           
           InputFightNumber:( <>
                                  <input value={FlightNumber} onChange={(e)=>{return(handelChange(e),HandelFlightNumber(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="130" aria-label="default input example"/>

      

        </>),
        
    }
    const Inputs={
        InputWight:( <>
            <input value={weight} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Wight" aria-label="default input example"/>

        </>),
        
         InputSeatsPrice:( <>
          <input value={SeatPrice} onChange={HandelSeatPrice} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="130" aria-label="default input example"/>

      </>),
         InputAvailableSeatsNumber:( <>
          <input value={AVAseates} onChange={HandelAVAseates} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="AVA Seats No." aria-label="default input example"/>

      </>),
         InputTotalSeatsNumber:( <>
          <input value={Total} onChange={HandelTotal} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="10" aria-label="default input example"/>

      </>),
        InputArrivalTime:( <>
            <input value={arrival_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Arrival Time" aria-label="default input example"/>

        </>),
          InputArrivalDate:( <>
            <input value={ArrivalDate} onChange={HandelArrivalDate} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Arrival Date" aria-label="default input example"/>

        </>),
          InputArrivalAirPort:( <>
            <input value={arrival_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Arrival AirPort" aria-label="default input example"/>

        </>),
        InputDepatureDate:( <>
            <input value={departureDate} onChange={HandeldepartureDate} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Depature Time" aria-label="default input example"/>

        </>),
        
         InputDurationDate:( <>
          <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Duration" aria-label="default input example"/>

      </>),
        InputDurationTime:( <>
            <input value={duration} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Duration" aria-label="default input example"/>

        </>),
          InputDepatureTime:( <>
            <input value={departure_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Duration" aria-label="default input example"/>

        </>),
        InputSeatsPriceCompany:( <>
          <input onChange={HandelSeatPricecompany } value={SeatPricecompany} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="130" aria-label="default input example"/>
  
      </>),
    }
  return (
    <div >
        <div className='d-flex justify-content-around align-items-center'>
        <div>

           <EditSeatsCard title="Airlines" Chosing={items.itemsAirLiens}/>
           <EditSeatsCard title="Departure Date" Chosing={Inputs.InputDepatureDate}/>

           <EditSeatsCard title="Departure Airport" Chosing={items.itemsDepartureAirport}/>
           <EditSeatsCard title="Departure Time" Chosing={Inputs.InputDepatureTime}/>
           <EditSeatsCard title="Duration" Chosing={Inputs.InputDurationTime}/>
           <EditSeatsCard title="Total Seats No." Chosing={Inputs.InputTotalSeatsNumber}/>
           <EditSeatsCard title="Suppliears" Chosing={items.itemsSuppliears}/>
        </div>

        <div>
           <EditSeatsCard title="Flight Number" Chosing={items.InputFightNumber}/>
           <EditSeatsCard title="Arrival Date" Chosing={Inputs.InputArrivalDate}/>

           <EditSeatsCard title="Arrival Airport" Chosing={Inputs.InputArrivalAirPort}/>
           <EditSeatsCard title="Arrival Time" Chosing={Inputs.InputArrivalTime}/>
           <EditSeatsCard title="Wight" Chosing={Inputs.InputWight}/>
           <EditSeatsCard title="Available Seats" Chosing={Inputs.InputAvailableSeatsNumber}/>
           <EditSeatsCard title="Seat Price" Chosing={Inputs.InputSeatsPrice}/>

        </div>
        </div>

        <div className='w-100 d-flex justify-content-center align-items-center' >
        <EditSeatsCard  title="Seat Price (Company)" Chosing={Inputs.InputSeatsPriceCompany}/>

        </div>
       

        <div className='d-flex justify-content-center align-items-center flex-row-reverse'>
        <button type="button" className="btn btn-secondary m-5 CANCELBTN px-5  " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}}>Edite</button>

        <button type="button" className="btn btn-secondary CANCELBTN m-5 px-5" onClick={handleCloseEdite} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
    </div>
  )
}

export default EditeSeats
