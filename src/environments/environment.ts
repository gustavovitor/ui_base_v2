const PrimaryWebService = 'http://localhost:8080/api/';

export const environment = {
  production: false,

  TokenWhitelistedDomains: [/localhost:8080/],
  TokenBlacklistedRoutes: [/\/api\/oauth\/token/, /\/api\/public/],

  WebServiceList: {
    URLAuth: PrimaryWebService + 'oauth/token',
    URLPublicAuthUserResource: PrimaryWebService + 'public/user',
    URLLogout: PrimaryWebService + 'token/revoke'
  }
};
