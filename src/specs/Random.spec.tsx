import { screen } from '@testing-library/react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getStyles } from './helpers';

describe('When a user clicks the random button', () => {
  beforeEach(() => {
    render(<App />);
    const randomButton = screen.getByAltText('random button');
    userEvent.click(randomButton);
  });
  afterEach(cleanup);

  it('randomises the head shown', () => {
    const firstHeadStyle = getStyles('head image 1');
    const secondHeadStyle = getStyles('head image 2');
    expect(firstHeadStyle.display).toBe('none');
    expect(secondHeadStyle.display).toBe('initial');
  });

  it('randomises the body shown', () => {
    const firstBodyStyle = getStyles('body image 1');
    const secondBodyStyle = getStyles('body image 2');
    expect(firstBodyStyle.display).toBe('none');
    expect(secondBodyStyle.display).toBe('initial');
  });

  it('randomises the legs shown', () => {
    const firstLegsStyle = getStyles('legs image 1');
    const secondLegsStyle = getStyles('legs image 2');
    expect(firstLegsStyle.display).toBe('none');
    expect(secondLegsStyle.display).toBe('initial');
  });
});
