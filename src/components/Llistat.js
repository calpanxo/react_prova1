import React, { useEffect, useState } from "react";
import data from "./data/data.json";
import "./css/llistat.css";

const Llistat = () => (
  <div>
    <h3>Llistat de plataformes</h3>
    <div  className="grid-container">
      {data.map((item) => {
        return (
         
            <div className="grid-item">
              <img
                width={100}
                height={100}
                src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                alt={item.name}
              />
            </div>
          
        );
      })}
    </div>
  </div>
);
export default Llistat;
