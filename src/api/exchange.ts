import { IExchangeRate } from "../models/IExchangeRate";

export const getExchangeRate = async () => {
    if (!process.env.REACT_APP_API_KEY) {
        throw new Error("empty REACT_APP_API_KEY");
    }

    const response = await fetch("https://currencyscoop.p.rapidapi.com/latest", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currencyscoop.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    })
    const result = await response.json()
    return result.response as IExchangeRate;
}