import { useEffect, useState } from 'react'

import {Header} from './components/Header'
import {Pokecard} from './components/Pokecard'
import './App.scss'

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')

  const loadPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return(
    <div className='container'>
      <Header />
      
      <div className='pokedex'>
        {allPokemons.map((item, index) => {
          <Pokecard 
            name={item.name}
            type={item.types[0].type.name}
            img={item.sprites.other.dream_world.front_default}
          />
        })}
        
      </div>
    </div>
  )
}