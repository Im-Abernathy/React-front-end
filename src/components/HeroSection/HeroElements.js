import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;


export const HeroBg = styled.div`
    postiion: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: auto;
    overflow: hidden;
`;


export const HeroImage = styled.img`
    max-width: 100%; 
    height: auto;
`

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    opacity: 0.90;
`;

export const HeroH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;wq
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    margin-top: 4px;
    font-size: 20px;
    vertical-align: middle;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    margin-top: 4px;
    font-size: 20px;
    vertical-align: middle;

`