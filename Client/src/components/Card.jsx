import style from "./Cards.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../Redux/actions";
import React from "react";
import { useState, useEffect } from "react";
import "./card.css";
function Card(props) {
  const [isFav, setFav] = useState(false);

  function handleFavorite(ev) {
    if (isFav) {
      setFav(false);
      props.removeFav(props.id);
    }
    if (!isFav) {
      setFav(true);
      props.addFav(props);
    }
  }

  useEffect(() => {
    if (Array.isArray(props.myFavorites)) {
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setFav(true);
        }
      });
    }
  }, [props.myFavorites]);

  return (
    <div className="containerrrr">
      {isFav ? (
        <button onClick={handleFavorite} className={style.corazon}>
          <span>❤️</span>
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.corazon}>
          <span>🤍</span>
        </button>
      )}
      <button
        className={style.posicionboton}
        onClick={() => (props.onClose ? props.onClose(props.id) : null)}
      >
        ❌
      </button>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img class="imgg" src={props.image} alt="" />
            <h3>{props.name}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p class="aprobar">Status: {props.status}</p>
            <hr />
            <p class="aprobar">Gender: {props.gender}</p>
            <Link to={`/detail/${props.id}`}>
              <a class="aprobar1" href="">
                +Info
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
{
  /* <div class="containerrrr">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img class="imgg" src="./asset/pngwing.com.png" alt="" />
            <h3>name</h3>
          </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p class="aprobar">la info que quiero poner</p>
                <a class= "aprobar1"href=""> Mi link a detail</a>
              </div>
        </div>
      </div>
    </div> */
}
