import React from 'react'

import './style.scss'

export const Pokecard = ({name,image, type, id,weight, xp}) => {
    return (
        <div className="cardContainer">
            <div className='card'>
                <section className='pokemon'>
                    <div>
                        <img src={image} alt="" />
                    </div>

                    <div className='name-type'>
                        <p>{name[0].toUpperCase() + name.substring(1)}</p>
                        <span> </span>
                    </div>
                </section>

                <section className='info'>
                    <div className='xp'>
                        <p>XP</p>
                        <p>{xp}</p>
                    </div>
                    <div className='weight'>
                        <p>Weight</p>
                        <p>{weight}</p>
                    </div>
                </section>

                <div className='id'>
                    #{id < 10 ? '00' + id : '0' + id}
                </div>
            </div>
        </div>
    )
}