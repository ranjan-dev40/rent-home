import React from 'react'
import Heading from '../../common/header/Heading'
import RecentCard from './RecentCard'
import './recent.css'

 const Recent = () => {
  return (
    <>
    <section className='recent padding'>
        <div className="container">
            <Heading title='Recent Property listed' subtitle=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor ex harum, blanditiis aspernatur quidem aut ea earum assumenda 
            voluptatem nesciunt quis cumque doloribus.' />

        <RecentCard />
           

        </div>
    </section>
    
    </>
  )
}

export default Recent
