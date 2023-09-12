import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Service from "../components/MoreFeatures";

export default function Home() {
  return (
    <>
      <SeoHead title='Teillo Cleaning Systems' />
      <Layout>
        <Hero />
        <Service/>
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
