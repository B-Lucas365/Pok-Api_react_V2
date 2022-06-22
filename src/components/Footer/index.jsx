import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/Instagram.svg'
import tweter from '../../assets/tweter.svg'
import copy from '../../assets/copy.svg'
import './style.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="social">
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
                <img src={tweter} alt="" />
            </div>
            <div className="copy">
                <img src={copy} alt="" />
            </div>
        </footer>
    )
}