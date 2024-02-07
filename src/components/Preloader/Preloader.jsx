import React from 'react';
import './index.css';

const Preloader = ({ onClick, btnShowMore, spin }) => {
  const handleBtnClick = () => onClick();

  return (
    <>
      <div className='preloader'>
        {btnShowMore && <button className='btn btn_type_preloader' type='button' onClick={handleBtnClick}>Ещё</button>}
        <div className={spin ? 'preloader__spin preloader__spin_active' : 'preloader__spin'}>
          <span className='preloader__spin-round'></span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
