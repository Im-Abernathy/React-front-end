import React from 'react';
import { Button } from '../ButtonElements.js'
import {InfoContainer, 
        InfoWrapper, InfoRow, 
        Column1, Column2, 
        TextWrapper, TopLine, 
        Heading, Subtitle, 
        BtnWrap, ImgWrap, 
        Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, 
                    lightText, darkText, infoImage, alt, 
                    topLine, headline, description, buttonLabel,
                    primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <ImgWrap><Img src={infoImage} alt={alt}/></ImgWrap>
                    </Column1>
                    <Column2>
                            <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection

