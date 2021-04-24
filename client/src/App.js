import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Components/Home/Cards";
import { ThemeProvider } from "@material-ui/styles";
import theme from './theme';
import Navbar from "./Components/Navbar";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/users.action";

const { UidContext } = require("./UserContext");

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const feetchToken = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      }).then((res) => {
        setUid(res.data)
      }).catch((err) => console.log(err));
    };
    feetchToken();
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log(uid);
  }, [uid, dispatch]);
  
  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Cards />
          {/* <Log/> */}
        </ThemeProvider>
      </UidContext.Provider>
    </div>
  );
}

export default App;
