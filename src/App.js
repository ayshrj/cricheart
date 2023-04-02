import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API_KEY from "./Components/APIKEY.mjs";
import NavbarComp from './Components/NavbarComp';

function App() {

  let url =
    "https://api.cricapi.com/v1/currentMatches?apikey=" +
    API_KEY +
    "&offset=0&send=";

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let completeData = data.data;
        setUser(completeData);
        // console.log(completeData)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      
      <NavbarComp/>

    </div>
  );
}

export default App;
