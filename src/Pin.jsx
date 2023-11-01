import React, { useState } from 'react';
import './App.css';

const Pin = ({ pinSize, img }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setShowDeleteButton(e.target.checked);
  };

  const handleDeleteClick = () => {
    
  };

  return (
    <div>
      <h1> hlo </h1>
    </div>
  );
};

export default Pin;
