import React, {useState} from 'react'
import imageCollage from '../../images/collage.jpeg';
import { Button } from '../ButtonElements';
import {HeroContainer, 
        HeroBg,
        HeroContent,
        HeroImage,
        HeroH1, 
        HeroP, 
        HeroBtnWrapper, 
        ArrowForward, 
        ArrowRight 
    } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            
            <HeroBg>
                <HeroImage src={imageCollage} alt="collage"/>
            </HeroBg>

            <HeroContent>
                <HeroH1> A Life Behind the Camera </HeroH1>
                <HeroP> Explore Collections of beautiful photography </HeroP>
                <HeroBtnWrapper>
                    <Button to="/artwork" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" 
                    dark="true"> See More {hover? <ArrowForward/> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    );
}

export default HeroSection;
