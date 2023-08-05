import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import LightDarkToggle from './components/LightDarkToggle';
import data from './data.json';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen ${theme === 'dark'? 'dark':'light'}`}>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Video Transcoding Dashboard</h1>
        <LightDarkToggle theme={theme} toggleTheme={toggleTheme} />
        <Layout data={data} />
      </div>
    </div>
  );
}

export default App;
