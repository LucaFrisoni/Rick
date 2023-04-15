import React, { useState,useEffect} from "react";

import  "./login.css";

export default function Login({ login }) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({
    email: "",
    password: "",
  });
  function validate(inputs) {
    const error = {};
    if (!inputs.email) {
      error.email = "Debe ingresar un email";
    } else if (!inputs.password) {
      error.password = "Debe ingresar una contraseña";
    } else if (!emailRegex.test(inputs.email)) {
      error.email = "Debe ingresar una email adecuado";
    } else if (!passwordRegex.test(inputs.password)) {
      error.password =
        "Debe ingresar una contraseña con al menos una letra mayuscula, al menos una minuscula,un numero y un caracter especial";
    }
    return error;
  }
 



  function HandleChange(e) {
    const typein = e.target.name;
    const valor = e.target.value;
    setInputs({
      ...inputs,
      [typein]: valor,
    });
    setErrors(validate({ ...inputs, [typein]: valor }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const aux = Object.keys(error);
    if (aux.length === 0) {
      login(inputs);
   
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    } else {
      window.alert("Debe llenar todos los campos");
    }
   
  }
  return (
    <section className="holaaaaaa">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
      <div className="square" style={{ "--i": 0 }}></div>
      <div className="square" style={{ "--i": 1 }}></div>
      <div className="square" style={{ "--i": 2 }}></div>
      <div className="square" style={{ "--i": 3 }}></div>
      <div className="square" style={{ "--i": 4 }}></div>
      <div className="container">
          <div className="form">
            <h2>Login Form</h2>
            <form className="" action="" onSubmit={handleSubmit}>
              <div className="inputbox">
                <input
                  type="email"
                  onChange={HandleChange}
                  name="email"
                  value={inputs.email}
                  placeholder="Username"
                />
              </div>
              <p>{error.email}</p>
              <div className="inputbox">
                <input
                  type="password"
                  onChange={HandleChange}
                  name="password"
                  value={inputs.password}
                  placeholder="Password"
                />
              </div>
              <p>{error.password}</p>

              {Object.keys(error).length === 0 ? (
               
                  <div className="inputbox">
                    <input type = "submit" value="Login" />
                  </div>
                
              ) : null}
              <p className="forget">
                Forgot Password ?<a href="#futura-ruta">ClickHere</a>
              </p>
              <p className="forget">
                Dont have an account ?<a href="#futura-ruta">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

  /* <section>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="box">
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:4;"></div>
     
        <div class="container">
          <div class="form">
            <h2>Login Form</h2>
            <form action="">
              <div class="inputbox">
                <input type="text" placeholder="Username" />
              </div>
              <div class="inputbox">
                <input type="password" placeholder="Password" />
              </div>
              <div class="inputbox">
                <input type="submit" value="Login" />
              </div>
              <p class="forget">Forgot Password ?<a href="#">ClickHere</a></p>
              <p class="forget">
                Dont have an account ?<a href="#">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section> */

