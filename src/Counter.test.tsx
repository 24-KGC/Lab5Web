import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter.tsx';

test('initial count is 0', () => {
  render(<Counter />);
  expect(screen.getByText(/Count:/)).toHaveTextContent('Count: 0');
});

test('increments count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText(/Count:/)).toHaveTextContent('Count: 1');
});

test('decrements count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Decrement'));
  expect(screen.getByText(/Count:/)).toHaveTextContent('Count: -1');
});

test('resets count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText(/Count:/)).toHaveTextContent('Count: 0');
});
