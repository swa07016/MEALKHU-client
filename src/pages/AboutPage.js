import React from 'react';
import NavBar from '../components/NavBar';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';
    
const AboutPage = () => {
    return (
        <>
            <NavBar 
                campusHandler={()=>{}}
            />
            <Container className="mb-5 px-4">

                <Row className="justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <h1>MEALKHU</h1>
                        <hr className="my-4 rounded-pill" style={{
                            height:'3px',
                            backgroundColor:'black',
                            width:'50px'
                        }}/>
                        <p className="lead">밀쿠는 경희대생의 식사고민을 덜어주기 위해 개발된 웹서비스입니다.<br/><div className="mb-1"/>경희대 주변의 식당, 술집, 카페를 카테고리, 가격별로 정리했습니다.</p>
                    </div>
                </Row>
                <hr className="mt-4"/>
                <Row className="align-items-center" xs="1" sm="1" md="2" lg="2">
                    <Col className="order-lg-2 px-5">
                        <div className="px-4 py-5">
                        <img className="img-fluid rounded-circle shadow-lg" src="https://cdn.pixabay.com/photo/2017/02/18/21/28/breakfast-2078286_960_720.png"/>
                        </div>
                    </Col>
                    <Col className="order-lg-1 px-5">
                        <h1 className=" mb-2">메뉴별 필터링</h1>
                        <p className="text-muted">학교 주변에 한식집이 어디있지?</p>
                        <p className="lead">메뉴별로 식당을 찾아볼 수 있는 기능입니다. 메뉴별 필터링 기능을 사용해서 원하는 메뉴의 식당들을 찾아보세요!</p>
                    </Col>
                </Row>

                <Row className="align-items-center" xs="1" sm="1" md="2" lg="2">
                    <Col className="order-lg-1 px-5">
                        <div className="px-4 py-5">
                        <img className="img-fluid rounded-circle shadow-lg" src="https://cdn.pixabay.com/photo/2016/10/08/18/35/shopping-1724299_960_720.png"/>
                        </div>
                    </Col>
                    <Col className="order-lg-2 px-5">
                        <h1 className=" mb-2">가격별 필터링</h1>
                        <p className="text-muted">후배 밥 사주기로 했는데, 적당한 가격에 뭐가 있을까?</p>
                        <p className="lead">가격대별로 식당을 찾아볼 수 있는 기능입니다. 가격별 필터링 기능을 사용해서 원하는 가격대의 식당들을 찾아보세요!</p>
                        <p className="text-muted">※ 식당별로 1가지 메뉴, 가격 정보만을 제공합니다.</p>
                    </Col>
                </Row>

                <Row className="align-items-center" xs="1" sm="1" md="2" lg="2">
                    <Col className="order-lg-2 px-5">
                        <div className="px-4 py-5">
                        <img className="img-fluid rounded-circle shadow-lg" src="https://cdn.pixabay.com/photo/2017/09/28/23/16/randomized-trial-2797448_960_720.png"/>
                        </div>
                    </Col>
                    <Col className="order-lg-1 px-5">
                        <h1 className=" mb-2">랜덤 추천</h1>
                        <p className="text-muted">오늘 점심 어디서 뭐 먹지?</p>
                        <p className="lead">선택한 카테고리내에서 2개의 식당을 추천해주는 기능입니다. 친구들과 랜덤 추천 기능을 사용해서 빠르게 식사 장소를 결정해보세요!</p>
                    </Col>
                </Row>

                <hr/>

                <Row className="justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <h1 >Contact</h1>
                        <hr className="my-4 rounded-pill" style={{
                            height:'3px',
                            backgroundColor:'black',
                            width:'50px'
                        }}/>
                        <p className="text-muted">식당추가, 정보수정 등의 연락은 언제나 환영입니다.</p>
                    </div>
                </Row>
                <Row className="mt-1" xs="1" sm="1" md="2" lg="2">
                    <div className="col-lg-4 ml-auto text-center my-4">
                         <h4 className="mb-3">서울캠퍼스</h4>
                        <h6 className="lead">최부성 (관광학과)</h6>
                        <h6>isakchoe@naver.com</h6>
                    </div>
                    <div className="col-lg-4 mr-auto text-center my-4">
                         <h4 className="mb-3">국제캠퍼스</h4>
                        <h6 className="lead">정성훈 (컴퓨터공학과)</h6>
                        <h6>swa07016@khu.ac.kr</h6>
                    </div>
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

export default AboutPage;