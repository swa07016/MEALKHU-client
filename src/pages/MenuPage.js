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



const MenuPage = (props) => {
    let campus = localStorage.campus;
    const [datas, setDatas] = useState([]);
    const [filteredDatas, setFilteredDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [all, setAll] = useState(false);
    const [Kfood, setKfood] = useState(false);
    const [Cfood, setCfood] = useState(false);
    const [Jfood, setJfood] = useState(false);
    const [meat, setMeat] = useState(false);
    const [snackfood, setSnackfood] = useState(false);
    const [pub, setPub] = useState(false);
    const [fastfood, setFastfood] = useState(false);
    const [cafe, setCafe] = useState(false);
    const [etc, setEtc] = useState(false);

    const fetchData = async () => {
        const result = await axios(
          `http://www.mealkhu.tk/api/datas`
        );
        setDatas(result.data);
        setIsLoading(true);
    };

    const changeData = async (navCampus) => {
        setKfood(false);
        setCfood(false);
        setJfood(false);
        setMeat(false);
        setSnackfood(false);
        setPub(false);
        setFastfood(false);
        setCafe(false);
        setEtc(false);
        campus = await navCampus;
        fetchData();
    }

    useEffect(() => {
      fetchData();
    }, []);
    

    // filtereddatas 처리 + isloading변경
    
    const filterData = () => {
        let result = [];
        const states = [Kfood, Cfood, Jfood, meat, snackfood, pub, fastfood, cafe, etc];
        const types = [['한식'], ['중식'], ['일식'], ['고기'], ['분식'], ['호프', '술집'], ['패스트푸드'], ['카페', '디저트'], ['기타']];
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
    }

    useEffect( () => {
        setIsLoading(false);
        filterData();
        setIsLoading(true);
    }, [Kfood, Cfood, Jfood, meat, snackfood, pub, fastfood, cafe, etc]);

    useEffect(() => {
        if(all === true) {
            setKfood(true);
            setCfood(true);
            setJfood(true);
            setMeat(true);
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
            setMeat(false);
            setSnackfood(false);
            setPub(false);
            setFastfood(false);
            setCafe(false);
            setEtc(false);
        }
    }, [all]);

    return (
        <>
            <NavBar 
                campusHandler={changeData}
            />
            <Container style={{
                paddingTop : '1.5rem'
            }}> 

                <h4 className="mt-4 mb-3">메뉴별 필터링</h4>
                <p className="text-muted">원하는 메뉴들을 선택하세요!</p>
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
                    
                </div>
                <hr/>
            </Container>

            
            
                {isLoading ? 
                (<Container >
                    <Row xs="2" sm="2" md="4">
                        {filteredDatas.map((data) => 
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
                            img = {data.img}
                            img_source = {data.img_source}
                        />
                        </Col>
                        ) 
                        }
                        </Row>
                </Container>)
                : <Loading value="Loading.."/>
                }
        </>
    );
}

export default MenuPage;