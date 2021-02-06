import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = (props) => {
  return (
    <span
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          margin: '0 auto',
        }}
      >
        <Spinner
          color="danger"
          style={{ width: '2rem', height: '2rem', marginRight: '1rem' }}
        />
        <h3 style={{ display: 'inline' }}>{props.value}</h3>
      </span>
    </span>
  );
};

export default Loading;
