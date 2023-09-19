import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Service from "../components/MoreFeatures";
import Pricing2 from "../components/Pricing2";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <SeoHead title='Teillo On Demand Software' />
      <Layout>
        <Hero />
        <Feature />
        <Service/>
        
        <Pricing2 />
        <FAQ/>
        <Testimonials/>
      </Layout>
    </>
  );
}
