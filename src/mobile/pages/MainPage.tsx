import Notifications from "../layout/MainPageLayout/Notifications/Notifications";
import FilterBar from "../layout/MainPageLayout/FilterBar/FilterBar";
import Header from "../layout/MainPageLayout/Header/Header";
import Nav from "../layout/MainPageLayout/Nav/Nav";
import styles from './MainPage.module.sass'
import MainSlider from "../layout/MainPageLayout/MainSlider/MainSlider";
import Bayer from "../layout/MainPageLayout/Bayer/Bayer";
import Bestsellers from "../layout/MainPageLayout/Bestsellers/Bestsellers";
import InstallationInstructions from "../layout/MainPageLayout/InstallationInstructions/InstallationInstructions";
import Footer from "../layout/MainPageLayout/Footer/Footer";

export default function MainPage({ }) {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <MainSlider />
                <Nav />
                <FilterBar />
                <Notifications />
                <Bayer />
                <div className={styles.container}>
                    <Bestsellers />
                </div>
                <InstallationInstructions />
            </div>
            <Footer />
        </>
    )
}