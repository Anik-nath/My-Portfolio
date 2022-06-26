import React from 'react';
import './darkmode.css';
import './toggle.css';

const Toggle = ({ checked, onChange }) => (
  <>
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
  </>
);

export default Toggle;
