import  Card  from "./Card";
import React, { Component } from "react";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.bloquecartas}>
      {characters.map((e) => {
        return (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin.name}
            image={e.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
