import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('it works', () => {
  render(<App />);

  // buttons
  const minusButton = screen.getByText(/-1/i);
  const plusButton = screen.getByText(/\+1/i);

  // get counter
  const getCounter = () => screen.getByTestId('counter');

  // starting render
  expect(minusButton).toBeInTheDocument();
  expect(plusButton).toBeInTheDocument();
  expect(getCounter()).toBeInTheDocument();
  expect(getCounter()).toHaveTextContent('0');

  // counter is working
  userEvent.click(minusButton);
  expect(getCounter()).toHaveTextContent('-1');
  userEvent.click(plusButton);
  expect(getCounter()).toHaveTextContent('0');
  userEvent.click(plusButton);
  expect(getCounter()).toHaveTextContent('1');
});
