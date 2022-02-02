import React from 'react';
import './Appoinment.css'
const Appoinment = () => {
    return (
      
        <div className="appointment">
             <h1 className="text-warning mb-5">Appoinment!!</h1>
 <form >
<input type="text" placeholder="First Name"/>
<input type="text" placeholder="Last Name"/>
<input type="email" placeholder="Email"/>
<input type="date" placeholder="Time and Date"/>
<select id="doctor" name="doctor">
<option value="australia">John</option>
<option value="canada">Michael</option>
<option value="usa">Rahim</option>
</select>
<textarea  type='text'placeholder='Write here..'></textarea>
<input type="submit" />
</form>

        </div>
    );
};

export default Appoinment;