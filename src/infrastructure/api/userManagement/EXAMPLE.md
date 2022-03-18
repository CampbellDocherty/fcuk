```typescript
import { MY_API_URL } from '../../constants';
import useFetchApi from '../../useFetchApi';

export type MyEndpointNameRequest = {};

export type MyEndpointNameResponse = {};

const useRequestMyEndpointName = () => {
  const fetchApi = useFetchApi();
  return (myParam: string, requestData: MyEndpointNameRequest) =>
    fetchApi<MyEndpointNameResponse>({
      data: requestData,
      method: 'POST',
      url: `${MY_API_URL}/my-endpoint-path/${myParam}`,
    });
};

export default useRequestMyEndpointName;
```
