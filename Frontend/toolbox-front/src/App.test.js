import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

test('renders React Test App header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/React Test App/i);
  expect(linkElement).toBeInTheDocument();
});
