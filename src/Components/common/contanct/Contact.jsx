import React from 'react';
import './contact.css';
import Back from '../back';
import img from '../../images/pricing.jpg'

const Contact = () => {
  return (
    <>
    <section className='contact mb'>
         <Back name='Contact Us' title='Get Helps & Friendly Suppport'cover={img} />

         <div className="container">
            <form action="" className='shadow'>

                <h4>Fillup The Form </h4>
                <div>
                    <input type="text" placeholder='Name' name='' id='' />
                    <input type="text" placeholder='Email' name='' id='' />
                </div>

                <input type="text" placeholder='Subject' />
                <textarea name='' id='' cols='30' rows='10' ></textarea>
                <button>Submit Request</button>

            </form>
         </div>

    </section>
    </>
  )
}

export default Contact 
