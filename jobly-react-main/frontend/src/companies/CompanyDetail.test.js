import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CompanyDetail from './CompanyDetail';

describe('CompanyDetail', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <CompanyDetail />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/companies/handle']}>
        <Route path="/companies/:handle">
          <CompanyDetail />
        </Route>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
