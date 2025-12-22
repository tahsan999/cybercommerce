import CategoryConatainer from "./components/category/CategoryConatainer";
import CategorySlide from "./components/CategorySlide/CategorySlide";
import DiscountProduct from "./components/DiscountProduct/DiscountProduct";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import MixProduct from "./components/MixProduct/MixProduct";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import BannerSlider from "./components/slider/Slider";
import SimpleSlider from "./components/slider/Slider";

function App() {
  return (
    <>
      <BannerSlider/>
      <Featured></Featured>
      <CategorySlide></CategorySlide>
      <MixProduct></MixProduct>
      <Popular></Popular>
      <DiscountProduct></DiscountProduct>
    </>
  );
}

export default App;
