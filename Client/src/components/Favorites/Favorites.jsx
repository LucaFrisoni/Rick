import { connect, useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../Card";
import style from "../Cards.module.css";
import { filterCards, orderCards, reset } from "../../Redux/actions";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderCards(e.target.value));
  }
  function handleFilter(e) {
    e.preventDefault();
    dispatch(filterCards(e.target.value));
  }
  function reseteador() {
    dispatch(reset());
  }

  return (
    <div className={style.divselector}>
      <select name="a" id="" defaultValue={"DEFAULT"} onChange={handleOrder}>
      
        <option value="DEFAULT" disabled>
          Ordenamiento
        </option>
        <option value="Ascendente">Ascendente<i class="fa fa-tasks" aria-hidden="true"></i></option>
        <option value="Descendete">Descendente</option>
      </select>
      <select name="a" id="" defaultValue={"DEFAULT"} onChange={handleFilter}>
        <option value="DEFAULT" disabled>
          Genero
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {/* <button onClick={reseteador}>Reset</button> */}
      <div className={style.bloquecartas}>
        {myFavorites.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              origin={e.origin?.name}
              image={e.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

// function mapStatetoProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapStatetoProps, null)(Favorites);
