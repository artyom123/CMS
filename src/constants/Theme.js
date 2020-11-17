import { createMuiTheme } from '@material-ui/core/styles';

// import stylesConstants from '../styles/constants.module.scss';

const THEME = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        background: 'rgb(202 202 202 / 60%)',
      },
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default THEME;
