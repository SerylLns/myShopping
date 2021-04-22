import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./containers/Cards";

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
        <Cards/>
      </UidContext.Provider>
    </div>
  );
}

export default App;
