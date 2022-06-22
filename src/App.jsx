import { useEffect, useState} from 'react'
import {Header} from './components/Header'
import {Pokecard} from './components/Pokecard'
import './App.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Footer} from './components/Footer'
import "./styles.css";
import { Navigation } from "swiper";



export const App = () => {
  const [allPokemons, setAllPokemons] = useState([])

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

  return(
    <main>
      <div className='container'>
        <Header />
        <div className='pokedex' >
          <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper" 
          slidesPerView={4}
          
          >
          
            {allPokemons.map((item, index) => (
              <SwiperSlide>
                <Pokecard 
                name={item.name}
                image={item.sprites.other.home.front_default}
                type={item.types[0].type.name}
                id={item.id}
                weight={item.weight}
                xp={item.base_experience}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </main>
  )
} 