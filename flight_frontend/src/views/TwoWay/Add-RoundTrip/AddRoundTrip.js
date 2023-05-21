import React, { useEffect } from 'react'
import { useState } from 'react'
import { COLORS } from 'utils/COLORS.'
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
import { CreateTwoWayApi } from 'Hook/SeatTwoWay/Create-TwoWay-Hook';
import { useSelector } from 'react-redux';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
const AddRoundTrip = ({handelCloseADD}) => {
  const [NoDayes,setNoDayes]=useState()
const [check,setcheck]=useState(false)
const [DataFlightOne,setDataFlightOne]=useState()
const [DataFlightTwo,setDataFlightTwo]=useState()
  const handelNoDayes=(e)=>{
    setNoDayes(e.target.value)
  }

  useEffect(()=>{
    if(NoDayes === "FromTo"){
      setcheck(true)
    }else{
      setcheck(false)

    }
  },[NoDayes])
  const [ShowTable,setShowTable]=useState(false)
    const [count,setcount]=useState(0)

    const handelchangecount =(e)=>{
      setcount(e.target.value)
    }
    const increase = ()=>{
      let SupPrice = +priceOne + +priceTwo
      if(NoDayes === "Less"){
       if(Dayes){
         setTotalPrice(+SupPrice + +count)
     
       }
      }  
      if(NoDayes === "Gerater"){
        if(Dayes){
          setTotalPrice(+SupPrice + +count)
      
        }
       } 


       if(NoDayes === "FromTo"){
        if(Dayes){
          setTotalPrice(+SupPrice + +count)
      
        }
       } 
    
    }
    const Descrease = ()=>{
      let SupPrice = +priceOne + +priceTwo
      if(NoDayes === "Less"){
       if(Dayes){
         setTotalPrice(+SupPrice - +count)
     
       }
      }  
      if(NoDayes === "Gerater"){
        if(Dayes){
          setTotalPrice(+SupPrice - +count)
      
        }
       } 


       if(NoDayes === "FromTo"){
        if(Dayes){
          setTotalPrice(+SupPrice - +count)
      
        }
       }         }
        const {data}=GetSeatHook()

        const {GetSeatData} =useSelector(state => state.GetSeatRedux)


        const {mutate:SubmitCreateTwoWay,data:DataCreat} =  CreateTwoWayApi()
        const {CreateTwoWayData,error:ERROR} = useSelector(state => state.CreateTwoWayRedux)
const [Dayes,setDayes]=useState()
const [flietNumOne,setflietNumOne]=useState()
const [flietNumTwo,setflietNumTwo]=useState()
const [priceOne,setpriceOne]=useState()
const [priceTwo,setpriceTwo]=useState()
const [TotalPrice,setTotalPrice]=useState()


const HnadelChangeDayes =(e)=>{
  setDayes(e.target.value)
}
const HandelCalculate=()=>{
  if(TotalPrice){
    setShowTable(true)
  }
 
}
    
// useEffect(()=>{
//   if(TotalPrice){
//     setShowTable(true)
//   }
// },[TotalPrice])
        const handelflietNumOne=(e)=>{
          const item =GetSeatData?.filter((item)=>{return(
            item.flight_number === e.target.value
     )})
     
          setflietNumOne(item[0].id)
          setpriceOne(item[0].seat_price_enduser)
          setDataFlightOne(item[0])

        }
        
        const handelflietNumTwo=(e)=>{
          const item =GetSeatData?.filter((item)=>{return(
            item.flight_number === e.target.value
     )})
     
     setflietNumTwo(item[0].id)
     setpriceTwo(item[0].seat_price_enduser)
     setDataFlightTwo(item[0])

        }
       
    const    handelSave=()=>{
      const data={
        
        
          
        
          "price": TotalPrice?.toString(),
          "seatId": +flietNumOne,
          "secondseatId": +flietNumTwo,
          "days":Dayes
        
      }
      SubmitCreateTwoWay(data)

        }

        useEffect(()=>{
          if(DataCreat){
            handelCloseADD()

          }
        },[DataCreat])
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center '>
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"20px"}}>
          <h6>AMM
