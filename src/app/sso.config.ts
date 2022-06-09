import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://mlaptest.onelogin.com/oidc/2',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '6736efb0-c969-013a-28d5-06ab6d545a9f210819',
  dummyClientSecret: '9cbe7d5ceda2f5bc4200b5da38ef0b51f04f2b1ab07c453ab3f3e6e8debc1b3b',

  requestAccessToken: true,
  oidc: true,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',
  showDebugInformation: true,

  //test

}