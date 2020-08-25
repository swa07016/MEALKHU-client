import React, { useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import LandingMap from '../components/LandingMap';
import { Container, Row, Col, Button } from "reactstrap";
import axios from 'axios';
import Loading from '../components/Loading';
import MealCard from '../components/MealCard';

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
    },
    start : {
        backgroundColor:'#940f0f',
        color:'#ffffff',
        borderColor:'#940f0f',
        outline: 'none',
        boxShadow: 'none'
    }
}



const RandomPage = () => {
    let campus = localStorage.campus;
    const [datas, setDatas] = useState([]);
    const [filteredDatas, setFilteredDatas] = useState([]);
    const [RandomCards, setRandomCards] = useState([]);
    const [all, setAll] = useState(false);
    const [Kfood, setKfood] = useState(false);
    const [Cfood, setCfood] = useState(false);
    const [Jfood, setJfood] = useState(false);
    const [Wfood, setWfood] = useState(false);
    const [meat, setMeat] = useState(false);
    const [snackfood, setSnackfood] = useState(false);
    const [pub, setPub] = useState(false);
    const [fastfood, setFastfood] = useState(false);
    const [cafe, setCafe] = useState(false);
    const [etc, setEtc] = useState(false);
    const [isRandom, setIsRandom] = useState(0);
   
    const fetchData = async () => {
        const result = await axios(
          `https://khumeal.herokuapp.com/api/${campus}`
        );
        setDatas(result.data);
    };

    const changeData = async (navCampus) => {
        setKfood(false);
        setCfood(false);
        setJfood(false);
        setWfood(false);
        setMeat(false);
        setSnackfood(false);
        setPub(false);
        setFastfood(false);
        setCafe(false);
        setEtc(false);
        setRandomCards([]);
        campus = await navCampus;
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let result = [];
        const states = [Kfood, Cfood, Wfood, Jfood, meat, snackfood, pub, fastfood, cafe, etc];
        const types = [['한식'], ['중식'], ['양식'], ['일식'], ['고기'], ['분식'], ['호프', '술집'], ['패스트푸드'], ['카페', '디저트'], ['기타']];
        for(let i = 0; i < states.length; i++) {
            if(states[i] === true) {
                const temp = types[i];
                for(let j = 0; j < datas.length; j++) {
                    for(let k = 0; k < temp.length; k++) {
                        if(datas[j].type === temp[k]) {
                            result.push(datas[j]);
                        }
                    }
                }
            }
        }
        setFilteredDatas(result);
    }, [Kfood, Cfood, Jfood, Wfood, meat, snackfood, pub, fastfood, cafe, etc]);

    useEffect(() => {
        if(all === true) {
            setKfood(true);
            setCfood(true);
            setJfood(true);
            setMeat(true);
            setWfood(true);
            setSnackfood(true);
            setPub(true);
            setFastfood(true);
            setCafe(true);
            setEtc(true);
        }
        else {
            setKfood(false);
            setCfood(false);
            setJfood(false);
            setWfood(false);
            setMeat(false);
            setSnackfood(false);
            setPub(false);
            setFastfood(false);
            setCafe(false);
            setEtc(false);
        }
    }, [all]);

    const randomHandler = () => {
        
        if(filteredDatas.length === 0) {
            alert('메뉴를 선택하세요');
            return ;
        } 
        else {
            setIsRandom(1);
            setTimeout(()=>{
            let x = getRandomInt(0, filteredDatas.length);
            let y = -1;
            while(1) {
                y = getRandomInt(0, filteredDatas.length);
                if(x!==y) break;
            }
            setRandomCards([filteredDatas[x], filteredDatas[y]]);    
            setIsRandom(2);
        }, 2500);
        }
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

    return (
        <>
            <NavBar
                campusHandler={changeData}
            />
            <Container style={{
                paddingTop : '1.5rem'
            }}>
            <h4 className="mt-4 mb-3">랜덤 추천</h4>
            <p className="text-muted">원하는 메뉴들을 선택한 후 start버튼을 눌러보세요! (여러 개 선택가능)</p>
                <div>
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={all ? styles.onBtn:styles.offBtn} 
                    onClick={() => setAll(!all)}
                    >전체</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Kfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setKfood(!Kfood)}
                    >한식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Cfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setCfood(!Cfood)}
                    >중식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Wfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setWfood(!Wfood)}
                    value="양식"
                    >양식</Button>
                    
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Jfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setJfood(!Jfood)}
                    >일식</Button>
               
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={meat ? styles.onBtn:styles.offBtn} 
                    onClick={() => setMeat(!meat)}
                    >고기</Button>


                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={snackfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setSnackfood(!snackfood)}
                    >분식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={pub ? styles.onBtn:styles.offBtn} 
                    onClick={() => setPub(!pub)}
                    >호프/술집</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={fastfood ? styles.onBtn:styles.offBtn} 
                    onClick={() => setFastfood(!fastfood)}
                    >패스트푸드</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={cafe ? styles.onBtn:styles.offBtn} 
                    onClick={() => setCafe(!cafe)}
                    >카페/디저트</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={etc ? styles.onBtn:styles.offBtn} 
                    onClick={() => setEtc(!etc)}
                    >기타</Button>
                    
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={styles.start} 
                    onClick={randomHandler}
                    >start!</Button>
                </div>
                <hr/>
                {isRandom === 0 ? ('') : ( (isRandom === 1) ? <span style={{'padding':'1.5rem'}}><Loading value="추첨중.."/></span> :(
                            <Container>
                            <Row xs='1' sm="1" md="3" lg="3">
                            <Col md={{size:3}} lg={{size:3}}></Col>
                            <Col md={{size:6}} lg={{size:6}}>
                                <Row xs='2' sm="2" md="2" lg="2">                            
                                {
                                    RandomCards.map((data, index)=> (
                                        <Col>
                                <MealCard
                                key = {data.id}
                                id = {data.id}
                                name = {data.name}
                                address = {data.address}
                                latitude = {data.latitude}
                                longitude = {data.longitude}
                                type = {data.type}
                                menu = {data.menu}
                                price = {data.price}
                                img = {data.img}
                                img_source = {data.img_source}
                                />
                                </Col>
                                    ))
                                }
                                </Row>
                            </Col>
                            <Col md={{size:3}} lg={{size:3}}></Col>
                            </Row>
                        </Container>
                        ) 
                )}
            {datas ? <LandingMap
                datas = {datas}
                lat={localStorage.campus === 'global' ? 37.2479109441 : 37.59226457}
                lng={localStorage.campus === 'global' ? 127.0773045246 : 127.051544}
                level={localStorage.campus === 'global' ? 3 : 2}
            /> : <Loading value="Loading.."/>}
            </Container>     
        </>
    );
}


export default RandomPage;