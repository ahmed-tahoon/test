import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook'
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from 'utils/COLORS.'

const Edite = ({handelHide}) => {
  const [priceOne,setpriceOne]=useState()
  const [priceTwo,setpriceTwo]=useState()
  const [flietNumOne,setflietNumOne]=useState()
  const [flietNumTwo,setflietNumTwo]=useState()

  const [DataFlightOne,setDataFlightOne]=useState()
  const [DataFlightTwo,setDataFlightTwo]=useState()
  const {data}=GetSeatHook()

  const {GetSeatData} =useSelector(state => state.GetSeatRedux)

  const {data:getFlight}=GetFlightHook()
  const [count,setcount]=useState(0)
  const increase = ()=>{
setcount(count + 1)
  }
  const Descrease = ()=>{
    setcount(count - 1)
      }

      const handelflietNumOne=(e)=>{
        const item =GetSeatData?.filter((item)=>{return(
          item.flight_number === e.target.value
   )})
   
        // setflietNumOne(item[0].id)
        setpriceOne(item[0]?.seat_price_enduser)
        setDataFlightOne(item[0])

      }
      
      const handelflietNumTwo=(e)=>{
        const item =GetSeatData?.filter((item)=>{return(
          item.flight_number === e.target.value
   )})
   
  //  setflietNumTwo(item[0].id)
   setpriceTwo(item[0]?.seat_price_enduser)
   setDataFlightTwo(item[0])

      }
  return (
    <div>
     <div className='d-flex justify-content-between align-items-center'>
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h6>AMM-IST</h6>
          <h6>Price</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <select onChange={(e)=>{return(handelflietNumOne(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            getFlight?.map((item,index)=>{return(
              <option key={index}  value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select>                 <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"grey",color:"white",width:'65px',height:"30px"}}>{priceOne}</h6>

        </div>

      </div>


      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h6>IST-AMM</h6>
          <h6>Price</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <select onChange={(e)=>{return(handelflietNumTwo(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            getFlight?.map((item,index)=>{return(
              <option key={index}   value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select>          <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"grey",color:"white",width:'65px',height:"30px"}}>{priceTwo}</h6>
        </div>

      </div>
     </div>
     <div className='my-5'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h6>Increase / descrease Price</h6>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      <button onClick={increase} type="button" className="btn btn-secondary">+</button>
        <h6 className='d-flex justify-content-center align-items-center rounded ' style={{padding:20,backgroundColor:COLORS.blue,margin:0,height:"35px"}}>{count}</h6>
        <button onClick={Descrease} type="button" className="btn btn-secondary">-</button>  
      </div>
     </div>

     <div className='d-flex justify-content-center align-items-center flex-column mb-5 '>
      <h6 className='me-1'>Total Price</h6>
      <h6 className='d-flex justify-content-center align-items-center px-5 rounded ' style={{backgroundColor:COLORS.blue,height:'30px'}}>250 JOD</h6>
     </div>

     <div>
     <div className='  d-flex justify-content-center align-items-center flex-row-reverse' style={{margin:25}}>
      <button style={{marginRight:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary CANCELBTN">Add</button>
        <button onClick={handelHide} style={{marginLeft:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary CANCELBTN">Cancel</button>  
      </div>
     </div>
    </div>
  )
}

export default Edite
