// this can be removed when https://github.com/axios/axios/pull/3816 is released in the lib
// eslint-disable functional/no-method-signature
declare module 'axios' {
  interface AxiosStatic {
    isAxiosError<T = any>(payload: any): payload is AxiosError<T>;
  }
}

export {};
