import React, { useState, useEffect } from 'react';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Legend } from "@devexpress/dx-react-chart-material-ui";
import { getCovidInfo } from '../../api/covid';
import { ICovidStatistic } from '../../models/ICovidInfo';
import { Paper } from '@material-ui/core';
import { Stack } from '@devexpress/dx-react-chart';

const Covid = () => {
  const [covidInfoStatistic, setCovidInfoStatistic] = useState([] as ICovidStatistic[])

  const fetchData = async () => {
    const info = await getCovidInfo();
    setCovidInfoStatistic(info.covid19Stats);
  }

  useEffect(() => { fetchData() }, []);

  const data = [] as ICovidStatistic[]

  const covidStatistic = covidInfoStatistic.filter(e => e.confirmed > 3000);

  for (let i = 0; i < covidStatistic.length; i++) {
    const element = covidStatistic[i];
    const existCountry = data.find(u => u.country === element.country);
    if (!existCountry) {
      data.push(element)
    }
    else {
      existCountry.confirmed += element.confirmed;
      existCountry.deaths += element.deaths;
      existCountry.recovered += element.recovered;
    }
  }

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