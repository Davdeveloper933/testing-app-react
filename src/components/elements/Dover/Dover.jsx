import styles from './Dover.module.scss'
import doverLogo from '../../../img/icons/dover-logo.svg'

const Dover = () => {
    return (
        <div className={styles.Dover}>
            <div className='container'>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <img src={doverLogo} alt="Dover logo" />
                    </div>
                    <div className={styles.right}>
                        <p>
                            Dover Fueling Solutions (DFS), part of Dover Corporation, comprises the product brands of Wayne Fueling Systems, OPW Fuel Management Systems, ClearView, Tokheim, ProGauge and Fairbanks delivers advanced fuel dispensing equipment, electronic systems and payment, automatic tank gauging and wetstock management solutions to customers worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dover;