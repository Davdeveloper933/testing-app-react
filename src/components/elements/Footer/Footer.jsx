import style from './Footer.module.scss'
import footerLogo from '../../../img/icons/footer-logo.svg'
import {ReactComponent as Email} from '../../../img/icons/email.svg'
import {ReactComponent as Insta} from '../../../img/icons/insta.svg'
import {ReactComponent as Facebook} from '../../../img/icons/facebook.svg'

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className='container'>
                <div className={style.Inner}>
                    <div className={style.logo}>
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className={style.nav}>
                        <a href="" className={style.navItem}>Company</a>
                        <a href="" className={style.navItem}>Products</a>
                        <a href="" className={style.navItem}>Services</a>
                        <a href="" className={style.navItem}>Brand</a>
                        <a href="" className={style.navItem}>Contact Us</a>
                    </div>
                    <div className={style.socials}>
                        <a href="" className={style.socialsItem}>
                            <Email />
                        </a>
                        <a href="" className={style.socialsItem}>
                            <Insta />
                        </a>
                        <a href="" className={style.socialsItem}>
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;