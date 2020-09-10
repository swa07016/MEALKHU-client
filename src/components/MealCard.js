import React, { useState } from 'react';
import { 
  Card, 
  CardBody, 
  CardTitle, 
  CardText,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } 
from 'reactstrap';
import Map from './Map';
import './MealCard.css';


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
          <img style={{
            width:'100%',
            paddingTop:'100%',
            backgroundImage: `url(https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn${props.img}?${Date.now()})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
          }}  
          />        
          <CardBody>
            <CardTitle className="text-center"><strong>{props.name}</strong></CardTitle>
            <CardText className="text-center">
              <small>{props.menu != 'null' ? props.menu : props.type}</small><br/>
              <small style={{color:'#940f0f'}}>{(props.price != 'null')? `${props.price}￦` : ''}</small>
            </CardText>
          </CardBody>
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