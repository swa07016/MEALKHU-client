import React from 'react';
import NavBar from '../components/NavBar';

const PricePage = () => {
    return (
        <>
            <NavBar/>
            <div class="page-wrap d-flex flex-row align-items-center"
                style={{
                    'height':'85%'
                }}
            >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            {/* <span class="display-1 d-block">404</span> */}
                            <div class="mb-4 lead">서비스 준비중입니다..</div>
                            <a href="/">홈으로</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PricePage;