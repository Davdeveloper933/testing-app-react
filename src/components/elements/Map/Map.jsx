import style from './Map.module.scss'
import {ReactComponent as Insta} from '../../../img/icons/insta.svg'
import {ReactComponent as Facebook} from '../../../img/icons/facebook.svg'
import map from '../../../img/images/map.jpg'
import address from '../../../img/icons/map-indicator.svg'

const Map = () => {
    return (
        <div className={style.map}>
        <h3 className={style.mapText}>
            Fill up the form and our team will get back to you <b>within 24 hours.</b>
        </h3>
        <div className={style.mapImage}>
            <img src={map} alt="map" />
        </div>
        <div className={style.mapAddress}>
            <img src={address} alt="address" />
            <span className={style.mapAddress__text}>
                102 Street 2714 Don
            </span>
        </div>
        <div className={style.mapSocials}>
            <a href="" className={style.socialsItem}>
                <Insta />
            </a>
            <a href="" className={style.socialsItem}>
                <Facebook />
            </a>
        </div>
    </div>
    )
}

export default Map;