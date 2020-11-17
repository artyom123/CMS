import React from 'react';
import {
  Button,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

import stylesConstants from '../styles/constants.module.scss';

const useStyles = makeStyles({
  login: {
    maxWidth: '360px',
    width: '100%',
    backgroundColor: stylesConstants.primaryWhite,
    padding: '50px 30px',
    textAlign: 'center',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  },
  loginTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    paddingBottom: '25px',
  },
  loginField: {
    width: '100%',
    paddingBottom: '10px',
  },
  loginButton: {
    width: '240px',
    backgroundColor: stylesConstants.primaryBlue,
    borderRadius: '25px',
    padding: '12px',
  },
  loginButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginLink: {
    color: stylesConstants.primaryBlack,
    paddingTop: '5px',
    paddingBottom: '15px',
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.login} noValidate autoComplete="off">
        <Typography className={classes.loginTitle} component="p">Ввойти в систему</Typography>
        <TextField
          className={classes.loginField}
          id="outlined-password-input"
          label="Логин"
          variant="outlined"
        />
        <TextField
          className={classes.loginField}
          id="outlined-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Grid className={classes.loginButtons}>
          <Link className={classes.loginLink} href="https://test">
            Забыли пароль?
          </Link>
          <Button
            className={classes.loginButton}
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </Grid>
      </form>
    </>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
