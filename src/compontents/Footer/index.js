import styles from './Footer.module.scss';
import ButtonFactory from "../Button";
import logo from '../../image/logo-light.svg';

const Footer = () => {
    const buttonClicked = () => {
        console.log('clicked!!!');
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <img src={logo} alt='skilled'/>
                <ButtonFactory text='Get Started' color='pinkPurple' buttonOnClickHandler={buttonClicked}/>
            </div>
        </div>
    );
};

export default Footer;