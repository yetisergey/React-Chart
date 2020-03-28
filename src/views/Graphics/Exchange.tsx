import React, { useState, useEffect } from 'react';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Legend } from "@devexpress/dx-react-chart-material-ui";
import { getExchangeRate } from '../../api/exchange';
import { IExchangeRate } from '../../models/IExchangeRate';
import { Paper } from '@material-ui/core';
import { Stack, ScaleObject } from '@devexpress/dx-react-chart';

const Exchange = () => {
    const [exchangeRate, setExchangeRate] = useState({} as IExchangeRate)

    const fetchData = async () => {
        const rate = await getExchangeRate();
        setExchangeRate(rate);
    }

    useEffect(() => { fetchData() }, []);

    const format = (obj: ScaleObject) => (tick: string) => parseFloat(tick).toFixed(2);

    return (
        <Paper>
            {exchangeRate.rates &&
                <Chart data={[exchangeRate.rates]}>
                    <ArgumentAxis
                        tickFormat={format} />
                    <ValueAxis />
                    <BarSeries
                        name="RUB"
                        valueField="RUB"
                        argumentField="RUB"
                        color="#F44336" />
                    <Legend position="bottom" />
                    <Stack />
                </Chart>}
        </Paper>
    )
};

export default Exchange;