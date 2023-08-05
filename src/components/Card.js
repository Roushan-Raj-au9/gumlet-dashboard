import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md card">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
      <p className="text-2xl font-bold mt-2 text-blue-600 dark:text-blue-400">{value}</p>
    </div>
  );
};

export default Card;
