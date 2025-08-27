import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders Lab 5 Exercises heading', () => {
  render(<App />);
  expect(screen.getByText(/Lab 5 Exercises/)).toBeInTheDocument();
});
