import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Popover,
  CardHeader,
  Divider,
  Typography,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    maxWidth: '100%'
  },
  message: {
    padding: theme.spacing(2),
    backgroundColor: colors.grey[200],
    textAlign: 'center'
  }
}));

const NotificationsPopover = props => {
  const { anchorEl, ...rest } = props;

  const classes = useStyles();

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <div className={classes.root}>
        <CardHeader title="Notifications" />
        <Divider />
        <div className={classes.message}>
          <Typography variant="body2" color="textSecondary">
            Soon
          </Typography>
        </div>
      </div>
    </Popover>
  );
};

export default NotificationsPopover;
