

import { useState, useEffect } from 'react';
import { ICovidStatistic } from '../../types/ICovidStatistic';
import { getCovidInfo } from '../../api/covid';

const useCovidHook = () => {
    const [covidInfoStatistic, setCovidInfoStatistic] = useState<ICovidStatistic[]>([])

    const fetchData = async () => {
        const info = await getCovidInfo();
        setCovidInfoStatistic(info.covid19Stats);
    }

    useEffect(() => { fetchData() }, []);

    const data: ICovidStatistic[] = [];

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
    return data;
}
export default useCovidHook;