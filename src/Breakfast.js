import React from "react";
import "./CSSRepo/food.css";

const Breakfast=()=>{
    return(
        <div className="container">
            <h3> Items for Breakfast</h3>
            <dl>
                <dt> Fruit Salad </dt>
                <dd> It is a combination of Exotic fruits with Cottage Cheese.</dd>

                <dt> Coffee</dt>
                <dd> Coffee is nice. </dd>
            </dl>
        </div>
    );
};

export default Breakfast;