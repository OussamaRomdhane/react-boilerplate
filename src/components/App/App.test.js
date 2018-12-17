import React from 'react';
import App from './App.component.js';

test('Render "My React App!"', () => {
  const testInstance = shallow(<App />);
  expect(testInstance.find('h1').text()).toEqual('My React App!');
});
