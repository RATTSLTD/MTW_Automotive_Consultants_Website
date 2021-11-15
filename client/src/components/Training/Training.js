import React, {useEffect, useState} from 'react'
import {TrainingContainer, ContentWrapper, ContentFrame, SelectorWrapper, FreeContentContainer, FreeContentWrapper, PaidContentContainer, PaidContentWrapper, Content, ContentImg, ContentHeader, FreeContentHeader, PaidContentHeader} from './TrainingElements'

export const Training = (props) => {
    const[freeCourses, setFreeCourses] = useState([])
    const[SelectedContent, setSelectedContent] = useState("https://onedrive.live.com/embed?cid=BF3138943720AE9B&resid=BF3138943720AE9B%2114069&authkey=AKEyx39blf01VCI&em=2")

    useEffect(() => {
        fetch("/api/free")
            .then((res) => {
                return res.json()
            }).then((json) => {
                setFreeCourses(json)
            })
    },[])


    function ContentSelection(url){
        setSelectedContent(url)
    }

    return (
        <TrainingContainer>
            <ContentWrapper>
                <ContentHeader>{}</ContentHeader>
                <ContentFrame src={SelectedContent}>Your Browser Does not support this content</ContentFrame>
            </ContentWrapper>
            <SelectorWrapper>
                <FreeContentContainer>
                    <FreeContentHeader>Your Free Content</FreeContentHeader>
                    <FreeContentWrapper>                        
                        {freeCourses.map(course => {
                            return (<Content href={course.url} key={course.id} onClick={() => ContentSelection(course.url)}><ContentImg src={course.imgURL} alt="Not working"/></Content>) //Redesign this
                        })}
                    </FreeContentWrapper>
                </FreeContentContainer>
                <PaidContentContainer>
                    <PaidContentHeader>Your Paid Content</PaidContentHeader>
                    <PaidContentWrapper>
                        {props.courses.map(course => {
                            return (<Content href={course.url} key={course.id} onClick={() => ContentSelection(course.url)}><ContentImg src={course.imgURL}/></Content>) //Redesign this
                        })}
                    </PaidContentWrapper>
                </PaidContentContainer>
            </SelectorWrapper>
        </TrainingContainer>
    )
}

export default Training