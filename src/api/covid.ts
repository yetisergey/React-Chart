import { ICovidInfo } from "../types/ICovidInfo";

export const getCovidInfo = async (): Promise<ICovidInfo> => {
    if (!process.env.REACT_APP_API_KEY) {
        throw new Error("empty REACT_APP_API_KEY");
    }

    const response = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    });
    const result = await response.json();
    return result.data;
}
