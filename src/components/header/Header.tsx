import React, { useCallback, useState } from 'react';
import { observer, inject } from 'mobx-react';
import clsx from 'clsx';
import {
  Avatar,
  AppBar,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Link,
  Icon,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';

import './Header.scss';

interface props {
  buttonStore?: {
    isOpen?: boolean;
    toggleOpenMenu?: () => void;
  };
  menuStore?: {
    mainMenu?: () => string;
    textMainMenu?: string;
  };
}

const Header: React.FC<props> = ({ buttonStore, menuStore }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(() => {
    buttonStore?.toggleOpenMenu?.();
  }, [buttonStore]);

  const handleMenuUser = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuUserClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Grid className="header">
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar className={clsx(
            "header-container", {
            "header-container-open": buttonStore?.isOpen,
          }
        )}>
          <Grid className="header-container-right">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              { menuStore?.textMainMenu }
            </Typography>
          </Grid>
          <Grid className="header-container-right">
            <Link href="/login">
              <Icon className="header-container-icon">
                <ExitToAppIcon />
              </Icon>
            </Link>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuUser}
              color="inherit"
            >
              <Avatar alt="Avatar" src="/images/avatar.jpg"/>
            </IconButton>
            <Menu
              elevation={0}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuUserClose}
            >
              <MenuItem onClick={handleMenuUserClose}>
                <Link href="/setting-user">
                  Настройки
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuUserClose}>
                <Link href="/login">
                  Выход
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

Header.displayName = 'Header';

export default inject('buttonStore', 'menuStore')(observer(Header));
