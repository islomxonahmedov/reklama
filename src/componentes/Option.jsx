import React, { useState } from 'react';

const CustomSelect = () => {
  const options = [
    {label: 'Option 1'},
    {label: 'Option 2'},
    {label: 'Option 3'},
  ];

  return (
    <div>
      <h1>Custom Select Example</h1>
      <select>
        <option value="" selected>Select an option</option>
        {options.map(option => (
          <option>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
