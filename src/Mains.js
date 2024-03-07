import React, { useEffect, useState } from 'react';
import { getCoin } from './Api';
import TradingViewWidget from "./components/TradingViewWidget";
import Rank from './components/Ranks';
import Header from './components/Header';
import Price from './components/Price';
import Footer from './components/Footer';


function MyComponent() {
    const [coin, setCoin] = useState(null);
  
    useEffect(() => {
      const fetchCoin = async () => {
        const data = await getCoin();
        setCoin(data);
      };
  
      fetchCoin();
    }, []);
    if (!coin) {
      return <div>Loading...</div>;
    }

  return (
    <>
    <div className="flex flex-col bg-gray-100">
      <Header/>
       <div className="flex flex-col px-14 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-0 self-start pr-5 text-sm whitespace-nowrap">
          <div className="flex gap-3 justify-between py-0.5 pr-1.5 text-slate-600">
            <div className="grow">Cryptocurrencies</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/120fa144f0f32b0ef0ff223db7bd3929f7fc82921f134306e1493a499089f693?"
              className="self-start w-2.5 aspect-square"
            />
          </div>
          <div className="grow font-medium text-slate-900">Bitcoin</div>
        </div>
        <div className="pb-12 mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                <div className="flex flex-col justify-end py-7 pl-6 bg-white rounded-lg max-md:pl-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-20 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex flex-col flex-1 justify-center my-auto font-semibold leading-[120%]">
                      <div className="flex gap-0 justify-between">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="w-9 aspect-[1.12]"
                        />
                        <div className="flex flex-col flex-1 justify-center self-start pl-2 mt-1">
                          <div className="flex gap-2 justify-between">
                            <div className="grow justify-center py-1.5 text-2xl text-slate-900">
                            {coin.name}
                            </div>
                            <div className="grow my-auto text-base text-gray-500">
                            {coin.symbol}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center text-base font-medium leading-5 text-white">
                      <div className="justify-center px-2.5 py-3.5 rounded-lg border border-solid bg-slate-500 border-slate-500">
                        Rank #1
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-10 max-w-full w-[583px] max-md:flex-wrap">
                    <div className="flex flex-col basis-0 text-slate-900">
                      <div className="text-3xl font-semibold leading-10">
                        ${coin.market_data.current_price.usd}
                      </div>
                      <div className="text-base font-medium leading-7">
                        ₹{coin.market_data.current_price.inr}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-start self-start py-px pr-16 font-medium whitespace-nowrap">
                      <div className="flex gap-3 justify-center py-1">
                        <div className="flex gap-2 justify-between px-2.5 py-1.5 text-base text-center text-emerald-500 bg-emerald-50 rounded">
                          <img
                            loading="lazy"
                            src={coin.image.small}
                            className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
                          />
                          <div>{coin.market_data.price_change_percentage_24h}%</div>
                        </div>
                        <div className="grow my-auto text-sm leading-7 text-slate-500">
                          (24H)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 mr-2.5 max-w-full h-px bg-zinc-200 w-[847px]" />
                  <div className="flex gap-5 justify-between pr-9 mt-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex-auto text-base font-semibold leading-5 text-slate-900">
                      Bitcoin Price Chart (USD)
                    </div>
                    <div className="flex gap-3 justify-between items-center py-px text-sm font-medium leading-5 text-gray-500 whitespace-nowrap">
                      <div className="grow self-stretch my-auto">1H</div>
                      <div className="self-stretch">24H</div>
                      <div className="justify-center self-stretch px-2.5 text-blue-700 bg-indigo-100 aspect-[1.84] rounded-[32px]">
                        7D
                      </div>
                      <div className="self-stretch my-auto text-xs leading-5">
                        1M
                      </div>
                      <div className="self-stretch my-auto text-xs leading-5">
                        3M
                      </div>
                      <div className="self-stretch my-auto text-xs leading-5">
                        6M
                      </div>
                      <div className="self-stretch my-auto">1Y</div>
                      <div className="grow self-stretch my-auto">ALL</div>
                    </div>
                  </div>
                  <div className="mt-10 w-full aspect-[2.13] max-md:max-w-full">
                    <TradingViewWidget />
                  </div>
                </div>
                <Price />
                <div className="flex flex-col px-6 pt-7 pb-12 mt-5 bg-white rounded-lg max-md:px-5 max-md:max-w-full">
                  <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
                    Sentiment
                  </div>
                  <div className="flex gap-1.5 justify-between pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="grow">Key Events</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5df1b26288b9b075358355c6de9bbdcfea14843aff5481756f9489aaf39fc4b?"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch px-5 pt-5 pb-10 w-full text-sm leading-5 bg-indigo-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5 max-md:max-w-full">
                          <div className="flex gap-2 justify-between py-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65af558a92e5fa5e48309d4cbe602361ca48bc66829d63eebc7196712ce4031?"
                              className="self-start w-11 aspect-square"
                            />
                            <div className="flex flex-col flex-1">
                              <div className="font-medium text-zinc-900">
                                Lorem ipsum dolor sit amet consectetur. Dui vel
                                quis dignissim mattis enim tincidunt.
                              </div>
                              <div className="mt-2 text-slate-600">
                                Lorem ipsum dolor sit amet consectetur. Ac
                                phasellus risus est faucibus metus quis. Amet
                                sapien quam viverra adipiscing condimentum. Ac
                                consectetur et pretium in a bibendum in. Sed
                                vitae sit nisi viverra natoque lacinia libero
                                enim.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch pt-5 pb-10 pl-5 mx-auto w-full text-sm leading-5 bg-emerald-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5">
                          <div className="flex gap-2 justify-between py-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9cbaad8305734893e92aa1696df0fb017f2463eab9155cc992926558850a29?"
                              className="self-start w-11 aspect-square"
                            />
                            <div className="flex flex-col flex-1">
                              <div className="font-medium text-zinc-900">
                                Lorem ipsum dolor sit amet consectetur. Dui vel
                                quis dignissim mattis enim tincidunt.
                              </div>
                              <div className="mt-2 text-slate-600">
                                Lorem ipsum dolor sit amet consectetur. Ac
                                phasellus risus est faucibus metus quis. Amet
                                sapien quam viverra adipiscing condimentum. Ac
                                consectetur et pretium in a bibendum in. Sed
                                vitae sit nisi viverra <br />
                                in a adipisinc metus quis del
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 justify-between pr-20 mt-8 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="grow">Analyst Estimates</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5df1b26288b9b075358355c6de9bbdcfea14843aff5481756f9489aaf39fc4b?"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center self-stretch px-9 py-8 mx-auto w-full font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 rounded-[59.22px] max-md:px-5 max-md:mt-10">
                          <div className="flex gap-0.5 justify-between py-1.5">
                            <div className="grow text-4xl">76</div>
                            <div className="grow my-auto text-base leading-6">
                              %
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                          <div className="flex gap-2.5 justify-between py-2 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-base leading-6">Buy</div>
                            <div className="my-auto max-w-full h-2 bg-emerald-500 rounded-sm w-[349px]" />
                            <div className="flex-auto text-sm leading-5">
                              76%
                            </div>
                          </div>
                          <div className="flex gap-2.5 py-2 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-base leading-5">Hold</div>
                            <div className="my-auto h-2 rounded-sm bg-neutral-300 w-[33px]" />
                            <div className="flex-auto text-base leading-6 max-md:max-w-full">
                              8%
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between py-2 pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                            <div className="grow text-base leading-5">Sell</div>
                            <div className="flex gap-2.5 justify-between text-base leading-6">
                              <div className="my-auto h-2 bg-red-500 rounded-sm w-[66px]" />
                              <div className="grow">16%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-6 pt-7 mt-5 text-lg font-bold leading-5 bg-white rounded-lg text-slate-900 max-md:px-5 max-md:max-w-full">
                  <div className="text-2xl font-semibold text-slate-900 max-md:max-w-full">
                    About Bitcoin
                  </div>
                  <div className="mt-8 max-md:max-w-full">What is Bitcoin?</div>
                  <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
                    Bitcoin’s price today is US$16,951.82, with a 24-hour
                    trading volume of $19.14 B. BTC is +0.36% in the last 24
                    hours. It is currently -7.70% from its 7-day all-time high
                    of $18,366.66, and 3.40% from its 7-day all-time low of
                    $16,394.75. BTC has a circulating supply of 19.24 M BTC and
                    a max supply of 21 M BTC.
                  </div>
                  <div className="shrink-0 mt-4 h-px border-b border-solid border-b-slate-300 border-b-opacity-60 max-md:max-w-full" />
                  <div className="mt-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                    lobortis tristique pharetra. Diam id et lectus urna et
                    tellus aliquam dictum at. Viverra diam suspendisse enim
                    facilisi diam ut sed. Quam scelerisque fermentum sapien
                    morbi sodales odio sed rhoncus. Ultricies urna volutpat
                    pendisse enim facilisi diam ut sed. Quam scelerisque
                    fermentum sapien morbi sodales odio sed rhoncus. <br />
                    <br />
                    Diam praesent massa dapibus magna aliquam a dictumst
                    volutpat. Egestas vitae pellentesque auctor amet. Nunc
                    sagittis libero adipiscing cursus felis pellentesque
                    interdum. Odio cursus phasellus velit in senectus enim dui.
                    Turpis tristique placerat interdum sed volutpat. Id
                    imperdiet magna eget eros donec cursus nunc. Mauris faucibus
                    diam mi nunc praesent massa turpis a. Integer dignissim
                    augue viverra nulla et quis lobortis phasellus. Integer
                    pellentesque enim convallis ultricies at.
                    <br />
                    <br />
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                    aliquam massa vel convallis duis ac. Mi adipiscing semper
                    scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                    iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                    tincidunt volutpat in eget. Ullamcorper dui
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-12 max-md:mt-5 max-md:max-w-full">
                <div className="flex flex-col items-center px-12 pt-8 pb-12 bg-blue-600 rounded-lg max-md:px-5 max-md:max-w-full">
                  <div className="text-2xl font-bold leading-10 text-center text-white w-[268px]">
                    Get Started with KoinX for FREE
                  </div>
                  <div className="self-stretch mt-3.5 text-sm font-medium leading-6 text-center text-zinc-100">
                    With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax
                    reports.
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a9a9a94706a4828b96c3e4e76606bf3b05128e4de8b8d387a7d9c9ff3d9a7a6?"
                    className="mt-10 max-w-full aspect-[1.08] w-[178px]"
                  />
                  <div className="flex flex-col justify-center px-6 py-2.5 mt-5 max-w-full text-base font-semibold leading-7 whitespace-nowrap bg-white rounded-lg text-slate-900 w-[238px] max-md:px-5">
                    <div className="flex gap-1.5 justify-between">
                      <div className="grow">Get Started for FREE</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78dc5afa5d7dfdc8c9e6cbca0331dad3e5fd80b43458ca9467625ec7cc34bc10?"
                        className="my-auto w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <Rank />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      </>
  );
}

export default MyComponent;
