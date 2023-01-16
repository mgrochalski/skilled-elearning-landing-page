import styles from './App.module.scss';
import Header from "src/compontents/Header";
import MainPanel from "src/compontents/MainPanel";
import Offer from "src/compontents/Offer";
import Footer from "src/compontents/Footer";

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
