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
    expect(firstHeadStyle.display).toBe('none');
  });

  it('randomises the body shown', () => {
    const firstBodyStyle = getStyles('body image 1');
    expect(firstBodyStyle.display).toBe('none');
  });

  it('randomises the legs shown', () => {
    const firstLegsStyle = getStyles('legs image 1');
    expect(firstLegsStyle.display).toBe('none');
  });
});
