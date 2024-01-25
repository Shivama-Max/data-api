import React from "react";

const Dropdown = ({ onSelect }) => {
    return (
      <select onChange={e => onSelect(e.target.value)}>
        <option value="student">Student</option>
        <option value="selfEmployed">Self-Employed</option>
        <option value="business">Business</option>
      </select>
    );
};

export default Dropdown;