import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import { Employee } from '../../type/employees';

const Employees = ({ employees } : { employees: Array<Employee>}) => (
  <>
    {
      employees.map((employee: Employee) => (
        <Card key={employee.id}>
          <CardHeader action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }/>
          <CardMedia
            className=""
            image={employee.avatar}
            title={`${employee.name} ${employee.surname}`}
          />
        </Card>
      ))
  }
  </>
);

Employees.displayName = 'Employees';

export default Employees;
