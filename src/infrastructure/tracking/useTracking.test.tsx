import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { mockWindowAnalytics } from '../../test/mocks/mockWindowAnalytics';
import render from '../../test/render';
import useTracking from './useTracking';

const mockSegmentNotInitialized = () =>
  mockWindowAnalytics({
    initialized: false,
  });

const TestComponent = () => {
  const { trackEvent, trackPage } = useTracking();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          trackEvent('DID_SOMETHING', { foo: 'bar' });
        }}
      >
        Track an event
      </button>
      <button
        type="button"
        onClick={() => {
          trackPage('Some Page', { baz: 'bob' });
        }}
      >
        Track a page with specific name
      </button>
      <button
        type="button"
        onClick={() => {
          trackPage();
        }}
      >
        Track a page using pathname
      </button>
    </>
  );
};

describe('when a component has not yet called trackEvent', () => {
  beforeEach(async () => {
    await render(<TestComponent />);
  });

  it('does not call window.analytics.track', () => {
    expect(window.analytics.track).not.toHaveBeenCalled();
  });
});

describe('when a component calls trackEvent', () => {
  beforeEach(async () => {
    await render(<TestComponent />);
    fireEvent.click(screen.getByText('Track an event'));
  });

  it('calls window.analytics.track with the provided event name and properties', async () => {
    expect(window.analytics.track).toHaveBeenCalledWith('DID_SOMETHING', {
      foo: 'bar',
    });
  });
});

describe('when a component calls trackEvent before segment is initialized', () => {
  beforeEach(async () => {
    mockSegmentNotInitialized();
    await render(<TestComponent />);
    fireEvent.click(screen.getByText('Track an event'));
  });

  it('does not call window.analytics.track', async () => {
    expect(window.analytics.track).not.toHaveBeenCalled();
  });
});

describe('when a component calls trackPage', () => {
  beforeEach(async () => {
    await render(<TestComponent />);
    fireEvent.click(screen.getByText('Track a page with specific name'));
  });

  it('calls window.analytics.page with the provided page name and properties', async () => {
    expect(window.analytics.page).toHaveBeenCalledWith('Some Page', {
      baz: 'bob',
    });
  });
});

describe('when a component calls trackPage without a specific page name', () => {
  beforeEach(async () => {
    await render(<TestComponent />, { pathname: '/foo/123/bar/456' });
    fireEvent.click(screen.getByText('Track a page using pathname'));
  });

  it('calls window.analytics.page with the current pathname, wildcarding numeric id portions', async () => {
    expect(window.analytics.page).toHaveBeenCalledWith(
      '/foo/*/bar/*',
      expect.anything()
    );
  });
});

describe('when a component calls trackPage before segment is initialized', () => {
  beforeEach(async () => {
    mockSegmentNotInitialized();
    await render(<TestComponent />);
    fireEvent.click(screen.getByText('Track a page with specific name'));
  });

  it('does not call window.analytics.page', async () => {
    expect(window.analytics.page).not.toHaveBeenCalled();
  });
});

describe('when a component calls trackPage where the window has an isFluidlyUser query string', () => {
  beforeEach(async () => {
    await render(<TestComponent />, {
      pathname: '?isFluidlyUser=true',
    });
    fireEvent.click(screen.getByText('Track a page with specific name'));
  });

  it('includes an isFluidlyUser flag in the window.analytics.page call', async () => {
    expect(window.analytics.page).toHaveBeenCalledWith(
      'Some Page',
      expect.objectContaining({
        isFluidlyUser: true,
      })
    );
  });
});
