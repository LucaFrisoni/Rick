import { Link } from "react-router-dom";
import "./intro.css";

export default function Intro() {
  return (
    <div>
      <div className="containerr">
        <div className="containerdiv">
          <h1>
            Bienvenido a <b>Rick y Morty!</b>
          </h1>
          <h4>Creado por: Luca Frisoni</h4>
          <Link to="/login">
            <div className="containerrr">
              <a>
                <span>Login In</span>
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="container">
        <a><span>Login In</span></a>
    </div> */
}
