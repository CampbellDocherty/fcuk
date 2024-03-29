import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import App from '../App';
import { clickArrow, getStyles } from './helpers';

describe('When the user wants to interact with the head row', () => {
  it.each([['head image 1'], ['head image 2']])(
    'shows the head image: %s',
    (altText: string) => {
      render(<App />);
      screen.getByAltText(altText);
    }
  );

  it('shows next head image when the first right arrow is clicked', async () => {
    render(<App />);
    await clickArrow('first right arrow');
    const firstHeadStyle = getStyles('head image 1');
    const secondHeadStyle = getStyles('head image 2');
    expect(firstHeadStyle.display).toBe('none');
    expect(secondHeadStyle.display).toBe('initial');
  });

  it('shows previous head image when the first left arrow is clicked', async () => {
    render(<App />);
    await clickArrow('first right arrow');
    await clickArrow('first left arrow');
    const firstHeadStyle = getStyles('head image 1');
    const secondHeadStyle = getStyles('head image 2');
    expect(firstHeadStyle.display).toBe('initial');
    expect(secondHeadStyle.display).toBe('none');
  });

  it('loops back to the beginning when the head count exceeds the amount of head images', () => {
    render(<App />);
    Array.from(Array(41)).forEach(() => clickArrow('first right arrow'));
    const firstHeadStyle = getStyles('head image 1');
    expect(firstHeadStyle.display).toBe('initial');
  });

  it('loops to the end when the head count is lower than 1', async () => {
    render(<App />);
    await clickArrow('first left arrow');
    const lastHeadStyle = getStyles('head image 41');
    expect(lastHeadStyle.display).toBe('initial');
  });
});
