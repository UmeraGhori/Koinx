import Like from "./Like";
import TrendingCoins from "./TrendingCoins";
const Footer = () => {
    return (
        <div className="flex flex-col pb-12 mt-14 w-full bg-white max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-16 pt-12 pb-8 mb-4 w-full bg-white max-md:px-5 max-md:max-w-full">
          <Like />
          <TrendingCoins />
        </div>
      </div>
    )
}
export default Footer;