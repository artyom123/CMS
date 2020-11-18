import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Grid, Container } from '@material-ui/core';

import EMPLOYEES from '../../data/employees';

import { Employee as EmployeeType } from '../../type/employees'; 

import './Employee.scss';

interface ParamTypes {
  id: string
}

const Employee = () => {
  const [employee, setEmployee] = useState<EmployeeType | undefined>();
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    const employeeItem = EMPLOYEES.find((employee) => String(employee.id) === id);

    setEmployee(employeeItem);

    console.log('====>  ', employeeItem);
  }, [id]);

  return (
    <Grid className="employee">
      {
        employee && (
          <Container>
            <Avatar src="/static/images/avatar/1.jpg"/>
          </Container>
        )
      }
    </Grid>
  );
};

Employee.displayName = 'Employee';

export default Employee;
