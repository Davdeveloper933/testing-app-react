import styles from './Services.module.scss'
import Button from '../../UI/Button/Button'
import {ReactComponent as ReadMore} from '../../../img/icons/read-more.svg'
import { cardsData } from '../../../data'

const Services = () => {
    return (
        <div className={styles.Services}>
            <div className='container'>
                <div className={styles.Inner}>
                    <div>
                        <h3 className={styles.subtitle}>our services</h3>
                        <h2 className={styles.title}>What we do</h2>
                    </div>
                    <div className={styles.Cards}>
                    {cardsData.map((card, key) => {
                        return (
                        <div className={styles.CardItem}  key={key}>
                            <div className={styles.CardInner}>
                                <div className={styles.cardImage}>
                                    <img src={card.src.default} alt="" />
                                </div>
                                <h2 className={styles.cardTitle}>
                                    {card.title}
                                </h2>
                                <p className={styles.cardContent}>
                                        {card.content}
                                </p>
                                <div className={styles.cardButton}>
                                <Button className={styles.viewmoreButton+" viewmore-button d-flex align-center"}>
                                    Read More
                                    <ReadMore />
                                </Button>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;