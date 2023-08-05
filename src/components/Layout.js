import React, { useState } from 'react';
import Card from './Card';
import Chart from './Chart';
import Filter from './Filter';
import Table from './Table';

const Layout = ({ data }) => {
  const [filter, setFilter] = useState(7);
  const filteredDataBandwidthConsumption = data?.bandwidth_consumption?.slice(-filter);
  const filteredDataAssetDuration = data?.asset_duration?.slice(-filter);
  const filteredDataStorageUnit = data?.storage_unit?.slice(-filter);

  const totalStreamingUsage = filteredDataBandwidthConsumption.reduce((sum, item) => sum + item.units, 0);
  const totalTranscodingUsage = filteredDataAssetDuration.reduce((sum, item) => sum + item.units, 0);
  const totalStorageUsage = filteredDataStorageUnit.reduce((sum, item) => sum + item.units, 0);

  const streamingUsageData = filteredDataBandwidthConsumption.map((item) => item.units);
  const transcodingUsageData = filteredDataAssetDuration.map((item) => item.units);
  const storageUsageData = filteredDataStorageUnit.map((item) => item.units);
  const labels = filteredDataBandwidthConsumption.map((item) => new Date(item.timestamp * 1000).toLocaleDateString());

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card title="Total Streaming Usage" value={`${totalStreamingUsage} sec`} />
        <Card title="Total Transcoding Usage" value={`${totalTranscodingUsage} sec`} />
        <Card title="Total Storage Usage" value={`${totalStorageUsage} sec`} />
      </div>

      <Filter onChange={(e) => setFilter(parseInt(e.target.value))} />

      {/* <div className="grid grid-cols-1 gap-4 mt-4">
        <Chart data={streamingUsageData} labels={labels} />
        <Chart data={transcodingUsageData} labels={labels} />
        <Chart data={storageUsageData} labels={labels} />
      </div>

      <Table data={data} /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Chart data={streamingUsageData} labels={labels} />
        </div>
        <div>
          <Chart data={transcodingUsageData} labels={labels} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <Chart data={storageUsageData} labels={labels} />
        </div>
        <div>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
