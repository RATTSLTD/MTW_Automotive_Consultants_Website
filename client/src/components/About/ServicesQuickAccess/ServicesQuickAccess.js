import React, { useState }  from 'react'
import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesQuickAccessElements'
import TechnicalTraining from '../../../images/TechnicalTraining.png'
import CourseDevelopment from '../../../images/CourseDevelopment.png'
import TrainingNeedsAssessment from '../../../images/TrainingNeedsAssessment.png'
import CustomerService from '../../../images/CustomerService.png'



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
                    <ServicesIcon src={TechnicalTraining}/>
                    <ServicesH2>Technical Training</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={CourseDevelopment}/>
                    <ServicesH2>Course Development</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={TrainingNeedsAssessment}/>
                    <ServicesH2>Training Needs Assessments</ServicesH2>
                </ServicesCard>
                <ServicesCard to="/services">
                    <ServicesIcon src={CustomerService}/>
                    <ServicesH2>Customer Service and Management Training</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
