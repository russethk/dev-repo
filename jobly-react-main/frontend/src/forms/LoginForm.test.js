import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders LoginForm without crashing', () => {
  render(<LoginForm />);
});

test('renders LoginForm correctly', () => {
  const { container } = render(<LoginForm />);
  expect(container).toMatchSnapshot();
});