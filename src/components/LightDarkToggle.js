import React from 'react';

const LightDarkToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className={`${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } p-2 rounded-md shadow-md`}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default LightDarkToggle;
