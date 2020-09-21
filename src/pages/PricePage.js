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
                place_url={data.place_url}
            />
        </Col>
    );
}

const PricePage = () => {
    let campus = localStorage.campus;
    const [datas, setDatas] = useState([]);
    const [filteredDatas, setFilteredDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [option1, setoption1] = useState(false);
    const [option2, setoption2] = useState(false);
    const [option3, setoption3] = useState(false);
    const [option4, setoption4] = useState(false);
    const [option5, setoption5] = useState(false);
    const [option6, setoption6] = useState(false);

    const btnHandler = (e, f) => {
        setOffBtnStyle();
        const PRICE = e.target.value.split(',');
        PRICE[0] = Number(PRICE[0]);
        PRICE[1] = Number(PRICE[1]);
        f(true);
        let result = []; 
        for(let i=0; i<datas.length; i++) {
            const data = datas[i];
            if(data.price === 'null') continue;
            if(PRICE[0] <= Number(data.price) && Number(data.price) <=PRICE[1]) result.push(data);
            
        }
        for(let i=0; i<result.length-1; i++) {   
            for(let j=i+1; j<result.length; j++) {
                if(Number(result[j].price) < Number(result[i].price)) {
                    let tmp = result[j];
                    result[j] = result[i];
                    result[i] = tmp;
                }
            }
        }
        for(let i=0; i<result.length; i++) result[i] = getMealCard(result[i])
        setFilteredDatas(result);
    }

    const fetchData = async () => {
        setFilteredDatas([]);
        setDatas([]);
        setIsLoading(false);
        const result = await axios(
            process.env.NODE_ENV === 'production' ?
            `https://khumeal.herokuapp.com/api/${campus}` :
            `http://localhost:5000/api/${campus}`
        );
        setDatas(result.data);
        setIsLoading(true);
    };

    const changeData = async (navCampus) => {
        setOffBtnStyle();
        campus = await navCampus;
        await fetchData();
        initClick();
    }

    const setOffBtnStyle = () => {
        setoption1(false);
        setoption2(false);
        setoption3(false);
        setoption4(false);
        setoption5(false);
        setoption6(false);
    }

    const initClick = () => {
        const initP = document.getElementById('init_p');
        initP.click();
    }

    const initSettings = async () => {
        await fetchData();
        initClick();
    }

    useEffect(() => {
        initSettings();
    }, []);

    return (
        <>
            <NavBar 
                campusHandler={changeData}
            />
            { isLoading ? <><Container style={{
                paddingTop : '1.5rem'
            }}>
                <h4 className="mt-4 mb-3">가격별 필터링</h4>
                <p className="text-muted">원하는 가격을 선택하세요!</p>
                <div>
                    <Button
                    id="init_p"
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option1 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption1)}
                    value="0,5000"
                    >5000원이하</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option2 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption2)}
                    value="5000,10000"
                    >5000원 ~ 10000원</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option3 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption3)}
                    value="10000,15000"
                    >10000원 ~ 15000원</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option4 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption4)}
                    value="15000,20000"
                    >15000원 ~ 20000원</Button>
                    
                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option5 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption5)}
                    value="20000,30000"
                    >20000원 ~ 30000원</Button>

                    <Button
                    size="sm"
                    className="rounded-pill mx-2 my-1 remove-hover"
                    style={option6 ? styles.onBtn:styles.offBtn}
                    onClick={(e) => btnHandler(e, setoption6)}
                    value="30000,1000000"
                    >30000원이상</Button>
                </div>
                <hr/>
            </Container>
            <Container>
                <Row xs="2" sm="2" md="4">{filteredDatas}</Row>
            </Container></> : <Loading value="Loading.."/>}
        </>
    );
}

export default PricePage;