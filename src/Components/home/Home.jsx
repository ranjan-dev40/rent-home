import React from 'react'
import Hero from './Hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Awards from './awards/Aaward'
import Location from './location/Location'
import Team from './team/Team'
import Price from './price/Price'

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Location />
        <Team />
        <Price />
    </>
  )
}

export default Home
