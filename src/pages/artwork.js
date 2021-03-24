import InfoSection from '../components/InfoSection';
import { homeObjectOne, homeObjectTwo, homeObjectThree} from '../components/InfoSection/data';

const Artwork = () => {

    return (
        <>
         <InfoSection {...homeObjectOne}/>
         <InfoSection {...homeObjectTwo}/>
         <InfoSection {...homeObjectThree}/>
        </>
    );
}

export default Artwork;