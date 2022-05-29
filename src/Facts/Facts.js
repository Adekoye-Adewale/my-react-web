import React from 'react';
import './Facts.css';
import pic from '../Images/adisa-logo.png'

function Facts(props) {
    return (
      <div className='ft'>
          <picture>
              <img src={pic} alt={props.facttext} />
          </picture>
          <span>{props.factnumber}</span>
          <p>{props.facttext}</p>
      </div>
    );
  }



export default Facts;