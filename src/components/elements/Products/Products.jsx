import styles from './Products.module.scss'
import { productData } from '../../../data'
import Button from '../../UI/Button/Button'
import {ReactComponent as ViewMore} from '../../../img/icons/view-more.svg'

const Products = () => {
    return (
        <div className={styles.Products}>
            <div className='container'>
                <div className={styles.Inner}>
                    <div>
                                <h3 className={styles.subtitle}>products</h3>
                                <h2 className={styles.title}>Recommended for You</h2>
                    </div>
                </div>    
                <div className='d-flex justify-center'>
                <div className={styles.Cards}>
                    {productData.map((product, key) => {
                            return (
                            <div className={styles.CardItem}  key={key}>
                                <div className={styles.CardInner}>
                                    <div className={styles.cardImage}>
                                        <img src={product.src} alt="" />
                                    </div>
                                    <h2 className={styles.cardTitle}>
                                        {product.title}
                                    </h2>
                                    <div className={styles.cardButton}>
                                    <Button className="viewmore-button d-flex align-center">
                                        view more
                                        <ViewMore />
                                    </Button>
                                    </div>
                                </div>
                            </div>
                            )
                            })}
                    </div>
                </div>
                <div className={styles.seeMore+' d-flex justify-center'}>
                    <Button className="button-blue">See More</Button>
                </div>
            </div>
        </div>
    )
}

export default Products;