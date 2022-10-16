import style from './Contacts.module.scss'
import Map from '../Map/Map';
import Form from '../Form/Form';

const Contacts = () => {
    return (
        <div className={style.Contacts}>
            <div className='container'>
                <div className={style.Inner}>
                    <div>
                        <h3 className={style.subtitle}>Keep in touch</h3>
                        <h2 className={style.title}>Contact Us</h2>
                    </div>
                    <div className={style.formWrapper}>
                        <div className={style.form}>
                            <Form />
                        </div>
                        <div className={style.map}>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;