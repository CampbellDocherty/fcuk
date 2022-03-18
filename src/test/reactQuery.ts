import { setLogger } from 'react-query';

const disableReactQueryLogger = () => {
  setLogger({
    error: () => {},
    log: () => {},
    warn: () => {},
  });
};

export { disableReactQueryLogger };
