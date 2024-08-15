import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('shows loading message when loading is true', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
