import React from 'react';

const Button = ({ text, onClick, type = 'submit' }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
