import styles from './TopBar.module.scss'
import {ReactComponent as Email} from '../../../img/icons/email.svg'
import {ReactComponent as Insta} from '../../../img/icons/insta.svg'
import {ReactComponent as Facebook} from '../../../img/icons/facebook.svg'

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <div className="container">
                <div className={styles.topbar__inner}>
                    <div className={styles.email}>
                        <a href="" className={styles.socialsItem+' d-flex'}>
                            <Email />
                        </a>
                        <span className={styles.topbar__text}>Email address</span>
                    </div>
                    <div className={styles.socials}>
                        <span className={styles.topbar__text}>Turning big ideas into great services!</span>
                        <div className={styles.socials__links}>
                            <a href=""  className={styles.socialsItem}>
                                <Insta />
                            </a>
                            <a href="" className={styles.socialsItem}>
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;