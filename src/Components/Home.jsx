import React from 'react'
import './Home.css'
// import background from 'D:/Mango Workspace/mxpertz/frontend/src/Images/background.jpeg'

export const Home = () => {
    return (
        <>
            {/* <div className='home-body'> */}
                <div className='home-page'>
                    <div className='bz'>
                    <h1 className='heading'>Only Quality Food</h1>

                    <p>Quality of food has positive effects on retention and creation of customers.
                        Food of poor quality keeps off the customers and even the new customers do not return if they
                        encounter poor quality on their first visit. On the other hand, customers remain loyal to a
                        specific restaurant if they experience food of good quality and value for the first time.</p>
                    <div className='home-btn'>
                        <button className='btn1'>View Menu</button>
                        <button className='btn2'>Reservation</button>
                    </div>
                    </div>
                </div>
            {/* </div> */}
        </>

    )
}
