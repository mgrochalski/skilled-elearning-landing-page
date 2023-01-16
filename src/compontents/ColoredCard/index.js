import styles from './ColordedCard.module.scss';

const ColoredCard = ({title}) => (
    <div className={styles.main}>
        <p className={styles.title}>{title}</p>
    </div>
);

export default ColoredCard;