import { render, screen } from '@testing-library/react';
import App from '../App';
import { clickArrow, getStyles } from './helpers';

describe('When the user wants to interact with the body row', () => {
  it.each([['body image 1'], ['body image 2']])(
    'renders the body image: %s',
    (altText: string) => {
      render(<App />);
      screen.getByAltText(altText);
    }
  );

  it('shows next body image when the right arrow is clicked', async () => {
    render(<App />);
    await clickArrow('second right arrow');
    const firstBodyStyle = getStyles('body image 1');
    const secondBodyStyle = getStyles('body image 2');
    expect(firstBodyStyle.display).toBe('none');
    expect(secondBodyStyle.display).toBe('initial');
  });

  it('shows previous body image when the left arrow is clicked', async () => {
    render(<App />);
    await clickArrow('second right arrow');
    await clickArrow('second left arrow');
    const firstBodyStyle = getStyles('body image 1');
    const secondBodyStyle = getStyles('body image 2');
    expect(firstBodyStyle.display).toBe('initial');
    expect(secondBodyStyle.display).toBe('none');
  });

  it('loops back to the beginning when the body count exceeds the amount of body images', () => {
    render(<App />);
    Array.from(Array(41)).forEach(() => clickArrow('second right arrow'));
    const firstBodyStyle = getStyles('body image 1');
    expect(firstBodyStyle.display).toBe('initial');
  });

  it('loops to the end when the body count is lower than 1', async () => {
    render(<App />);
    await clickArrow('second left arrow');
    const lastBodyStyle = getStyles('body image 41');
    expect(lastBodyStyle.display).toBe('initial');
  });
});
