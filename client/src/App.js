import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Components/Home/Cards";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user.action";
import AdminPage from "./containers/AdminPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShowArticle from "./containers/ShowArticle";
import CartPage from "./containers/CartPage";
import StripeContainer from "./Stripe/StripeContainer";


const { UidContext } = require("./UserContext");

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    const feetchToken = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log(err));
    };
    feetchToken();
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log(uid);
  }, [uid, dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <UidContext.Provider value={uid}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Route exact path="/" component={Cards} />
            {userData.admin && (
              <Route exact path="/admin" component={AdminPage} />
            )}
            <Route exact path="/cart" component={CartPage} />
            <Route path="/article/:id" component={ShowArticle} />
            <Route path="/payment" component={StripeContainer} />
          </ThemeProvider>
        </UidContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
