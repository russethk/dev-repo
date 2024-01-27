import React from 'react';
import { render } from '@testing-library/react';
import ProfileForm from './ProfileForm';
import UserContext from '../UserContext';

const currentUser = {
  username: 'testuser',
  firstName: 'Test',
  lastName: 'User',
  email: 'testuser@gmail.com',
};

const deleteUser = jest.fn();

// Mock context for testing
const Wrapper = ({ children }) => (
  <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>
);

// Smoke test
it('renders without crashing', () => {
  render(<ProfileForm deleteUser={deleteUser} />, { wrapper: Wrapper });
});

// Snapshot test
it('matches snapshot', () => {
  const { asFragment } = render(<ProfileForm deleteUser={deleteUser} />, {
    wrapper: Wrapper,
  });
  expect(asFragment()).toMatchSnapshot();
});
