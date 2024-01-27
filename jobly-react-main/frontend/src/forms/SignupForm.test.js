import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from './SignupForm';

test('renders SignupForm without crashing', () => {
  render(<SignUpForm />);
});


test('renders SignupForm correctly', () => {
  const { container } = render(<SignUpForm />);
  expect(container).toMatchSnapshot();
});
