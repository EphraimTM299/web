import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Service from "../components/MoreFeatures";
import Pricing2 from "../components/Pricing2";

export default function Home() {
  return (
    <>
      <SeoHead title='Teillo Cleaning Systems' />
      <Layout>
        <Hero />
        <Service/>
        <Feature />
        <Pricing2 />
      </Layout>
    </>
  );
}
