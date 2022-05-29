import React from 'react';
import './Service.css';
import pic from '../Images/adisa-logo.png'

function Service(props) {
    return (
      <div className='ser'>
          <picture>
              <img src={pic} alt={props.servicename} />
          </picture>
          <span>{props.servicename}</span>
          <p>{props.servicedes}</p>
      </div>
    );
  }



export default Service;