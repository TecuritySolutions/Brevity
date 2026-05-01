import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import SampleBrief from '@/components/SampleBrief';
import Engine from '@/components/Engine';
import USP from '@/components/USP';
import Who from '@/components/Who';
import Voice from '@/components/Voice';
import Invite from '@/components/Invite';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <SampleBrief />
      <Engine />
      <USP />
      <Who />
      <Voice />
      <Invite />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
