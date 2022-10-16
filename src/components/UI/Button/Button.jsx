import styles from './Button.module.scss'

const Button = ({children,className, cb}) => {
    return (
        <button onClick={cb} className={className}>
            <div>{children}</div>
        </button>
    );
}

export default Button;