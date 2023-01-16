import styles from './Card.module.scss';

const Card = ({title, description, img}) => (
    <div className={styles.main}>
        <div className={styles.box}>
            {img && <img src={img} className={styles.img} alt='logo'/> }
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <a href="\" className={styles.url}>Get Started</a>
        </div>
    </div>
);

export default Card;