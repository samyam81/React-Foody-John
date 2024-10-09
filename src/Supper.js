import React from "react";
import "./CSSRepo/food.css";

const Supper=()=>{
    return (
      <div className="container">
        <h3> Items for Dinner </h3>
        <dl>
          <dt> Nepali Rice Set </dt>
          <dd> Nepali Food items with Rice, Rice baby.</dd>

          <dt> Pasta </dt>
          <dd> We have kidnapped a Italian guy. Lets keep it secret.</dd>
        </dl>
      </div>
    );
};

export default Supper;