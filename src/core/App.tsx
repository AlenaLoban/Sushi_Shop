import Routing from './routing/Routing';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const closeAllWindows = () => {
      const openWindows = window.open('http://localhost:5173/Sushi_Shop/#/catalog/6', '');
      openWindows?.close();
    };

    window.addEventListener('beforeunload', closeAllWindows);

    return () => {
      window.removeEventListener('beforeunload', closeAllWindows);
    };
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
