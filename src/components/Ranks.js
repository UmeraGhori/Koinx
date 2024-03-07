import React, { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => {
        // Sort the coins based on market_cap_rank
        const sortedCoins = data.coins.sort((a, b) => a.item.market_cap_rank - b.item.market_cap_rank);
        // Select the top 3 coins
        const topThreeCoins = sortedCoins.slice(0, 3);
        setTrendingCoins(topThreeCoins);
      });
  }, []);

  return (
    <div className="flex flex-col p-6 mt-5 text-base font-medium bg-white rounded-lg max-md:px-5 max-md:max-w-full">
      <div className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </div>
      <div className="mt-6 w-full">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex flex-col mb-4">
            <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
              <img
                loading="lazy"
                src={coin.item.large}
                alt={coin.item.name}
                className="w-6 aspect-square"
              />
              <div className="grow">{coin.item.name}({coin.item.symbol})</div>
            </div>
            <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6861c7faf3abfca20273e8ee75cc1e57579201cf1450a7d022f2417b8c825062?"
                className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
              />
              <div>{coin.item.data.price_change_percentage_24h.aud}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
