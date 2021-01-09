const PrimaryWebService = 'https://PRODUCTION_URL_HERE:8080/api/';

export const environment = {
  production: true,

  TokenWhitelistedDomains: [/PRODUCTION_URL_HERE:8080/],
  TokenBlacklistedRoutes: [/\/oauth\/token/],

  WebServiceList: {
    URLAuth: PrimaryWebService + 'oauth/token',
    URLUser: PrimaryWebService + 'user',
    URLLogout: PrimaryWebService + 'token/revoke'
  }
};
