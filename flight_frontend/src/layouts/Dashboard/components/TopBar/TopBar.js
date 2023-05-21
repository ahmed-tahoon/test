import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'utils/axios';
import useRouter from 'utils/useRouter';
import { PricingModal, NotificationsPopover } from 'components';
import { logout } from 'actions';
import { COLORS } from 'utils/COLORS.';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    border: `2px solid ${colors.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  searchIconContainer: {
    marginRight: theme.spacing(1), // Adjust the spacing as needed
  },
  searchIcon: {
    color: 'black', // Search icon color
  },
  searchInput: {
    width: '100%',
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: COLORS.orange,

  },
  trialIcon: {
    marginRight: theme.spacing(1),


  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const { onOpenNavBarMobile, className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);
  const itemArray = [
    {
      type: 'group',
      text: 'Menu'
    },
    {
      type: 'firstGroup',
      text: 'Bookings',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          {/* SVG path */}
        </svg>
      ),
      link: null, // No link for the main item
      menu: [
        {
          type: 'firstLink',
          text: 'Flights',
          link: '/Flight',
          active: 'Flights'
        },
        {
          type: 'firstGroupflex',
          text: 'Seats',
          active: 'Seats',
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* SVG path */}
            </svg>
          ),
          link: null, // No link for the nested group
          menu: [
            {
              type: 'firstGroupnotFlex',
              text: 'One Way',
              link: '/seats/one-way/Ar/Ab',
              active: 'One Way',
              menu: [] // Array to be filled with nested menu items
            },
            {
              type: 'firstGroupnotFlex',
              text: 'Two Way',
              link: '/twoway/Ar/Ab',
              active: 'Two Way',
              menu: [] // Array to be filled with nested menu items
            }
          ]
        }
      ]
    },
    {
      type: 'firstGroup',
      text: 'Entry',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          {/* SVG path */}
        </svg>
      ),
      link: null, // No link for the main item
      menu: [
        {
          type: 'firstLink',
          text: 'Suppliers',
          link: '/Suppliers',
          active: 'Suppliers'
        },
        {
          type: 'firstLink',
          text: 'Country',
          link: '/Country',
          active: 'Country'
        },
        {
          type: 'firstLink',
          text: 'Cities',
          link: '/city',
          active: 'Cities'
        },
        {
          type: 'firstLink',
          text: 'Airlines',
          link: '/Company',
          active: 'Airlines'
        },
        {
          type: 'firstLink',
          text: 'Airports',
          link: '/Airports',
          active: 'Airports'
        }
      ]
    },
    // Add more items as needed
  ];

  const [filteredItems, setFilteredItems] = useState(itemArray);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      axios.get('/api/account/notifications').then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const userLogin = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('navbarcountry');
    window.location.replace('/');
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = event => {
    console.log('Search value:', event.target.value);

    const value = event.target.value;
    setSearchValue(value);

    // Filter the items based on the search value
    const filtered = itemArray.filter((item) =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };
  
  const popularSearches = [
    'Devias React Dashboard',
    'Devias',
    'Admin Pannel',
    'Project',
    'Pages'
  ];

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar style={{ backgroundColor: COLORS.purple }}>
        <RouterLink to="/">
          <img
            style={{ height: '150px', width: '230px' }}
            alt="Logo"
            src="/images/logos/Dark.png"
          />
        </RouterLink>
        <div className='d-flex justify-content-center align-items-center' style={{ marginLeft: "100px" }}>
          <img
            style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }}
            src='/images/logos/PLANE.jpg' alt="Profile"
          />
          <div style={{ marginLeft: '12px' }}>
            <p style={{ marginBottom: 0, fontSize: '15px' }}>User Name</p>
            <p style={{ width: '150px', fontSize: '11px' }}>Admin</p>
          </div>
        </div>
        <div className={classes.flexGrow} />
        <div className={classes.searchContainer}>
          <div className={classes.searchIconContainer}>
            <SearchIcon className={classes.searchIcon} />
          </div>
          <Input
            className={classes.searchInput}
            disableUnderline
            onChange={handleSearchChange}
            placeholder="Search"
            value={searchValue}
          />
        </div>
        <Popper
          anchorEl={searchRef.current}
          className={classes.searchPopper}
          open={true}
          transition
        >
          <ClickAwayListener onClickAway={handleSearchPopverClose}>
            <Paper className={classes.searchPopperContent} elevation={3}>
              <List>
                {filteredItems.map((search) => (
                  <ListItem
                    button
                    key={search.text}
                    onClick={handleSearchPopverClose}
                  >
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={search.text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </ClickAwayListener>
        </Popper>

        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign Out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
      <PricingModal onClose={handlePricingClose} open={pricingModalOpen} />
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
