import styles from './AboutUs.module.scss'
import Button from '../../UI/Button/Button'
import aboutCompany from '../../../img/images/about-company.jpg'
import {ReactComponent as ViewMore} from '../../../img/icons/view-more.svg'

const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className='container'>
                <div className='d-flex justify-center'>
                <div className={styles.AboutUs__inner+' d-flex align-center space-between'}>
                    <div className={styles.leftBlock}>
                        <h3 className={styles.subtitle}>About Us</h3>
                        <h2 className={styles.title}>Company</h2>
                        <p className={styles.text}>
                        The company has innovate and skilled approach 
to meet all customer needs which makes it leading and reliable in petroleum market of Liberia.<br></br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu-ismod tincidunt ut laoreet dolore magna ali-quam erat volutpat. Ut wisi enim ad.  
                        </p>
                        <Button className="viewmore-button d-flex align-center">
                            view more
                            <ViewMore />
                        </Button>
                    </div>
                    <div className={styles.rightBlock}>
                        <img src={aboutCompany} alt="about us" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;