import style from './Form.module.scss'
import person from '../../../img/icons/person.svg'
import {ReactComponent as Email} from '../../../img/icons/email.svg'
import phone from '../../../img/icons/phone.svg'
import Button from '../../UI/Button/Button';

const Form = () => {
    return (
        <div className={style.form}>
        <div className={style.row}>
                <div className={style.formGroup}>
                    <h4 className={style.label}>First Name</h4>
                    <div className={style.inputBlock}>
                        <input type="text" placeholder="Type here..." />
                        <div className={style.inputIcon}>
                            <img src={person} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.formGroup}>
                    <h4 className={style.label}>Last Name</h4>
                    <div className={style.inputBlock}>
                        <input type="text" placeholder="Type here..." />
                        <div className={style.inputIcon}>
                            <img src={person} alt="" />
                        </div>
                    </div>
                </div>
        </div>
        <div className={style.row}>
            <div className={style.formGroup}>
                <h4 className={style.label}>Email Address</h4>
                <div className={style.inputBlock}>
                    <input type="text" placeholder="Type here..." />
                    <div className={style.inputIcon}>
                        <Email />
                    </div>
                </div>
            </div>
            <div className={style.formGroup}>
                <h4 className={style.label}>Phone number</h4>
                <div className={style.inputBlock}>
                    <input type="text" placeholder="Type here..." />
                    <div className={style.inputIcon}>
                        <img src={phone} alt="" />
                    </div>
                </div>
            </div>
        </div>    
        <div className={style.formGroup}>
            <h4 className={style.label}>Text Area</h4>
            <div className={style.inputBlock}>
                <textarea type="text" placeholder="Type here..." />
            </div>
        </div>
        <div>
            <Button className="button-blue">Send</Button>
        </div>
    </div>
    )
}

export default Form;