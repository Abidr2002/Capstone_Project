/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const BodyWeightResult = ({ bodyWeight }) => (
  <div className="items-center text-center">
    <h2>Your Ideal Body Weight is:</h2>
    <br />
    <h3 className="text-5xl mb-2"> {bodyWeight} Kg </h3>
  </div>
);

export default BodyWeightResult;
