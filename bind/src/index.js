import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Bind';
import Map from './App';
import Background from './Bgcolor';
import Form from './Todo';




ReactDOM.render(
  <React.Fragment>
  
  {/* <App /> */}
  {/* <Map /> */}
  {/* <Background /> */}

  <Form/>
  </React.Fragment>

  ,document.getElementById('root')
);