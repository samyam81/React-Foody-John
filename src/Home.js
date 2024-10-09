import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <style>
        {`
          .container {
            text-align: center;
            background-color: #FDF2E9; /* Bone white */
            padding: 50px;
          }

          .Heading h1 {
            color: #FF007F; /* Royal pink */
            font-size: 3rem;
          }

          .Heading h2 {
            color: #FF007F; /* Royal pink */
            font-size: 2rem;
          }

          .Sub-body {
            margin-top: 30px;
          }

          .HomeButton {
            background-color: #FF007F; /* Royal pink */
            color: #FDF2E9; /* Bone white */
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            margin: 10px;
            transition: background-color 0.3s ease;
          }

          .HomeButton:hover {
            background-color: #F9B4D3; /* Light shade of pink on hover */
          }
        `}
      </style>
      <div className="Heading">
        <h1> Welcome to John Foodland</h1>
        <h2> Finger licking good!!</h2>
      </div>
      <div>
        <div className="Sub-body">
          <Link to="/brunch">
            <button className="HomeButton">Brunch</button>
          </Link>

          <Link to="/lunch">
            <button className="HomeButton">Midday meal</button>
          </Link>

          <Link to="/dinner">
            <button className="HomeButton">Supper</button>
          </Link>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
};

export default Home;
