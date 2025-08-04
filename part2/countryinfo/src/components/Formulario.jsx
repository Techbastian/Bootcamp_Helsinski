import React from "react";

const Formulario = ({ handleChange }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label htmlFor="country">Write the name of the country:</label>
      <input type="text" id="country" name="country" onChange={handleChange} />
    </div>
  );
};

export default Formulario;
