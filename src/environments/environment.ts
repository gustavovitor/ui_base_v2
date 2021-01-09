const PrimaryWebService = 'http://localhost:8080/api/';

export const environment = {
  production: false,

  TokenWhitelistedDomains: [/localhost:8080/],
  TokenBlacklistedRoutes: [/\/oauth\/token/],

  WebServiceList: {
    URLAuth: PrimaryWebService + 'oauth/token',
    URLUser: PrimaryWebService + 'user',
    URLLogout: PrimaryWebService + 'token/revoke'
  }
};
