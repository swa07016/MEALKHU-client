import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  CustomInput,
  Container,
  NavbarText, 
  ButtonGroup, 
  Button
} from 'reactstrap';
import './NavBar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [campus, setCampus] = useState(localStorage.campus);
  const toggle = () => setIsOpen(!isOpen);
  const campusSwitchHandler = (e) => {
    if(e.target.checked === false) {
      localStorage.campus = "seoul";
      setCampus('seoul');
      props.campusHandler('seoul');
    } else {
      localStorage.campus = "global";
      setCampus('global');
      props.campusHandler('global');
    }
  }

  const setInitCampus = () => {
    localStorage.campus = "seoul";
    setCampus('seoul');
    props.campusHandler('seoul');
    return false;
  }

  return (
    <>
      <Navbar style={{'backgroundColor': '#ffffff', 'display':'block',
      'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.075), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'
      }} light expand="md" fixed="top">
      <Container className="themed-container">
        <span>
            <a href='/'><img src="logo.png" alt="logo" width="65" /></a>
        </span>
        <NavbarBrand href="/" style={{'marginLeft':'1.5rem', 'color':'#940f0f'}}><strong>MEALKHU</strong></NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/menu" style={{'color':'#940f0f'}}><strong>메뉴별</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/price" style={{'color':'#940f0f'}}><strong>가격별</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/random" style={{'color':'#940f0f'}}><strong>랜덤 / 밀쿠맵</strong></NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Row>
                  <Col style={{
                    'paddingRight' : '0'
                  }}>
                  <strong>서울</strong>
                  </Col>
                  <Col>
                    <CustomInput onChange={campusSwitchHandler} id="campus-switch" type="switch"
                      checked={ campus ? (campus === 'seoul' ? false : true) : setInitCampus()}
                    />
                  </Col>
                  <Col style={{
                    'paddingLeft' : '0'
                  }}
                  ><strong>국제</strong></Col>
              </Row>
            </NavbarText>
          </Collapse>  
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;