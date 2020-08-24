import React from 'react';
import NavBar from '../components/NavBar';
import LandingInfo from '../components/LandingInfo';
import { Container, Row, Col } from 'reactstrap';


const LandingPage = () => {
    
    return (
        <>
            <NavBar/>
            <LandingInfo/>
            <Container className="mb-4">
                <h3>Our Services</h3>
                <hr className="mb-3"/>
                <Row xs="1" sm="1" md="3" lg="3">
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                            
                            <img src="https://cdn3.iconfinder.com/data/icons/minimalisticons/28/list-512.png" alt="menu-icon" width="50" />
                            <h4 className="my-3">메뉴별</h4>
                            <p className="text-muted">메뉴별 필터링 기능을 사용해서<br/>원하는 메뉴로 음식점들을 찾아보세요!</p>
                            <a href="/menu" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                            
                            <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/money-512.png" alt="menu-icon" width="50" />
                            <h4 className="my-3">가격별</h4>
                            <p className="text-muted">가격별 필터링 기능을 사용해서<br/>원하는 가격으로 음식점들을 찾아보세요!</p>
                            <a href="/price" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                            
                            <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png" alt="menu-icon" width="50" />
                            <h4 className="my-3">랜덤 / 밀쿠맵</h4>
                            <p className="text-muted">랜덤 추천 기능, 음식점 지도를<br/>볼 수 있는 밀쿠맵을 사용해보세요!</p>
                            <a href="/random" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className="py-3" style={{
                backgroundColor:'#940f0f'
            }}>
                <Container>
                    <p className="m-0 text-center text-white small">Copyright © MEALKHU 2020</p>
                </Container>
            </footer>
        </>
    );
}


export default LandingPage;