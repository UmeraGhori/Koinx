import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const getTrendingCoins = async () => {
  const response = await axios.get(`${API_URL}/search/trending`);
  return response.data;
};

export async function getCoin() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
    const data = await response.json();
    return data;
  }