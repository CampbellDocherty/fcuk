import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
    ['fcuk title'],
    ['random button'],
  ])('shows the %s', (altText: string) => {
    screen.getByAltText(altText);
  });

  it.each([['head image 1']])('shows the head image: %s', (altText: string) => {
    screen.getByAltText(altText);
  });

  it('shows next head image when the first right arrow is clicked', () => {
    const headArrowRight = screen.getByAltText('first right arrow');
    userEvent.click(headArrowRight);
    screen.getByAltText('head image 2');
  });
});
