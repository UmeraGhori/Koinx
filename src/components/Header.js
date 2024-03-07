const Header =()=> {
  return (
    <div className="flex gap-5 justify-between px-14 py-px w-full text-base font-semibold tracking-normal whitespace-nowrap bg-white border-b border-solid shadow-sm border-b-zinc-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d10a1a3ca08ec6f7aa35e9de9b0f44429d6dab4873e7bd6a2e55f789080df7?"
          className="my-auto w-24 aspect-[4]"
        />
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center pl-20 text-slate-900 max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center self-stretch py-8 bg-white">
              Crypto Taxes
            </div>
            <div className="grow justify-center self-stretch py-7 my-auto bg-white">
              Free Tools
            </div>
            <div className="grow justify-center self-stretch py-7 my-auto bg-white">
              Resource Center
            </div>
          </div>
          <div className="justify-center px-6 py-3 my-auto text-white rounded-lg bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)] max-md:px-5">
            Get Started
          </div>
        </div>
      </div>
  )
}
export default Header;