import { screen } from '@testing-library/react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getStyles, getVisibleImage } from './helpers';

describe('When a user clicks the random button', () => {
  beforeEach(async () => {
    render(<App />);
  });
  afterEach(cleanup);

  it('randomises the head shown', async () => {
    const visibleHead = getVisibleImage('head-image');
    const randomButton = screen.getByAltText('random button');
    await userEvent.click(randomButton);
    const style = getStyles(visibleHead);
    expect(style.display).toBe('none');
  });

  it('randomises the body shown', async () => {
    const visibleBody = getVisibleImage('body-image');
    const randomButton = screen.getByAltText('random button');
    await userEvent.click(randomButton);
    const style = getStyles(visibleBody);
    expect(style.display).toBe('none');
  });

  it('randomises the legs shown', async () => {
    const visibleLegs = getVisibleImage('body-image');
    const randomButton = screen.getByAltText('random button');
    await userEvent.click(randomButton);
    const style = getStyles(visibleLegs);
    expect(style.display).toBe('none');
  });
});
