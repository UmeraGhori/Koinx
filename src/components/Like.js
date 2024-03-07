import React, { useState, useEffect } from 'react';

const Like = () => {
  const [randomCoins, setRandomCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => {
        // Select 6 random coin data
        const randomIndexes = [];
        while (randomIndexes.length < 6) {
          const randomIndex = Math.floor(Math.random() * data.coins.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
        const randomCoinsData = randomIndexes.map((index) => data.coins[index]);
        setRandomCoins(randomCoinsData);
      });
  }, []);

  return (
    <div>
      <div className="mt-5 text-2xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
        You May Also Like
      </div>
      <div className="flex gap-2.5 mt-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        {randomCoins.map((randomCoin) => (
          <div key={randomCoin.item.id} className="flex gap-1.5 justify-between py-4 pr-4 rounded-xl border border-solid border-[color:var(--tokeninsight\_com\_en\_coins\_ethereum\_tokenomics\_1440x810\_default-Mercury,#E3E3E3)]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce6ba3065b2a0003821ef21032260cfbdaa869ea7efdef44cdd479f95a5b5722?"
              className="my-auto w-3 aspect-[0.35]"
            />
            <div className="flex flex-col py-0.5">
              <div className="flex gap-0 justify-between">
                <div className="flex gap-2 justify-between text-base text-neutral-800">
                  <img
                    loading="lazy"
                    src={randomCoin.item.large}
                    alt={randomCoin.item.name}
                    className="aspect-square w-[26px]"
                  />
                  <div className="self-start mt-1.5">{randomCoin.item.name}</div>
                </div>
                <div className="grow justify-center px-1 py-1 my-auto text-xs text-emerald-400 rounded-sm bg-emerald-500 bg-opacity-10">
                  {randomCoin.item.price_change_percentage_24h}%
                </div>
              </div>
              <div className="mt-3 text-xl font-medium leading-6 text-neutral-900">
                {randomCoin.item.data.price}
              </div>
              <img
                loading="lazy"
                src={randomCoin.item.data.sparkline}
                alt={randomCoin.item.name + ' price graph'}
                className="self-center max-w-full aspect-[2.33] w-[140px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
