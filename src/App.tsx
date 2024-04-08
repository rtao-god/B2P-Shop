import styles from './App.module.sass';
import './css/global/index.sass'
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';

const App: React.FC = () => {
  const isMobile = window.innerWidth < 720;

  return (
    <div className={styles.App}>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;
