import { useAuth0, Auth0ContextInterface } from '@auth0/auth0-react';

const mockUseAuth0 = ({
  isAuthenticated = true,
  user = { name: 'Obi-Wan Kenobi', email: 'obiwan.kenobi@fluidly.com' },
  ...options
}: Partial<Auth0ContextInterface> = {}) => {
  (useAuth0 as jest.MockedFunction<any>).mockReturnValue({
    ...options,
    ...(isAuthenticated ? { user } : null),
    getAccessTokenSilently:
      options.getAccessTokenSilently || jest.fn(() => 'test-token'),
    isAuthenticated,
    loginWithRedirect: options.loginWithRedirect || jest.fn(),
    logout: options.logout || jest.fn(),
  });
};

export default mockUseAuth0;
