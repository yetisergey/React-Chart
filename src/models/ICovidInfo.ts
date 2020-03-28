export interface ICovidInfo {
    covid19Stats: ICovidStatistic[]
}

export interface ICovidStatistic {
    city: string,
    province: string,
    country: string,
    keyId: string,
    confirmed: number,
    deaths: number,
    recovered: number
}