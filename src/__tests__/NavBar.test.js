import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import store from '../redux/store';
import '@testing-library/jest-dom';

it('Check if the component navbar container is there', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('nav');
  expect(container).toBeInTheDocument();
});
