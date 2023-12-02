import React from 'react'
import './Testimonial.css'

export const Testimonial = () => {
    return (
        <>
            <div className='test'>
                <h2>Testimonials</h2>
                <p>What People are Saying</p>
            </div>
            <div className='flex'>
                <div className='inside-flex'>
                    <p className='in-para'>"A Great Find"</p>
                    <p >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter</p>
                        <p className='xyz'>Bloom</p>
                </div>
                <div className='inside-flex'>
                    <p className='in-para'>"Fabulous Food"</p>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter</p>
                        <p className='xyz'>Extra</p>
                </div>
                <div className='inside-flex'>
                    <p className='in-para'>"Successful Expereince"</p>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter</p>
                        <p className='xyz'>Bloyg</p>
                </div>
                <div className='inside-flex'>
                    <p className='in-para'>"Speechless"</p>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter</p>
                        <p className='xyz'>divi</p>
                </div>
            </div>
        </>
    )
}
