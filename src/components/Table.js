import React from 'react';

const Table = ({ data }) => {
  let topAssets = data?.top_assets
  const convertSecondsToHoursMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    return { hours, minutes };
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Top Asset Table</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Collection Name</th>
            <th className="px-4 py-2">Asset ID</th>
            <th className="px-4 py-2">Stream Duration</th>
          </tr>
        </thead>
        <tbody>
          {topAssets && topAssets.length > 0 && topAssets.map((item) => (
            <tr key={item?.asset_id}>
              <td className="border px-4 py-2">{item?.collection_name}</td>
              <td className="border px-4 py-2">{item?.asset_id}</td>
              {/* <td className="border px-4 py-2">{item?.units}</td> */}
              <td className="border px-4 py-2">
              {convertSecondsToHoursMinutes(item.units).hours}{' '}Hr{' '}
              {convertSecondsToHoursMinutes(item.units).minutes}{' '}Min

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
