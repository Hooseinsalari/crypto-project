import axios from "axios";

const BACE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"

const getApi = async () => {
    // await axios.get(BACE_URL)
    //     .then(response => console.log(response.data))
    const response = await axios.get(BACE_URL);
    return response.data
}

export {getApi};