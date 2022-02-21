import { UserManagerSettings } from 'oidc-client';

export const oidcConfig: UserManagerSettings = {
  authority: `${process.env.REACT_APP_IDENTITY_URL}`,
  client_id: `${process.env.REACT_APP_CLIENT_ID}`,
  client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
  redirect_uri: `${process.env.REACT_APP_REDIRECT_URL}`,
  silent_redirect_uri: `${process.env.REACT_APP_SILENT_REDIRECT_URL}`,
  post_logout_redirect_uri: `${process.env.REACT_APP_POST_LOGOUT_REDIRECT_URL}`,
  response_type: `${process.env.REACT_APP_RESPONSE_TYPE}`,
  scope: `${process.env.REACT_APP_SCOPE}`,
  automaticSilentRenew: true,
};

export default oidcConfig;
