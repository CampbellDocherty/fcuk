import { screen } from '@testing-library/react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

describe('When a user lands on the home page', () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(cleanup);

  it.each([
    ['first left arrow'],
    ['second left arrow'],
    ['third left arrow'],
    ['first right arrow'],
    ['second right arrow'],
    ['third right arrow'],
    ['no format title'],
    ['presents title'],
    ['title accent'],
    ['random button'],
    ['screenshot button'],
  ])('shows the %s', (altText: string) => {
    screen.getByAltText(altText);
  });

  it('shows dummy titles', () => {
    screen.getByText('FC-UK');
  });
});
