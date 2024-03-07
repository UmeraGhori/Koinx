import React, { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => setTrendingCoins(data.coins));
  }, []);

  return (
    <div>
      <div className="mt-8 text-2xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
        Trending Coins
      </div>
      <div className="flex gap-2.5 mt-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex gap-1.5 justify-between py-4 pr-4 rounded-xl border border-solid border-[color:var(--tokeninsight\_com\_en\_coins\_ethereum\_tokenomics\_1440x810\_default-Mercury,#E3E3E3)]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1534957721f2c8cbba4648b94111d1310d51c25d7191aa1f98170a97a278eca2?"
              className="my-auto w-3 aspect-[0.35]"
            />
            <div className="flex flex-col py-0.5">
              <div className="flex gap-0 justify-between">
                <div className="flex gap-2 justify-between text-base text-neutral-800">
                  <img
                    loading="lazy"
                    src={coin.item.large}
                    alt={coin.item.name}
                    className="aspect-square w-[26px]"
                  />
                  <div className="self-start mt-1.5">{coin.item.name}</div>
                </div>
                <div className="grow justify-center px-1 py-1 my-auto text-xs text-emerald-400 rounded-sm bg-emerald-500 bg-opacity-10">
                  {coin.item.price_change_percentage_24}%                  
                </div>
              </div>
              <div className="mt-3 text-xl font-medium leading-6 text-neutral-900">
                {coin.item.data.price}
              </div>
              <img
                loading="lazy"
                srcSet={coin.item.data.sparkline}
                alt={coin.item.name + ' price graph'}
                className="self-center max-w-full aspect-[2.33] w-[140px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
