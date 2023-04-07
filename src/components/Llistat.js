import React, { useState } from "react";
import data from "./data/plataformes.json";
import "./css/llistat.css";
import check from "../multimedia/check2_25.png"; 

const imagen = require.context("../multimedia/", true);

export default function Llistat() {
  const [checkedState, setCheckedState] = useState(new Array(8).fill(false));

  const [active, setActive] = useState(true);
  console.log(checkedState);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(position);
    setCheckedState(updatedCheckedState);
    setActive(!active);
  };

  /* <img className={`grid-item ${active?"active":""}`} onClick={() => setActive(!active)}*/

  return (
    <div>
      <h5>Selecciona tus suscripciones</h5>
      <div className="grid-container">
        {data.map(({ id, name, img }, index) => {
          
          return (
            <div className="grid-item">
              
             
              <div>
                <img
                  className={`logo ${active ? "active" : ""}`}
                  width={100}
                  height={100}
                  id={id}
                  src={imagen(`./${img}`)}
                  alt={name}
                  onClick={() => handleOnChange(index)}
                />
              </div>
              <div className="checkbox">
                {checkedState[index] === true?<img src = {check} alt="check"/>:""}
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
