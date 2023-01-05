import styles from './Offer.module.scss';
import Card from "../Card";
import AnimationImg from '../../image/icon-animation.svg';
import Design from '../../image/icon-design.svg';
import Photography from '../../image/icon-photography.svg';
import Crypto from '../../image/icon-crypto.svg';
import Business from '../../image/icon-business.svg';
import ColoredCard from "../ColoredCard";

const Offer = () => {

    const offers = [
        {
            title: "Animation",
            description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
            img: AnimationImg,
        },
        {
            title: "Design",
            description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
            img: Design,
        },
        {
            title: "Photography",
            description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
            img: Photography,
        },
        {
            title: "Crypto",
            description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
            img: Crypto,
        },
        {
            title: "Business",
            description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
            img: Business,
        },
    ];

    const offerList = offers.map((offer) => {
     return   <Card
            key={offer.title}
            title={offer.title}
            description={offer.description}
            img={offer.img}
        />
    });
    return (
        <div className={styles.main}>
            <div className={styles.box} >
                <ColoredCard title="Check out our most popular courses!"/>
                {offerList}
            </div>
        </div>
    );
};

export default Offer;