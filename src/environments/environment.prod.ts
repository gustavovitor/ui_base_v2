const PrimaryWebService = 'https://PRODUCTION_URL_HERE:8080/api/';

export const environment = {
  production: true,

  TokenWhitelistedDomains: [/PRODUCTION_URL_HERE:8080/],
  TokenBlacklistedRoutes: [/\/api\/oauth\/token/, /\/api\/public/],

  WebServiceList: {
    URLAuth: PrimaryWebService + 'oauth/token',
    URLPublicAuthUserResource: PrimaryWebService + 'public/user',
    URLLogout: PrimaryWebService + 'token/revoke'
  }
};
