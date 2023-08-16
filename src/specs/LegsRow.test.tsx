import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import { clickArrow, getStyles } from './helpers';

describe('When the user wants to interact with the legs row', () => {
  afterEach(cleanup);

  it.each([['legs image 1'], ['legs image 2']])(
    'renders the legs image: %s',
    (altText: string) => {
      render(<App />);
      screen.getByAltText(altText);
    }
  );

  it('shows next legs image when the right arrow is clicked', async () => {
    render(<App />);
    await clickArrow('third right arrow');
    const firstLegsStyle = getStyles('legs image 1');
    const secondLegsStyle = getStyles('legs image 2');
    expect(firstLegsStyle.display).toBe('none');
    expect(secondLegsStyle.display).toBe('initial');
  });

  it('shows previous legs image when the left arrow is clicked', async () => {
    render(<App />);
    await clickArrow('third right arrow');
    await clickArrow('third left arrow');
    const firstLegsStyle = getStyles('legs image 1');
    const secondLegsStyle = getStyles('legs image 2');
    expect(firstLegsStyle.display).toBe('initial');
    expect(secondLegsStyle.display).toBe('none');
  });

  it('loops back to the beginning when the legs count exceeds the amount of legs images', () => {
    render(<App />);
    Array.from(Array(32)).forEach(() => clickArrow('first right arrow'));
    const firstLegsStyle = getStyles('legs image 1');
    expect(firstLegsStyle.display).toBe('initial');
  });

  it('loops to the end when the legs count is lower than 1', async () => {
    render(<App />);
    await clickArrow('third left arrow');
    const lastLegsStyle = getStyles('legs image 33');
    expect(lastLegsStyle.display).toBe('initial');
  });
});
