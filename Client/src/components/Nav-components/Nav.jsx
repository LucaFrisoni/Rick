import style from "../Cards.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
export default function Nav({ onsearch, logout }) {
  const [id, setId] = useState("");
  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <div class="containnavigation">
      <div class="navigation">
        <ul class="abc">
          <Link to="/home">
            <li class="listt active">
              <a class="abcd uno" href="">
                <span class="icon uno">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="text">Home</span>
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li class="listt">
              <a class="abcd" href="">
                <span class="icon dos">
                  <ion-icon name="share-social-outline"></ion-icon>
                </span>
                <span class="text">About</span>
              </a>
            </li>
          </Link>
          <Link to="/favorites">
            <li class="listt">
              <a class="abcd" href="">
                <span class="icon tres">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span class="text">Favorite</span>
              </a>
            </li>
          </Link>
          <Link to="/">
            <li class="listt">
              <a class="abcd" href="">
                <span class="icon cuatro">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="text">Logout</span>
              </a>
            </li>
          </Link>
        </ul>
        <nav class="navv">
          <input
            class="innav"
            type="search"
            placeholder="Id.."
            onChange={handleChange}
            name="searchId"
            value={id}
          />
          <button class="bunnav" onClick={() => onsearch(id)}>
            <span class="gg">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
{
  /* <div class="containnavigation">
    <div class="navigation">
      <ul class="abc">
        <li class="listt active">
          <a class="abcd uno" href="">
            <span class="icon uno">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="listt">
          <a class="abcd" href="">
            <span class="icon dos">
              <ion-icon name="share-social-outline"></ion-icon>
            </span>
            <span class="text">About</span>
          </a>
        </li>
        <li class="listt">
          <a class="abcd" href="">
            <span class="icon tres">
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span class="text">Favorite</span>
          </a>
        </li>
        <li class="listt">
          <a class="abcd" href="">
            <span class="icon cuatro">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span class="text">Logout</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>
</div>
  

  <nav className={style.navbb}>
        <input
          className={style.searchbar}
          type="search"
          placeholder="Id.."
          onChange={handleChange}
          name="searchId"
          value={id}
        />
        <button className={style.bd} onClick={() => onsearch(id)}>
          <strong>Agregar</strong>
        </button>
      </nav>*/
}
