import React from 'react'

import Icon1 from '../../images/cityLocation.png'
import Icon2 from '../../images/cityNight.png'
import Icon3 from '../../images/dataGraph.png'

import { ServicesContainer, ServicesH1, 
        ServicesWrapper, ServicesCard, 
        ServicesIcon, ServicesH2, ServicesP } 
        from './ServicesElements'

const Services = () => {
    return (
        <div>
            <ServicesContainer>

                <ServicesH1>Our Services</ServicesH1>

                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2> Reduce Expenses </ServicesH2>
                        <ServicesP> We help reduce your fees and increase your profit.</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2> Virtual Offices </ServicesH2>
                        <ServicesP> You can access our platform online anywhere on mobile too</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2> Premium Benefits </ServicesH2>
                        <ServicesP> Subscribe to premium tools and tips</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>

            </ServicesContainer>
        </div>
    )
}

export default Services
