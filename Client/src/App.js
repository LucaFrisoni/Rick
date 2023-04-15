import "./App.css";
import  Cards  from "./components/Cards.jsx";
import Nav from "./components/Nav-components/Nav";
import { useState,  } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Deatil from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Favorites from "./components/Favorites/Favorites";
import { addFav, } from "./Redux/actions";


function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);


  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        console.log(data);
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div className="App">
      {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/about" ? null : (
        <Nav onsearch={onSearch} logout={logout} />
      )}

      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/login" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Detail/:id" element={<Deatil />}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} characters={characters} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
/*<Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}*/
