import React from 'react';
import './Appoinment.css'
const Appoinment = () => {
    return (
        <div>
            <h1 class="text-warning mb-5">Appoinment!!</h1>
            <div className="form">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                    <label for="lname">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your Email.."></input>

                    <label for="lname">Time:</label>
                    <input type="date" id="time" name="time" placeholder="Your time.."></input> <br />


                    <label for="doctor">Doctor</label>
                    <select id="doctor" name="doctor">
                        <option value="australia">John</option>
                        <option value="canada">Michael</option>
                        <option value="usa">Rahim</option>
                    </select>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>



        </div>
    );
};

export default Appoinment;