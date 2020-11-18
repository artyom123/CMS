import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Link, useLocation  } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import { Employee } from '../../type/employees';

import './Employees.scss';

const Employees = ({ employees } : { employees: Array<Employee>}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Grid className="employees">
      {
        employees.map((employee: Employee) => (
          <Card className="employees-card">
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon onClick={handleMenuOpen}/>
                  <Menu
                    elevation={0}
                    anchorEl={anchorEl}
                    keepMounted
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      {
                        employee.isActive ? "Неактивен" : "Активен"
                      }
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      Удалить
                    </MenuItem>
                  </Menu>
                </IconButton>
              }
              title={`${employee.name} ${employee.surname}`}
              subheader={employee.phone}
            />
            
            <Link
              to={`${pathname}/${employee.id}`} 
              key={employee.id}
              className="employees-card-link"
            >
              <CardMedia
                className="employees-card-media"
                image={employee.avatar}
                title={`${employee.name} ${employee.surname}`}
              />
              <Grid className={clsx(
                "employees-card-active", {
                  "employees-card-active-enable": employee.isActive,
                  "employees-card-active-disable": !employee.isActive,
                }
              )}>
                { employee.isActive ? 'Активен' : 'Неактивен' }
              </Grid>
            </Link>
          </Card>
        ))
      }
    </Grid>
  );
};

Employees.displayName = 'Employees';

export default Employees;
