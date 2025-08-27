import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm.tsx';
import '@testing-library/jest-dom';
test('renders with empty inputs', () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/Email/)).toHaveValue('');
  expect(screen.getByLabelText(/Password/)).toHaveValue('');
});

test('shows validation error for invalid email', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'invalid' } });
  fireEvent.change(screen.getByLabelText(/Password/), { target: { value: '123456' } });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText(/Invalid email/)).toBeInTheDocument();
});

test('shows validation error for short password', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Password/), { target: { value: '123' } });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText(/Password too short/)).toBeInTheDocument();
});

test('submit button disabled when invalid', () => {
  render(<LoginForm />);
  expect(screen.getByText('Login')).toBeDisabled();
});

test('shows success message on valid submit', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Password/), { target: { value: '123456' } });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText(/Login successful/)).toBeInTheDocument();
});
