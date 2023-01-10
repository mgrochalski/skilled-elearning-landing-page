import styles from './Header.module.scss';
import Button from "src/compontents/Button";
import Logo from 'src/image/logo-dark.svg';

const Header = () => {
    const darkBlueOnClick = () => {
        console.log('clicked!!!')
    }

    return (
        <header className={styles.header}>
            <img src={Logo} alt='logo'/>
            <Button text='Get Started' color='darkBlue' buttonOnClickHandler={darkBlueOnClick}/>
        </header>
    );
}

export default Header;