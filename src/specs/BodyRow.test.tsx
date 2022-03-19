import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import { clickArrow, getStyles } from './helpers';

describe('When the user wants to interact with the body row', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  it.each([['body image 1'], ['body image 2']])(
    'renders the body image: %s',
    (altText: string) => {
      screen.getByAltText(altText);
    }
  );

  it('shows next body image when the right arrow is clicked', () => {
    clickArrow('second right arrow');
    const firstBodyStyle = getStyles('body image 1');
    const secondBodyStyle = getStyles('body image 2');
    expect(firstBodyStyle.visibility).toBe('hidden');
    expect(secondBodyStyle.visibility).toBe('visible');
  });

  it('shows previous head image when the left arrow is clicked', () => {
    clickArrow('second right arrow');
    clickArrow('second left arrow');
    const firstBodyStyle = getStyles('body image 1');
    const secondBodyStyle = getStyles('body image 2');
    expect(firstBodyStyle.visibility).toBe('visible');
    expect(secondBodyStyle.visibility).toBe('hidden');
  });

  it('loops back to the beginning when the body count exceeds the amount of body images', () => {
    clickArrow('second right arrow');
    clickArrow('second right arrow');
    const firstBodyStyle = getStyles('body image 1');
    expect(firstBodyStyle.visibility).toBe('visible');
  });

  it('loops to the end when the body count is lower than 1', () => {
    clickArrow('second left arrow');
    const lastBodyStyle = getStyles('body image 2');
    expect(lastBodyStyle.visibility).toBe('visible');
  });
});
