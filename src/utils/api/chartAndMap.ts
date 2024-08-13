import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export const getChartData = async () => {
    try {
        const { data } = await axiosInstance.get('/historical/all?lastdays=all')
        return data as Chart
    } catch (error) {
        throw error
    }
}

type Chart = {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
}
export const getWorldWidData = async () => {
    const { data } = await axiosInstance.get('/all')
    return data as WorldWidData
}
type WorldWidData = {
    "updated": number,
    "cases": number,
    "todayCases": number,
    "deaths": number,
    "todayDeaths": number,
    "recovered": number,
    "todayRecovered": number,
    "active": number,
    "critical": number,
    "casesPerOneMillion": number,
    "deathsPerOneMillion": number,
    "tests": number,
    "testsPerOneMillion": number,
    "population": number,
    "oneCasePerPeople": number,
    "oneDeathPerPeople": number,
    "oneTestPerPeople": number,
    "activePerOneMillion": number,
    "recoveredPerOneMillion": number,
    "criticalPerOneMillion": number,
    "affectedCountries": number
}

export const getMapData = async () => {
    const { data } = await axiosInstance.get('/countries')
    return data as Map[]
}
export interface Map {
    updated: number;
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: Continent;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

export enum Continent {
    Africa = "Africa",
    Asia = "Asia",
    AustraliaOceania = "Australia-Oceania",
    Empty = "",
    Europe = "Europe",
    NorthAmerica = "North America",
    SouthAmerica = "South America",
}

export interface CountryInfo {
    _id: number | null;
    iso2: null | string;
    iso3: null | string;
    lat: number;
    long: number;
    flag: string;
}
