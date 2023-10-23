import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import MoreFeatures from "../components/MoreFeatures";
import Pricing2 from "../components/Pricing2";
import Testimonials from "../components/Testimonials";
import LogoClouds from '../components/logoClouds'


export default function Home() {
  return (
    <>
      <SeoHead title='Teillo On Demand Software' />
      <Layout>
        <Hero />
        <Feature />
        <MoreFeatures/>
        <Pricing2 />
        <Testimonials/>
      </Layout>
    </>
  );
}
