import './style.scss'

export const Pokecard = ({name, type, img}) => {
    return (
        <div className='pokecard'>
            <div className='pokemon'>
                <img src={img} alt="" />
            </div>
            <div className='pokename'>
                <h4>{name}</h4>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className='pokeinfo'>
                <div>
                    <p>XP</p>
                    <p>64</p>
                </div>
                <div>
                    <p>Weight</p>
                    <p>69</p>
                </div>
            </div>
            <div className='idendity'>
                <p>#001</p>
            </div>
        </div>
        
    )
}