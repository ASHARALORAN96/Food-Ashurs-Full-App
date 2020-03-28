import React from 'react';
import './loading.scss';

const Spinner = () =>{
  return(
    <React.Fragment>
  
      <div id="bigloading">
        <div id="loading">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>  
        <div id="lefthalf"></div>
        <div id="righthalf"></div>
      </div>
    </React.Fragment>);
};

export default Spinner;