import { Exploring } from "./components/sections/exploring";
import { FashionAd } from "./components/sections/fashionad";
import { Header } from "./components/sections/hero";
import { Products } from "./components/sections/products";


export default function Home() {
  return (
    <>
      <Header />
      <Exploring />
      <Products />
      <FashionAd />
    </>
  );
}
