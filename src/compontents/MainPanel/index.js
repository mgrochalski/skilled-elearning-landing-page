import styles from './MainPanel.module.scss';
import Button from "src/compontents/Button";
import heroImg from "src/image/image-hero-desktop.png";

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
            <img src={heroImg} className={styles.img} alt="Hero"/>
        </div>
    )
}


export default MainPanel;