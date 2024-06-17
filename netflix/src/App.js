import axios from "axios";
import "./App.scss";
import Home from "./pages/Home";
import { createContext, useEffect } from "react";
import { useState } from "react";
const context = createContext();

//import axios from "axios";
//axios.defaults.baseURL = "http://localhost:8080";
//axios.defaults.withCredentials = true;

function App() {
  const [userAllData, setUserAllData] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/me", { withCredentials: true })
      .then((res) => setUserAllData(res.data.user))
      .catch((error) => {
        console.log(error);
        setUserAllData({});
      });
  }, []);

  return (
    <context.Provider
      value={{
        userAllData,
        setUserAllData,
        loading,
        setLoading,
        isAuth,
        setIsAuth,
      }}
    >
      <Home />
    </context.Provider>
  );
}

export default App;
export { context };
