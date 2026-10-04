import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Stats from '../components/Sections/Stats';
import {homePageMeta} from '../data/data';
import useReveal from '../hooks/useReveal';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  useReveal();
  return (
    <Page description={description} title={title}>
      <div aria-hidden="true" className="scroll-progress" />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
