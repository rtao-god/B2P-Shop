import React, { useState, useEffect, Suspense } from 'react';
import './css/global/index.sass';

const Desktop = React.lazy(() => import('./desktop/Desktop'));
const Mobile = React.lazy(() => import('./mobile/Mobile'));

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Загрузка...</div>}>
        {isMobile ? <Mobile /> : <Desktop />}
      </Suspense>
    </div>
  );
};

export default App;
