import React from 'react'
import vegetables from 'D:/Mango Workspace/mxpertz/frontend/src/Images/vegetables.jpg'
import './Welcome.css'

export const Welcome = () => {
  return (
    <>
    <div className='welcome'>
        <div className='wel-para'>
         <p className='heading1'>Our Story</p>
         <p  className='heading2'>Welcome To Royal</p>
         <p  className='heading3'>There are many people such as producers, suppliers, storage personnel, preparation and 
            service staff involved directly and indirectly in determining the quality and value of food.
            Producers being the farmers are involved in producing food.
            Preparation of food of good quality means use of ingredients of good quality 
            thus food production by farmers affects directly the quality and value of food. 
            Customers have to get the value for money they are spending on producing food and 
            this is only achieved if the farming materials used are of high quality.</p>
            </div>
        <div>
         <img src={vegetables} alt='Loading' className='wel-img'/>
        </div>
        
    </div>
    </>
    
  )
}
