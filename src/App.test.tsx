import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import {
  waitForEventToBeTrackedOnce,
  waitForPageToBeTrackedOnce,
} from './test/analytics';
import render from './test/render';

describe('when an anonymous user views the app', () => {
  beforeEach(async () => {
    await render(<App />, { asAnonymous: true });
    await screen.findByText('Coming soon');
  });

  it('tracks the page view', async () => {
    await waitForPageToBeTrackedOnce('/');
  });

  it('shows the feature flagged text', async () => {
    expect(
      screen.getByText('If you can see this, feature flags are working')
    ).toBeInTheDocument();
  });

  it('shows a login option', () => {
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(() => screen.getByText('Logout')).toThrow();
  });
});

describe('when an anonymous user views the app and the test feature flag is off', () => {
  beforeEach(async () => {
    await render(<App />, {
      asAnonymous: true,
      featureFlags: { test: false },
    });
    await screen.findByText('Coming soon');
  });

  it('does not show the feature flagged text', () => {
    expect(() =>
      screen.getByText('If you can see this, feature flags are working')
    ).toThrow();
  });
});

describe('when an anonymous user clicks the public link', () => {
  beforeEach(async () => {
    await render(<App />, { asAnonymous: true });
    await screen.findByText('Coming soon');

    fireEvent.click(screen.getByText('Test a public route'));
  });

  it('tracks the event', async () => {
    await waitForEventToBeTrackedOnce('CLICKED_EXAMPLE_LINK', {
      exampleType: 'public-route',
    });
  });

  it('tracks the page view', async () => {
    await waitForPageToBeTrackedOnce('/public');
  });

  it('shows the public page', () => {
    expect(
      screen.getByText('If you can see this, the router is working')
    ).toBeInTheDocument();
  });
});

describe('when an anonymous user clicks the private link', () => {
  beforeEach(async () => {
    await render(<App />, { asAnonymous: true });
    await screen.findByText('Coming soon');

    fireEvent.click(screen.getByText('Test a private route'));
  });

  it('tracks the event', async () => {
    await waitForEventToBeTrackedOnce('CLICKED_EXAMPLE_LINK', {
      exampleType: 'private-route',
    });
  });

  it('tracks the page view', async () => {
    await waitForPageToBeTrackedOnce('/private');
  });

  it('redirects to login', async () => {
    await screen.findByText('Redirecting you to login');
  });
});

describe('when an authenticated user views the app', () => {
  beforeEach(async () => {
    await render(<App />);
    await screen.findByText('Coming soon');
  });

  it('shows a logout option', () => {
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(() => screen.getByText('Login')).toThrow();
  });
});

describe('when an authenticated user clicks the private link', () => {
  beforeEach(async () => {
    await render(<App />);
    await screen.findByText('Coming soon');

    fireEvent.click(screen.getByText('Test a private route'));
  });

  it('shows the private page', async () => {
    await screen.findByText('If you can see this, you are authenticated!');
  });

  it('shows their fluidly user id', async () => {
    await screen.findByText('Your Fluidly user ID is 12345.');
  });
});
