import React, { useState }  from 'react'
import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesQuickAccessElements'
import F2F from '../../../images/F2F.svg'
import RemoteLearning from '../../../images/RemoteLearning.svg'



const Services = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ServicesContainer>
            <ServicesP>MTW Automotive provides development and delivery in the automotive industry to help drive business performance and improvement through a range of training environments:</ServicesP>
            <ServicesWrapper>
                <ServicesCard to="/services">
                    <ServicesIcon src={F2F}/>
                    <ServicesH2>Technical Training</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={RemoteLearning}/>
                    <ServicesH2>Course Development</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={RemoteLearning}/>
                    <ServicesH2>Training Needs Assessments</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={RemoteLearning}/>
                    <ServicesH2>Customer Service and Management Training</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
