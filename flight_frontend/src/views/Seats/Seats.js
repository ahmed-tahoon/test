import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddSeats from './AddSeats/AddSeats';
import { COLORS } from 'utils/COLORS.';
import { jsPDF } from "jspdf";
import { GetFlightHook } from 'Hook/Flight/Get-Countries-Hook';
import { useSelector } from 'react-redux';
import EditeSeats from './EditeSeat/EditeSeat';
import { useParams } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const Seats = ({match}) => {


    let city =match?.params?.city
let country =match?.params?.country
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
  const handleShow = () => {return(setShow(true))}


  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >

<Modal
        className=''
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Add New Seat</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <AddSeats handleClose={handleClose}/>
        </Modal.Body>
      </Modal>

       

      

      <Header  />
      {/* <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      /> */}
      {customers && (
        <Results
        handleShowADD={handleShow}
          className={classes.results}
          customers={customers}
          city={city}
          country={country}
        />
      )}
    </Page>
  );
};



export default Seats
