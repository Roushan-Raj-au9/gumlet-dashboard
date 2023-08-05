import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-white">Filter Data:</label>
      <select
        className="mt-1 block w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        onChange={onChange}
      >
        <option value="7">Last 7 Days</option>
        <option value="14">Last 14 Days</option>
        <option value="30">Last 30 Days</option>
      </select>
    </div>
  );
};

export default Filter;
