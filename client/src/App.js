import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Components/Home/Cards";
import { ThemeProvider } from "@material-ui/styles";
import theme from './theme';
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import LogIn from "./Components/Login/LogIn";
import SignUp from "./Components/Login/SignUp";
import Log from "./containers/Log";

const { UidContext } = require("./UserContext");

function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const feetchToken = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log(err));
    };
    feetchToken();
    console.log(uid);
  },[uid])
  
  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <ThemeProvider theme={theme}>
          <Cards />
          {/* <Log/> */}
        </ThemeProvider>
      </UidContext.Provider>
    </div>
  );
}

export default App;
