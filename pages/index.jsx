import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductHighlight from '../components/ProductHighlight';
import BestSellingCarousel from '../components/BestSellingCarousel';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans bg-base text-dark">
      <Head>
        <title>Skincare Landing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroSection />
      <ProductHighlight />
      <BestSellingCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}
