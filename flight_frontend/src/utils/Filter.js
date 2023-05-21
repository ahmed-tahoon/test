import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';

import {

  Button,
 
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { COLORS } from './COLORS.';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
      '&:hover': {
        boxShadow: theme.shadows[4],
      },
      '&.Mui-focused': {
        boxShadow: theme.shadows[4],
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(1),
    },
  },
}));
const Filter = ({title}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosedrop = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className='d-flex justify-content-center align-items-center flex-row-reverse ' >
      <div className='d-flex justify-content-center align-items-center  '>
      <h5  style={{fontSize:"15px",color:COLORS.purple ,fontWeight:"700",marginBottom:0}}>{title}</h5>
<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{minWidth:"20px",padding:0}}>
<ExpandMoreIcon fontSize="small"  style={{padding:2}}/>
</Button>
      </div>
    
<Menu
style={{marginTop:"58px",borderRadius:"20px"}}
className='box-shadow-example'
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClosedrop}
>
<div className='d-flex justify-content-center align-items-center flex-row-reverse' style={{width:"150px"}}>
<MenuItem style={{fontWeight:"bold"}} onClick={handleClosedrop}>Sort A to Z</MenuItem>
<ArrowDownwardIcon />


</div>
<div className='d-flex justify-content-center align-items-center flex-row-reverse' style={{width:"150px"}}>
<MenuItem style={{fontWeight:"bold"}} onClick={handleClosedrop}>Sort Z to A</MenuItem>
<ArrowDownwardIcon />


</div>
<div className='d-flex justify-content-start align-items-center flex-column mt-2'>
<h6>Text Filter</h6>
<TextField
style={{width:"170px",border:"0px",marginTop:"15px",borderRadius:"20px"}}
      className={classes.root}
      variant="outlined"
      placeholder="Search"
    />
     </div>  
<div style={{marginLeft:"17px",marginTop:"15px"}} >
<FormGroup  >
<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={true}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="Select All"
      />

<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="RAV"
      />

<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={false}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="RJ"
      />

<FormControlLabel
style={{height:"25px"}}
        control={
          <Checkbox
            checked={false}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label="FGR"
      />
</FormGroup>
</div>

<div>
  
<div className='  d-flex justify-content-around align-items-center' style={{margin:5}}>
      <button style={{marginRight:10,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary ">Ok</button>
        <button style={{marginLeft:10,backgroundColor:COLORS.purple}}   type="button" className="btn btn-secondary ">Cancel</button>  
      </div>
</div>
     

</Menu>
</div>
  )
}

export default Filter
