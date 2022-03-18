import { userManagementApi } from './userManagementApi';

const setDefaultResponses = () => {
  userManagementApi.me.getDefaultTestUser();
};

export default setDefaultResponses;
