import React from "react";

const Coffee = () => {
  const handleClick = () => {
    alert("The E-sewa ID for Creater is: 9843999347");
  };

  return (
    <div>
      <style>
        {`
          .sponser {
            background-color: #f39c12; 
            border: 2px solid #e67e22; 
            color: white; 
            padding: 12px 28px; 
            text-align: center; 
            text-decoration: none; 
            display: inline-block; 
            font-size: 18px; 
            margin: 10px 70px;
            cursor: pointer; 
            border-radius: 12px; 
            transition: background-color 0.4s ease, transform 0.3s; 
          }

          .sponser:hover {
            background-color: #e67e22;
            transform: scale(1.05); 
          }

          .sponser:focus {
            outline: none; 
            box-shadow: 0 0 10px rgba(241, 196, 15, 0.5); 
          }
        `}
      </style>
      <button className="sponser" onClick={handleClick}>
        Sponsor a Good Coffee!!
      </button>
    </div>
  );
};

export default Coffee;
