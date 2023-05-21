import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { COLORS } from 'utils/COLORS.';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className,handleShow,handleClose, ...rest } = props;

  const classes = useStyles();

  return (
    <div
    
    
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
     style={{position:"relative"}}
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item style={{width:"100%"}}>
          {/* <img 
           style={{height:"150px",width:"100%",objectFit: "cover"}}
          src='/images/logos/travel41.jpg'/> */}
          {/* <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Customers
          </Typography> */}
        </Grid>
        <Grid item style={{position:"absolute",right:"5px",marginBottom:"5px"}} >
          
          {/* <Button
          style={{backgroundColor:COLORS.orange}}
          onClick={handleShow}
          color="primary"
            variant="contained"
          >
          Add New AirPort
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
