import Map from "../Components/Map";
import SideBar from "../Components/SideBar";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
