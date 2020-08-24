import React from 'react';
import NavBar from '../components/NavBar';

const AboutPage = () => {
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
                            <div class="mb-4 lead">AboutPage</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;