import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/hero";
import Benifit from "@/components/benifit";
import TopFeater from "@/components/topFeatur";
import Offer from "@/components/offer";
import CollectonSlider from "@/components/collection-slider";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benifit/>
      <TopFeater title="New Arrivals" subtitel='FEATURED PRODUCT' />
      <Offer/>
      <CollectonSlider/>
      <TopFeater title="Big Deal" subtitel='SUMMER' offer={true} />
    </div>
  );
}
