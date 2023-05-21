import React from 'react'
import { useState } from 'react'

function Global() {
 const   [listFlight,setListFlight]=useState([])

  return [listFlight,setListFlight]
}

export default Global

