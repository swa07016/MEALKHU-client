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
                        <p className="lead">밀쿠 컨셉 소개 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet.</p>
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
                        <p className="lead">기능, 계기 등 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet.</p>
                    </Col>
                </Row>

                <Row className="align-items-center" xs="1" sm="1" md="2" lg="2">
                    <Col className="order-lg-1 px-5">
                        <div className="px-4 py-5">
                        <img className="img-fluid rounded-circle shadow-lg" src="https://cdn.pixabay.com/photo/2020/08/03/10/00/graph-5459708_960_720.png"/>
                        </div>
                    </Col>
                    <Col className="order-lg-2 px-5">
                        <h1 className=" mb-2">가격별 필터링</h1>
                        <p className="lead">기능, 계기 등 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet.</p>
                    </Col>
                </Row>

                <Row className="align-items-center" xs="1" sm="1" md="2" lg="2">
                    <Col className="order-lg-2 px-5">
                        <div className="px-4 py-5">
                        <img className="img-fluid rounded-circle shadow-lg" src="https://cdn.pixabay.com/photo/2017/02/18/21/28/breakfast-2078286_960_720.png"/>
                        </div>
                    </Col>
                    <Col className="order-lg-1 px-5">
                        <h1 className=" mb-2">랜덤 추천</h1>
                        <p className="lead">기능, 계기 등 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet.</p>
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