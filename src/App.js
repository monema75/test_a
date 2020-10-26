import React, { useEffect, useState } from 'react';

import Sections from './components/Sections';
import Logo from './components/Logo';

const DATA_PATH = './data.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(DATA_PATH);
        let data = await res.json();
        setData(data.items);
      } catch {
        //TODO: Show Error
      }
    }

    fetchData();
  }, []);

  const getRenderedData = () => {
    if (!data.length) return;

    return <Sections items={data} />
  }

  return (
    <div className="App" style={{ perspectiveOrigin: 'center center' }}>
      <Logo />
      {getRenderedData()}
    </div>
  );
}

export default App;
