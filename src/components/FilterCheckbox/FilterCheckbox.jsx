import React, { useEffect, useRef } from 'react';
import './index.css';

const FilterCheckbox = ({ setCheckbox, checkboxState = false }) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    checkboxRef.current.checked = checkboxState;
  }, [checkboxState]);

  const handleClickCheckbox = () => setCheckbox(checkboxRef.current.checked);

  return (
    <div className='filter-checkbox'>
      <input
        className='filter-checkbox__icon'
        onChange={handleClickCheckbox}
        type='checkbox'
        id='short-movies'
        name='short-movies'
        ref={checkboxRef}
      />
      <label className='filter-checkbox__label' htmlFor='short-movies'>Короткометражки</label>
    </div>
  );
};

export default FilterCheckbox;
