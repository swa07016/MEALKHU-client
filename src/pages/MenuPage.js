import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MealCard from '../components/MealCard';
import { Container, Row, Col, Button } from "reactstrap";
import axios from 'axios';
import Loading from '../components/Loading';
import './MenuPage.css';


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

const getMealCard = (data) => {
    return (
        <Col key={data.id}>
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
    );
}



const MenuPage = () => {
    let campus = localStorage.campus;
    const [datas, setDatas] = useState([]);
    const [filteredDatas, setFilteredDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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


    const fetchData = async () => {
        setFilteredDatas([]);
        setDatas([]);
        setIsLoading(false);
        const result = await axios(
          `https://khumeal.herokuapp.com/api/${campus}`
        );
        setDatas(result.data);
        setIsLoading(true);
    };


    const changeData = async (navCampus) => {
        setOffBtnStyle();
        campus = await navCampus;
        fetchData();
    }

    useEffect(() => {
      fetchData();
    }, []);
    
    const setOffBtnStyle = () => {
        setAll(false);
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

    
    const btnHandler = (e, f) => {
        setOffBtnStyle();
        const TYPE = e.target.value.split(',');
        f(true);
        let result = [];
        if(TYPE[0] === '전체') {
            for(let i=0; i<datas.length; i++) result.push(getMealCard(datas[i]));
            setFilteredDatas(result);
            
        } else {
            for(let i=0; i<datas.length; i++) {
                const data = datas[i];
                for(let j=0; j<TYPE.length; j++) {
                    if(data.type === TYPE[j]) {result.push(getMealCard(data));
                    break;
                }
                }
            }
            setFilteredDatas(result);
        }
    }

    return (
        <>
            <NavBar 
                campusHandler={changeData}
            />

            { isLoading ? <><Container style={{
                paddingTop : '1.5rem'
            }}> 
                <h4 className="mt-4 mb-3">메뉴별 필터링</h4>
                <p className="text-muted">원하는 메뉴를 선택하세요!</p>
                <div>
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={all ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setAll)}
                    value="전체"
                    >전체</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Kfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setKfood)}
                    value="한식"
                    >한식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Cfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setCfood)}
                    value="중식"
                    >중식</Button>
                    
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Wfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setWfood)}
                    value="양식"
                    >양식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={Jfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setJfood)}
                    value="일식"
                    >일식</Button>
               
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={meat ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setMeat)}
                    value="고기"
                    >고기</Button>


                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={snackfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setSnackfood)}
                    value="분식"
                    >분식</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={pub ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setPub)}
                    value="호프,술집"
                    >호프/술집</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={fastfood ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setFastfood)}
                    value="패스트푸드"
                    >패스트푸드</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={cafe ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setCafe)}
                    value="카페,디저트"
                    >카페/디저트</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={etc ? styles.onBtn:styles.offBtn} 
                    onClick={(e) => btnHandler(e, setEtc)}
                    value="기타"
                    >기타</Button>
                    
                </div>
                <hr/>
            </Container>
            <Container>
                <Row xs="2" sm="2" md="4">{filteredDatas}</Row>
            </Container></> : <Loading value="Loading.."/>}
        </>
    );
}

export default MenuPage;