const Price = () => {
  return (
    <>
    <div className="flex gap-5 justify-between items-center pr-5 mt-5 text-base font-medium tracking-normal border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)] text-zinc-700 max-md:flex-wrap max-md:max-w-full">
    <div className="justify-center self-stretch py-4 font-semibold text-blue-700 whitespace-nowrap border-solid aspect-[1.52] border-b-[3px] border-b-blue-600">
      Overview
    </div>
    <div className="flex-auto self-stretch my-auto">
      Fundamentals
    </div>
    <div className="flex-auto self-stretch my-auto">
      News Insights
    </div>
    <div className="self-stretch my-auto">Sentiments</div>
    <div className="self-stretch my-auto">Team</div>
    <div className="self-stretch my-auto">Technicals</div>
    <div className="flex-auto self-stretch my-auto">
      Tokenomics
    </div>
  </div>
  <div className="flex flex-col px-6 pt-7 pb-12 mt-5 bg-white rounded-lg max-md:px-5 max-md:max-w-full">
    <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
      Performance
    </div>
    <div className="flex gap-2 px-px mt-8 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col pt-1.5 pr-9 pb-3.5 text-gray-700 whitespace-nowrap basis-0">
        <div className="text-sm leading-5">Today’s Low</div>
        <div className="mt-2.5 text-base font-medium leading-6">
        46,637.83
        </div>
      </div>
      <div className="flex flex-col flex-1 items-end self-end mt-8 max-md:max-w-full">
        <div className="flex flex-col justify-center self-stretch rounded-lg bg-neutral-900 bg-opacity-30 max-md:max-w-full">
          <div className="shrink-0 rounded-xl h-[5px] max-md:max-w-full" />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16904a622b24d452bd4fd2651f665f0959ed0a4b5136f1ccf90d3f941cf670b1?"
          className="mr-32 w-3 aspect-[1.49] max-md:mr-2.5"
        />
        <div className="mt-2 mr-24 text-sm leading-5 text-gray-700 max-md:mr-2.5">
          $48,637.83
        </div>
      </div>
      <div className="flex flex-col pt-1.5 pb-3.5 pl-8 text-right text-gray-700 whitespace-nowrap basis-0">
        <div className="text-sm leading-5">Today’s High</div>
        <div className="mt-2.5 text-base font-medium leading-6">
        49,637.83
        </div>
      </div>
    </div>
    <div className="flex gap-2 px-px mt-4 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col pt-1.5 pr-12 pb-3.5 text-gray-700 whitespace-nowrap basis-0">
        <div className="text-sm leading-5">52W Low</div>
        <div className="mt-2.5 text-base font-medium leading-6">
          16,930.22
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center my-auto rounded-lg bg-neutral-900 bg-opacity-30 max-md:max-w-full">
        <div className="shrink-0 rounded-xl h-[5px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col pt-1.5 pb-3.5 pl-9 text-right text-gray-700 whitespace-nowrap basis-0">
        <div className="self-start ml-3.5 text-sm leading-5 max-md:ml-2.5">
          52W High
        </div>
        <div className="mt-2.5 text-base font-medium leading-6">
          49,743.83
        </div>
      </div>
    </div>
    <div className="flex gap-1.5 self-start pr-20 mt-10 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="grow">Fundamentals</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e89bd96b8bfee4dc6cddf4345a63c7ac22d259873b4123a795cbff1fcf8292c0?"
        className="w-5 aspect-square"
      />
    </div>
    <div className="mt-4 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pr-10 font-medium max-md:mt-10">
            <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="text-sm leading-5 text-slate-500">
                Bitcoin Price
              </div>
              <div className="text-sm leading-5 text-right text-gray-900">
                $16,815.46
              </div>
            </div>
            <div className="flex gap-0 justify-between py-1 whitespace-nowrap border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="grow justify-center py-3.5 pr-14 text-sm leading-5 border-0 border-solid border-zinc-200 text-slate-500">
                24h Low / 24h High
              </div>
              <div className="grow justify-center py-3.5 pr-3 pl-12 text-sm leading-5 text-right text-gray-900 border-0 border-solid border-zinc-200 max-md:pl-5">
                $16,382.07 / $16,874.12
              </div>
            </div>
            <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="flex-auto text-sm leading-5 text-slate-500">
                7d Low / 7d High
              </div>
              <div className="flex-auto text-sm leading-5 text-right text-gray-900">
                $16,382.07 / $16,874.12
              </div>
            </div>
            <div className="flex gap-5 justify-between py-4 text-sm leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="flex-auto text-slate-500">
                Trading Volume
              </div>
              <div className="flex-auto text-right text-gray-900">
                $23,249,202,782
              </div>
            </div>
            <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="flex-auto text-sm leading-5 text-slate-500">
                Market Cap Rank
              </div>
              <div className="text-sm leading-5 text-right text-gray-900">
                #1
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <div className="flex gap-5 justify-between py-4 text-sm font-medium leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="text-slate-500">Market Cap</div>
              <div className="flex-auto text-right text-gray-900">
                $323,507,290,047
              </div>
            </div>
            <div className="flex gap-5 justify-between py-4 text-sm font-medium leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="flex-auto text-slate-500">
                Market Cap Dominance
              </div>
              <div className="text-right text-gray-900">
                38.343%
              </div>
            </div>
            <div className="flex gap-5 justify-between py-4 font-medium border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="flex-auto text-sm leading-5 text-slate-500">
                Volume / Market Cap
              </div>
              <div className="text-sm leading-5 text-right text-gray-900">
                0.0718
              </div>
            </div>
            <div className="flex gap-5 justify-between py-2.5 pr-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="my-auto text-sm font-medium leading-5 text-slate-500">
                All-Time High
              </div>
              <div className="flex flex-col leading-5 text-right whitespace-nowrap">
                <div className="text-sm font-medium text-red-500">
                  <span className="">$69,044.77 </span>
                  <span className="text-red-500">-75.6%</span>
                </div>
                <div className="mt-1 text-xs text-gray-900">
                  Nov 10, 2021 (about 1 year)
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between py-2 pr-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
              <div className="my-auto text-sm font-medium leading-5 text-slate-500">
                All-Time Low
              </div>
              <div className="flex flex-col leading-5 text-right whitespace-nowrap">
                <div className="text-sm font-medium text-emerald-500">
                  <span className="">$67.81 </span>
                  <span className="text-emerald-500">
                    24729.1%
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-900">
                  Jul 06, 2013 (over 9 years)
                </div>
              </div>
            </div> 
</div> 
        </div> 
      </div>
    </div> 
  </div> 
  </>
  );
};

export default Price;