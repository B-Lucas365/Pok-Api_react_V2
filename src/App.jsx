import { useEffect, useState, useRef } from 'react'

import {Header} from './components/Header'
import {Pokecard} from './components/Pokecard'
import './App.scss'
import left from './assets/left.svg'
import right from './assets/right.svg'


export const App = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const carousel = useRef(null)

  const loadPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const data = await res.json()

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  const handleLeftCick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth

  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }

  return(
    <div className='container'>
      <Header />
      
      <div className='pokedex' >
        <section className='pokebox' ref={carousel}>
          {allPokemons.map((item, index) => (
            <Pokecard 
            name={item.name}
            image={item.sprites.other.dream_world.front_default}
            type={item.types[0].type.name}
            id={item.id}
            weight={item.weight}
            xp={item.base_experience}
            />
          ))}
        </section>
        <div className='control'>
            <button  onClick={handleLeftCick}><img src={left} alt="" /></button>
            <button onClick={handleRightClick}><img src={right} alt="" /></button>
          </div>
      </div>
    </div>
  )
} 