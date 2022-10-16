import styles from './Header.module.scss'
import logo from '../../../img/icons/logo.svg'
import Search from '../../UI/Search/Search'
import Button from '../../UI/Button/Button'

const Header = () => {
    return (
      <div className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <div className={styles.header__nav}>
                    <a href="">
                        <img src={logo} alt="Petro Equip" />
                    </a>
                    <div className={styles.menu}>
                        <a href='' className={styles.menu__item}>About</a>
                        <a href='' className={styles.menu__item}>Products</a>
                        <a href='' className={styles.menu__item}>Careers</a>
                    </div>
                    <Search />
                </div>
                <div className={styles.header__contact}>
                    <Button className="button-blue">Contact Us</Button>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Header;