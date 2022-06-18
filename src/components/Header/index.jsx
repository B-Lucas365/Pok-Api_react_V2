import './style.scss'
import search from '../../assets/search.svg'

export const Header = () => {
    return (
        <header>
            <div>
                <h4>Welcome to</h4>
                <h1>Pokedex</h1>
            </div>
            <div className='search'>
                <button><img src={search} alt="" /></button>
                <input type="text" placeholder='Search Pokemon'/>
            </div>
        </header>
    )
}