import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from './CompanyList';

describe('CompanyList', () => {
  test('renders without errors', () => {
    render(<CompanyList />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CompanyList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
