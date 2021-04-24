import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#87a330",
      light: "#a1c349",
    },
    secondary: {
      main: "#f9a03f",
      light: " #f3c053",
      
    },
    backgound: {
      default: "#787c7c",
    },
  },
  status: {
    danger: "orange",
  },
});

export default theme;