import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardBody, 
  CardTitle, 
  CardText, 
  CardImg, 
  CardFooter, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } 
from 'reactstrap';
import Map from './Map';
import './MealCard.css';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const MealCard = (props) => {
  
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  
  return (
    <>
      <Card onClick={toggleModal} style={{
        'marginTop': '0.6rem',
        'marginBottom': '0.6rem',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>
        <div className="wrap">
        <CardImg
        top width="100%" 
        src={`https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn${props.img}`} alt="Card image" />
        <CardBody>
          <CardTitle className="text-center"><strong>{props.name}</strong></CardTitle>
          <CardText className="text-center">
            <small>{props.menu != 'null' ? props.menu : props.type}</small><br/>
            <small style={{color:'#940f0f'}}>{(props.price != 'null')? `${props.price}￦` : ''}</small>
          </CardText>
        </CardBody>
        {/* <CardFooter className="wrap" style={{
          'padding': '0 0 0 0'
        }}>
        
        <Button 
        onClick={toggleModal}
        className="button"  
        style={{
          'width':'100%',
          'borderRadius':'0 0 0 0',
          'backgroundColor': '#F6F6F6',
          'border': '0px',
          'color':'black'
        }}>
        <span style={{
          'float':'left',
          'fontSize': '14px'
        }}>
        view more
        </span>
          <FontAwesomeIcon style={{
            'color': 'black',
            'float': 'right',
            'paddingTop':'0.1rem'
          }}
          size="lg" icon={faAngleRight} />
        </Button>
        </CardFooter> */}
        </div>
      </Card>
     
      <Modal size="lg" className="modalClass" isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{props.name}</ModalHeader>
        <ModalBody>
        
        주소
        <hr className="my-2"/>
        <div>{props.address} <a href={`https://map.kakao.com/link/to/${props.name},${props.latitude},${props.longitude}`} style={{textDecoration:'none'}}>길찾기</a></div> 
     
        <Map 
          latitude = {props.latitude}
          longitude = {props.longitude}
        />
        

        </ModalBody>
        <ModalFooter>
        <div style={{
          width:'100%',
          overflow:'hidden',
          wordWrap:'break-word'
        }}>
        썸네일 출처
        <hr className="my-2"/>
        <a href={props.img_source} style={{textDecoration:'none'}}>
        <small>
        {props.img_source}
        </small>
        </a>
        </div>
        </ModalFooter>
      </Modal>
      
    </>
  );
};

export default MealCard;