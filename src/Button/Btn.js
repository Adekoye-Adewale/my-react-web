import React from 'react';
import './btn.css';

function Btn(props) {
    return (
      <div>
          <button className='btn'>{props.btn}</button>
      </div>
    );
  }



export default Btn;