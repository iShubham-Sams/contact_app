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