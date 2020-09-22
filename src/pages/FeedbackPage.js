import React, { useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import { Container, Button } from "reactstrap";
import Comments from '../components/Comments';

const styles = {
    offBtn : {
        backgroundColor:'#ffffff',
        color:'#000000',
        outline: 'none',
        boxShadow: 'none'
    },
    onBtn : {
        backgroundColor:'#ffffff',
        color:'#940f0f',
        borderColor:'#940f0f',
        outline: 'none',
        boxShadow: 'none'
    }
}

const FeedbackPage = ({match}) => {
    const setFeedbackTitle = () => {
        if(match.params.name === 'seoul') return '서울캠 정보수정'
        else if(match.params.name === 'global') return '국제캠 정보수정'
        else return '기타 개선사항'
    }

    const setFeedbackDescription = () => {
        if(match.params.name === 'seoul') return '서울캠 식당들의 정보수정이나 식당추가 등의 피드백을 남겨주세요!'
        else if(match.params.name === 'global') return '국제캠 식당들의 정보수정이나 식당추가 등의 피드백을 남겨주세요!'
        else return '기타 개선사항을 자유롭게 이야기해 주세요!'
    }

    const setfullUrl = () => {
        if(process.env.NODE_ENV === 'production') return `https://www.mealkhu.com/feedback/${match.params.name}`;
        else return `http://localhost:3000/feedback/${match.params.name}`;
    }

    const setId = () => {
        return `mealkhu-${match.params.name}`;
    }

    return (
        <>
            <NavBar
                campusHandler={()=>{}}
            />

            <Container style={{
                paddingTop : '1.5rem'
            }}>
            <h4 className="mt-4 mb-3">{setFeedbackTitle()}</h4>
            <p className="text-muted">{setFeedbackDescription()}</p>
                <div>
                    <Button
                    id="init_seoul"
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={match.params.name === 'seoul' ? styles.onBtn:styles.offBtn} 
                    value="seoul"
                    onClick={() => window.location.href = '/feedback/seoul'}
                    ># 서울캠 정보수정</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={match.params.name === 'global' ? styles.onBtn:styles.offBtn} 
                    value="global"
                    onClick={() => window.location.href = '/feedback/global'}
                    ># 국제캠 정보수정</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={match.params.name === 'etc' ? styles.onBtn:styles.offBtn} 
                    value="etc"
                    onClick={() => window.location.href = '/feedback/etc'}
                    ># 기타 개선사항</Button>
                </div>
                <hr/>
                <Comments fullUrl={setfullUrl()} id={setId()}/>
            </Container>
        </>
    );
}


export default FeedbackPage;