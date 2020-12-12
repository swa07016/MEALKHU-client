import React from 'react';
import NavBar from '../components/NavBar';
import LandingInfo from '../components/LandingInfo';
import { Container, Row, Col } from 'reactstrap';


const LandingPage = () => {
    
    return (
        <>
           <NavBar 
                campusHandler={()=>{}}
            />
            <LandingInfo/>
            <Container className="mb-4">
                <h3>Our Services</h3>
                <hr className="mb-3"/>
                <Row className="mb-5" xs="1" sm="1" md="3" lg="3">
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                            <img src="https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn/menu_icon.png" alt="menu-icon" width="50" />
                            <h4 className="my-3">메뉴별</h4>
                            <p className="text-muted">메뉴별 필터링 기능을 사용해서<br/>원하는 메뉴로 음식점들을 찾아보세요!</p>
                            <a href="/menu" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                            <img src="https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn/price_icon.png" alt="price-icon" width="50" />
                            <h4 className="my-3">가격별</h4>
                            <p className="text-muted">가격별 필터링 기능을 사용해서<br/>원하는 가격으로 음식점들을 찾아보세요!</p>
                            <a href="/price" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center" style={{
                            'margin': '1rem'
                            }}>
                        
                            <img src="https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn/map_icon.png" alt="map-icon" width="50" />
                            <h4 className="my-3">랜덤 / 밀쿠맵</h4>
                            <p className="text-muted">랜덤 추천 기능, 음식점 지도를<br/>볼 수 있는 밀쿠맵을 사용해보세요!</p>
                            <a href="/random" style={{textDecoration:'none'}}>바로가기</a>
                        </div>
                    </Col>
                </Row>
			    
				<h3 className="mt-5">Contact</h3>
				<hr className="mb-3"/>
				<Row xs="1" sm="1" md="2" lg="2">
					<Col className="order-lg-1 px-5 m-auto">
                        <div className="px-4 py-5">
                        <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/02/08/08/38/mail-2048128_960_720.png"/>
                        </div>
                    </Col>
					<Col className="order-lg-2 align-items-center justify-content-center m-auto">
						<div className="py-5 m-auto">	
							<Row className="align-items-center justify-content-center" xs="1" sm="1" md="1" lg="1">
								
								<Col className="text-center pb-4">
									 <h4 className="mb-3">서울캠퍼스</h4>
									<h6 className="lead">최부성 (관광학과)</h6>
									<h6>isakchoe@naver.com</h6>
								</Col>
								<Col className="text-center py-4">
									 <h4 className="mb-3">국제캠퍼스</h4>
									<h6 className="lead">정성훈 (컴퓨터공학과)</h6>
									<h6>swa07016@khu.ac.kr</h6>
								</Col>
								<Row className="justify-content-center mt-2">
									<div className="col-lg-8 text-center">	
										<p className="text-muted">식당추가/정보수정 등의 연락은 언제나 환영입니다.</p>
									</div>
								</Row>
								
							</Row>
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