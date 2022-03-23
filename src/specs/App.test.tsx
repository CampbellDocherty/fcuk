import { screen } from '@testing-library/react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    ['fcuk title'],
    ['random button'],
  ])('shows the %s', (altText: string) => {
    screen.getByAltText(altText);
  });
});

describe('When the user wants to interact with the head row', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  it.each([['head image 1'], ['head image 2']])(
    'shows the head image: %s',
    (altText: string) => {
      screen.getByAltText(altText);
    }
  );

  it('shows next head image when the first right arrow is clicked', () => {
    const headArrowRight = screen.getByAltText('first right arrow');
    userEvent.click(headArrowRight);
    const firstHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 1')
    );
    const secondHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 2')
    );
    expect(firstHeadStyle.visibility).toBe('hidden');
    expect(secondHeadStyle.visibility).toBe('visible');
  });

  it('shows previous head image when the first left arrow is clicked', () => {
    const headArrowRight = screen.getByAltText('first right arrow');
    userEvent.click(headArrowRight);
    const headArrowLeft = screen.getByAltText('first left arrow');
    userEvent.click(headArrowLeft);
    const firstHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 1')
    );
    const secondHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 2')
    );
    expect(firstHeadStyle.visibility).toBe('visible');
    expect(secondHeadStyle.visibility).toBe('hidden');
  });

  it('loops back to the beginning when the head count exceeds the amount of head images', () => {
    const headArrowRight = screen.getByAltText('first right arrow');
    userEvent.click(headArrowRight);
    userEvent.click(headArrowRight);
    const firstHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 1')
    );
    expect(firstHeadStyle.visibility).toBe('visible');
  });

  it('loops to the end when the head count is lower than 1', () => {
    const headArrowLeft = screen.getByAltText('first left arrow');
    userEvent.click(headArrowLeft);
    const lastHeadStyle = window.getComputedStyle(
      screen.getByAltText('head image 2')
    );
    expect(lastHeadStyle.visibility).toBe('visible');
  });
});
