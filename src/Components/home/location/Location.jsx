import React from "react";
import './location.css';
import { location } from "../../data/Data";
import Heading from "../../common/header/Heading";

const Location = () =>{
    return(
        <>
        <section className="location padding">
        <div className="container">
            <Heading title='Explored By Location' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ducimus beatae odio voluptates in itaque soluta quibusdam natus expedita,
             adipisci corrupti dolor nostrum consectetur laudantium iusto blanditiis
              exercitationem dicta non cumque unde nisi quos vero?' />

              <div className="content grid3 mtop">
                {location.map((items, index) => {
                    return(
                        <div className="box" key={index}>
                        <img src={items.cover} alt='' />
                        <div className="overlay">
                            <h5>{items.name}</h5>
                            <p>
                                <label >{items.Villas}</label>
                                <label >{items.Offices}</label>
                                <label >{items.Apartments}</label>
                            </p>
                        </div>
                    </div>

                )
                  

                })}
              </div>
            
        </div>
        </section>
        </>
    )
}

export default Location