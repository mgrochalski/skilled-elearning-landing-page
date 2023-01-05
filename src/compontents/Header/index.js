import styles from './Header.module.scss';
import ButtonFactory from "../Button";
import Logo from '../../image/logo-dark.svg';

const Header = () => {
    const darkBlueOnClick = () => {
        console.log('clicked!!!')
    }

    return (
        <header className={styles.header}>
            <img src={Logo} alt='logo'/>
            <ButtonFactory text='Get Started' color='darkBlue' buttonOnClickHandler={darkBlueOnClick}/>
        </header>
    );
}

export default Header;