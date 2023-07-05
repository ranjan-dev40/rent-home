import React from 'react'
import PriceCard from '../home/price/PriceCard'
import Back from '../common/back'
import img from '../images/pricing.jpg'

const Pricing = () => {
  return (
    <>
        <section className=''>
            <Back name='30 days money back guarantee' title='No Extra Fees.Friendly Support'cover={img} />
            <div className="price container">
                <PriceCard/>
            </div>


        </section>
        
    </>
  )
}

export default Pricing