- IST </h6>
          <h6>Price</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <select onChange={(e)=>{return(handelflietNumOne(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            GetSeatData?.map((item,index)=>{return(
              <option key={index}  value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select>
        {/* <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/> */}
         <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"grey",color:"white",width:'65px',height:"30px"}}>{priceOne}</h6>
        </div>

      </div>


      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"20px"}}>
          <h6>IST-AMM</h6>
          <h6>Price</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <select onChange={(e)=>{return(handelflietNumTwo(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            GetSeatData?.map((item,index)=>{return(
              <option key={index}   value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select>         <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"grey",color:"white",width:'65px',height:"30px"}}>{priceTwo}</h6>
        </div>

      </div>
     </div>
<div className='d-flex justify-content-center align-items-center flex-column my-5'>
    <div className='d-flex justify-content-around align-items-center flex-row-reverse w-100'>
    <div className='' >
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Increase / descrease Price</p>
      </div>
      <div className='d-flex justify-content-end align-items-center mb-2 ' style={{marginRight:"32px"}}>
      <button onClick={Descrease} type="button" className="btn btn-secondary">-</button>  
      <input className='text-center rounded textinputround' onChange={handelchangecount} style={{width:"90px",backgroundColor:"#D6DCE5"}} type="number" />

        {/* <input type='text' className='d-flex justify-content-center align-items-center rounded ' onChange={handelchangecount} style={{padding:20,backgroundColor:COLORS.blue,margin:0,height:"30px",width:"55px"}} /> */}
        <button onClick={increase} type="button" className="btn btn-secondary">+</button>
      </div>
     </div>
     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Enter Dayes:</p>
        <div className=' d-flex justify-content-center align-items-center '>
        <input className='text-center rounded textinputround' onChange={HnadelChangeDayes} style={{width:"90px",backgroundColor:"#D6DCE5"}} type="number" />
        {
          check === true ? (
            <div className=' d-flex justify-content-center align-items-center '>
            <p style={{margin:15}}>To</p>
            <input className='text-center rounded textinputround' style={{width:"90px",backgroundColor:"D6DCE5"}} type="number" />
            </div>
          ):null
        }
      
        </div>
       

     </div>

     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p>No Of Dayes:</p>
        <select style={{backgroundColor:COLORS.blue}} onChange={handelNoDayes} className="form-select" aria-label="Default select example">
        <option selected disabled value="1">select </option>

          <option  value="Less">Less Or Equal</option>
          <option value="FromTo">From - To</option>
          <option value="Gerater">Gerater Or Equal</option>
          
        </select>
     </div>
    </div>
    <div className='w-100 d-flex  align-items-center flex-row-reverse' style={{marginTop:"25px"}}>
    <button onClick={HandelCalculate} style={{backgroundColor:COLORS.purple,marginBottom:"10px",marginRight:"105px",padding:"10px"}}  type="button" className="btn btn-secondary">Calculate</button>  

    </div>


</div>
   
   {
    ShowTable === true ? (<div>
      <p className="text-center" style={{backgroundColor:"grey",padding:5,fontSize:"20px",border:"1px solid ",borderRadius:"20px 20px 0px 0px",width:127,marginBottom:0,marginLeft:"25px",color:"white"}}>Flight Details</p>
     <div style={{marginTop:0,marginBottom:10,marginLeft:5,marginRight:5}}>
        <table class="table rounded" style={{border:`1px solid grey`,borderRadius:"20px"}}>
      <thead>
        <tr  className='shadow'>
          <th scope="col" className='tableAddRoundTripFontSize' style={{fontSize:"10px"}}>Flight Two way</th>
          <th scope="col" className='tableAddRoundTripFontSize' style={{fontSize:"10px"}}>Airlines</th>
          <th scope="col" className='tableAddRoundTripFontSize' style={{fontSize:"10px"}}>Flight No.</th>
          <th scope="col" className='tableAddRoundTripFontSize' style={{fontSize:"10px"}}>Dep.APT</th>
          <th scope="col" className='tableAddRoundTripFontSize' style={{fontSize:"10px"}}>Arr.APT</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>Dep.Time</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>Arr.Time</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>Duration</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>Weight</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>Supplires</th>
          <th scope="col" className='tableAddRoundTripFontSize'style={{fontSize:"10px"}}>NO Of Dayes</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{background:"#E3E3E3"}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%"}} >
          <td className='tableAddRoundTripFontSize'  >AMM-IST-AMM</td>

          </div>
          <td className='tableAddRoundTripFontSize'><div>
              <p className='tableAddRoundTripFontSize text-center' >{DataFlightOne?.airlines}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.airlines}</p>
            </div></td>
          <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.flight_number}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.flight_number}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.departure_airport}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.departure_airport}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.arrival_airport}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.arrival_airport}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.departure_time}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.departure_time}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.arrival_time}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.arrival_time}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.duration}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.duration}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center' >{DataFlightOne?.weight}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.weight}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightOne?.suppliers}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize text-center'>{DataFlightTwo?.suppliers}</p>
            </div>
            </td>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%"}} >
            <td className='tableAddRoundTripFontSize text-center'>
         Dayes= {Dayes}
            </td>
    </div>
            
        </tr>
        
       
      </tbody>
    </table>
       </div>
    </div>):null
   }

{
  ShowTable === true ? (
    <div className='d-flex justify-content-center align-items-center'>
  <h4>Total Price :</h4>
  <input disabled value={TotalPrice} className='text-center rounded ms-3' style={{width:"90px",height:"30px",backgroundColor:COLORS.blue}} type="number" />

</div>
  ):null
}

  

<div className='  d-flex justify-content-center align-items-center flex-row-reverse' style={{margin:25}}>
      <button style={{marginRight:40,backgroundColor:COLORS.purple}} onClick={handelSave} type="button" className="btn btn-secondary CANCELBTN">Add</button>
        <button style={{marginLeft:40,backgroundColor:COLORS.purple}} onClick={handelCloseADD}  type="button" className="btn btn-secondary CANCELBTN">Cancel</button>  
      </div>


    </div>
  )
}

export default AddRoundTrip
