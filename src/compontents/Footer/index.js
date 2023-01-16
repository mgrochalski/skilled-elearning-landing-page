import styles from './Footer.module.scss';
import Button from "src/compontents/Button";
import logo from 'src/image/logo-light.svg';
import {useCallback} from "react";

const Footer = () => {
    const buttonClicked = useCallback(() => {
        console.log('clicked!!!');
    });

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <img src={logo} alt='skilled'/>
                <Button text='Get Started' color='pinkPurple' buttonOnClickHandler={buttonClicked}/>
            </div>
        </div>
    );
};

export default Footer;