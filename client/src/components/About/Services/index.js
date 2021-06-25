import React from 'react'
import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import F2F from '../../../images/F2F.svg'
import RemoteLearning from '../../../images/RemoteLearning.svg'


const Services = () => {
    return (
        <ServicesContainer>
            <ServicesP>MTW Automotive provides development and delivery in the automotive industry to help drive business performance and improvement through a range of training environments:</ServicesP>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={F2F}/>
                    <ServicesH2>Face to Face</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={RemoteLearning}/>
                    <ServicesH2>Remote Learning</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
