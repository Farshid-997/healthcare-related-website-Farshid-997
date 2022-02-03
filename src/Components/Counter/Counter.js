import React from 'react';
import './Counter.css'
const Counter = () => {
    return (
        <div class="row">
        <div class="column">
          <div class="card">
            <p><i class="fa fa-user"></i></p>
            <h3>11+</h3>
            <p>Doctors</p>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <p><i class="fa fa-check"></i></p>
            <h3>55k+</h3>
            <p>Patient's Cure</p>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <p><i class="fa fa-smile-o"></i></p>
            <h3>100k+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <p><i class="fa fa-coffee"></i></p>
            <h3>100+</h3>
            <p>Branch opening Soon</p>
          </div>
        </div>
      </div>
    );
};

export default Counter;