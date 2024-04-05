import Notifications from "@components/layout/Notifications/Notifications";
import FilterBar from "@components/layout/FilterBar/FilterBar";
import Header from "@components/layout/Header/Header";
import Nav from "@components/layout/Nav/Nav";
import styles from './MainPage.module.sass'
import MainSlider from "@/components/layout/MainSlider/MainSlider";
import Bayer from "@/components/layout/Bayer/Bayer";
import Bestsellers from "@/components/layout/Bestsellers/Bestsellers";
import InstallationInstructions from "@/components/layout/InstallationInstructions/InstallationInstructions";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Nav />
        <FilterBar />
        <Notifications />
      </div>
      <MainSlider />
      <div className={styles.container}>
        <Bayer />
        <Bestsellers />
        <InstallationInstructions />
      </div>
    </div>
  )
}
