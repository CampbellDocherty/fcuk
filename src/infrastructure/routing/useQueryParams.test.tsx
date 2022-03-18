import { screen } from '@testing-library/react';
import React from 'react';
import render from '../../test/render';
import useQueryParams from './useQueryParams';

const TestComponent = () => {
  const queryParams = useQueryParams();

  return <p>Query Params: {JSON.stringify(queryParams)}</p>;
};

describe('when the hook is called on a page where the window does not have a query string', () => {
  beforeEach(async () => {
    await render(<TestComponent />);
  });

  it('returns an empty object', async () => {
    screen.getByText('Query Params: {}');
  });
});

describe('when the hook is called on a page where the window has a query string', () => {
  beforeEach(async () => {
    await render(<TestComponent />, {
      pathname: '?foo=bar&baz=bob&testing=true',
    });
  });

  it('returns the query params as an object', async () => {
    screen.getByText('"foo":"bar"', { exact: false });
    screen.getByText('"baz":"bob"', { exact: false });
    screen.getByText('"testing":"true"', { exact: false });
  });
});
