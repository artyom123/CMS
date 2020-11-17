import React, { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import { useRouteMatch } from 'react-router-dom';
import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@material-ui/icons';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MENU from '../../data/menu';

import './Menu.scss';

interface IMenu {
  buttonStore?: {
    isOpen?: boolean;
    toggleOpenMenu?: () => void;
  };
  menuStore?: {
    changeTextMainMenu?: (title: string) => void;
  };
}

const Menu: React.FC<IMenu> = ({ buttonStore, menuStore }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    MENU.forEach((menuItem) => {
      if (menuItem.link === path) {
        menuStore?.changeTextMainMenu?.(menuItem.title);
      }
    })
  }, [path, menuStore]);

  const handlerClose = useCallback(() => {
    buttonStore?.toggleOpenMenu?.(); 
  }, [buttonStore]);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          "drawer", {
          "drawer-open": buttonStore?.isOpen,
          "drawer-close": !buttonStore?.isOpen,
        }),
      }}
    >
      <Grid className="toolbar">
        <IconButton onClick={handlerClose}>
          <ChevronLeft />
        </IconButton>
      </Grid>
      <Divider />
      <List>
        {MENU.map((menuItem) => (
          <Link to={menuItem.link} key={menuItem.id}>
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon={['fas', menuItem.icon as IconName]} />
              </ListItemIcon>
              <ListItemText primary={menuItem.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default inject('buttonStore', 'menuStore')(observer(Menu));
