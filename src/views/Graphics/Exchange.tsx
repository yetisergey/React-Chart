import React, { useState, useEffect } from 'react';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Legend } from "@devexpress/dx-react-chart-material-ui";
import { getExchangeRate } from '../../api/exchange';
import { IExchangeRates } from '../../types/IExchangeRates';
import { Paper } from '@material-ui/core';
import { Stack, ScaleObject } from '@devexpress/dx-react-chart';

const Exchange = () => {
    const [exchangeRate, setExchangeRate] = useState<IExchangeRates>({})

    const fetchData = async () => {
        const rate = await getExchangeRate();
        setExchangeRate(rate);
    }

    useEffect(() => { fetchData() }, []);

    const tickFormat = (obj: ScaleObject) => (tick: string) => parseFloat(tick).toFixed(2);

    return (
        <Paper>
            {exchangeRate.rates &&
                <Chart data={[exchangeRate.rates]}>
                    <ArgumentAxis
                        tickFormat={tickFormat} />
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