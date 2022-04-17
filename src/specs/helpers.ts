import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const clickArrow = async (altText: string) => {
  const arrowRight = screen.getByAltText(altText);
  await userEvent.click(arrowRight);
};

export const getStyles = (altText: string) => {
  return window.getComputedStyle(screen.getByAltText(altText));
};

export const getVisibleImage = (testId: string) => {
  const images = screen.getAllByTestId(testId);
  const visibleImage: any = images.filter((image: any) => {
    const styles = getStyles(image.alt);
    if (styles.display === 'initial') {
      return image.alt;
    }
  })[0];
  return visibleImage.alt;
};
