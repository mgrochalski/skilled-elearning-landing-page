import styles from './MainPanel.module.scss';
import Button from "src/compontents/Button";
import heroImg from "src/image/image-hero-desktop.png";
import heroTabletImg from "src/image/image-hero-tablet.png";
import heroPhoneImg from "src/image/image-hero-mobile.png";

const MainPanel = () => {
    const buttonClicked = () => {
        console.log('clicked!!!');
    }

    return (
        <div className={styles.main}>
            <div className={styles.cta}>
                <p className={styles.title}>Maximize skill, minimize budget</p>
                <p className={styles.description}>Our modern courses across a range of in-demand skills will give you
                    the
                    knowledge you need to live the life you want.</p>
                <Button text='Get Started' color='pinkOrange' buttonOnClickHandler={buttonClicked}/>
            </div>
            <picture>
                <source media="(max-width: 768px)" srcSet={heroPhoneImg}/>
                <source media="(max-width: 1150px)" srcSet={heroTabletImg}/>
                <img src={heroImg} className={styles.img} alt="Hero"/>
            </picture>
        </div>
    )
}


export default MainPanel;