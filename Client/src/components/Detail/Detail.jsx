import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../Cards.module.css";

export default function Deatil() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.divContainer}>
      <div className={style.detalle}>
        <h1>{character.name}</h1>
        <h2> STATUS | {character.status}</h2>
        <h2> SPECIE | {character.species}</h2>
        <h2> GENDER | {character.gender}</h2> 
        <h2> ORIGIN | {character.origin?.name}</h2>
      </div>
      <hr className={style.lineaSeparadora} />
      <div className={style.imagen}>
        <img className={style.circuloimagen1} src={character.image} alt="" />
      </div>
    </div>
  );
}
