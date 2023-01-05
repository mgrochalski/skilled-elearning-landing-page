import styles from './App.module.scss';
import Header from "./compontents/Header";
import MainPanel from "./compontents/MainPanel";
import Offer from "./compontents/Offer";
import Footer from "./compontents/Footer";

function App() {

    return (
        <div className="App">
            <div className={styles.content}>
                <Header/>
                <MainPanel />
            </div>
            <Offer />
            <Footer />
        </div>
    );
}

export default App;
