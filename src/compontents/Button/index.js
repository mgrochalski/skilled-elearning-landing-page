import styles from './Button.module.scss';

const ButtonFactory = ({text, color, buttonOnClickHandler}) => (
 <button className={`${styles['btn--' + color]}`} onClick={buttonOnClickHandler}>{text}</button>
);

export default ButtonFactory;