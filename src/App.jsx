import AboutMe from './components/AboutMe/AboutMe';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/NavBar/NavBar';
import ServicesDiff from './components/ServicesDiff/ServicesDiff';
import Responsibility from './components/Responsibility/Responsibility';
import MarketDiff from './components/MarketDiff/MarketDiff';
import MoreInfo from './components/MoreInfo/MoreInfo';

export function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <ServicesDiff />
      <History />
      <Responsibility />
      <MarketDiff />
      <MoreInfo />
      <Footer />
    </>
  );
}
