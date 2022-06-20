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
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
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
      
      <div className='pokedex' ref={carousel}>
        <div className='block'>
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
        </div>
      </div>
    </div>
  )
}