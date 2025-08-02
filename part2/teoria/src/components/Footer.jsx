import React from "react";

const Footer = () => {
  const footerStyles = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "lightgray",
    textAlign: "center",
  };

  return (
    <div style={footerStyles}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  );
};

export default Footer;
