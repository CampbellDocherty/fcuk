import { screen } from '@testing-library/react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import React from 'react';
import render from '../../test/render';
import useFeatureFlags from './useFeatureFlags';

const TestComponent = () => {
  const { test } = useFeatureFlags();

  return <>{test ? 'Flag is true' : 'Flag is false'}</>;
};

describe('when a component uses the hook', () => {
  beforeEach(async () => {
    await render(<TestComponent />);
  });

  it('calls the launch darkly useFlags hook and returns the flags', () => {
    expect(useFlags).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Flag is true')).toBeInTheDocument();
  });
});
