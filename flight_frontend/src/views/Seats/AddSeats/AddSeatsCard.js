import React from 'react'
import { COLORS } from 'utils/COLORS.'

const AddSeatsCard = ({title,Chosing}) => {
  return (
    <div style={{marginTop:"25px",marginLeft:"5px"}}>
    <h5 style={{color:"black",fontSize:"17px"}}>{title}</h5>
    {Chosing}
 
</div>
  )
}

export default AddSeatsCard
