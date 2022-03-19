import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const clickArrow = (altText: string) => {
  const arrowRight = screen.getByAltText(altText);
  userEvent.click(arrowRight);
};

export const getStyles = (altText: string) => {
  return window.getComputedStyle(screen.getByAltText(altText));
};
