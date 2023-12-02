import React from 'react';
import './Contact.css'

export const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className='info'>
                    <h2>Hours Of Operation</h2>

                    <p className='day'>MON-Fri</p>
                    <p>10:00am-01:00pm</p>
                    <p>04:00am-10:30pm</p>
                    <hr className='hr'/>

                    <p className='day'>Sat</p>
                    <p>03:00am-10:00pm</p>
                    <hr className='hr'/>

                    <p className='day'>Sun</p>
                    <p>Closed</p>
                    <hr className='hr'/>

                    <button  className='btnn'>Make Reservation</button>
                </div>
                <div className='page'>
                    <h2>Contact Us</h2>
                    <p>Our News letter</p>
                    <p>Dialoge ia an essential part of any script</p>
                   <form className='form'>
                    <input placeholder='First Name' />
                    <input placeholder='Last Name' />
                    <input placeholder='Email' />
                   </form>

                    <button className='contact-btn'>Contact Us</button>
                </div>
            </div>
        </>

    )
}
