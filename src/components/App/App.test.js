import React from 'react';
import App from './App.react.js';

test('Render "My react App!"', () => {
  const testInstance = shallow(<App />);
  expect(testInstance.find('h1').text()).toEqual('My react App!');
});
