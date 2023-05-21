/* eslint-disable react/no-multi-comp */
import React from 'react';
import { matchPath } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, Typography } from '@material-ui/core';

import useRouter from 'utils/useRouter';
import { NavigationListItem } from './components';
import { COLORS } from 'utils/COLORS.';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
   
  }
}));

const NavigationList = props => {
  const { pages, label,...rest } = props;

  return (
    <List className={label} style={{width:props?.twoway?"50%":"100%"}} >
      {pages.reduce(
        (items, page) => reduceChildRoutes({ items, page, ...rest }),
        []
      )}
    </List>
  );
};

NavigationList.propTypes = {
  depth: PropTypes.number,
  pages: PropTypes.array
};

const reduceChildRoutes = props => {
  const { router, items, page, depth,label } = props;

  if (page.children) {
    const open = matchPath(router.location.pathname, {
      path: page.href,
      exact: false
    });

    if (page.children.length === 2 &&(page.children[0].title=="Two Way"||page.children[0].title=="One Way")) {
      const arr1 =[]
     const arr2 =[]


      arr1.push(
     page.children[0]
      )

       arr2.push(
     page.children[1]
      )
console.log(arr1);
 items.push(
      <NavigationListItem
      
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
      >
        {/* className='d-flex justify-content-center align items-center'  */}
        <div  className='d-flex justify-content-center align items-center' >
          {console.log(arr1,"arr1arr1")}
        <NavigationList
        
          depth={depth + 1}
          pages={arr1}
          router={router}
          label={label}
          twoway={true}

        />
        <NavigationList
          depth={depth + 1}
          pages={arr2}
          router={router}
          label={label}
          twoway={true}

        />
        </div>
        
      </NavigationListItem>
    );
    }else{
 items.push(
      <NavigationListItem
      
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
      >
        <NavigationList
          depth={depth + 1}
          pages={page.children}
          router={router}
        />
      </NavigationListItem>
    );
    }

   
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />
    );
  }

  return items;
};

const Navigation = props => {
  const { title, pages, className, component: Component,label, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
    <Component
      {...rest}
      className={clsx(classes.root, className)}
      
    >
      {title && <Typography  variant="overline">{title}</Typography>}
      <NavigationList
        depth={0}
        pages={pages}
        router={router}
        label={label}
        
      />
    </Component>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  pages: PropTypes.array.isRequired,
  title: PropTypes.string
};

Navigation.defaultProps = {
  component: 'nav'
};

export default Navigation;
