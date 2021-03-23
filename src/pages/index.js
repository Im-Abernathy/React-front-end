import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjectOne, homeObjectTwo, homeObjectThree} from '../components/InfoSection/data';
import Services from '../components/Services'
import Footer from '../components/FooterSection'

const Home = () => {

    return (
        <>
         <HeroSection/>
         <InfoSection {...homeObjectOne}/>
         <InfoSection {...homeObjectTwo}/>
         <InfoSection {...homeObjectThree}/>
         <Services/>
        </>
    );
}

export default Home
