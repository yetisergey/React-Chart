import React from 'react';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Legend } from "@devexpress/dx-react-chart-material-ui";
import { Paper } from '@material-ui/core';
import { Stack } from '@devexpress/dx-react-chart';
import { useCovidHook } from './useCovidHook';

const Covid = () => {
  const data = useCovidHook();
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries
          name="confirmed"
          valueField="confirmed"
          argumentField="country"
          color="#1abc9c" />
        <BarSeries
          name="recovered"
          valueField="recovered"
          argumentField="country"
          color="#3498db" />
        <BarSeries
          name="deaths"
          valueField="deaths"
          argumentField="country"
          color="#e67e22" />
        <Legend position="bottom" />
        <Stack />
      </Chart>
    </Paper>
  )

};

export default Covid;