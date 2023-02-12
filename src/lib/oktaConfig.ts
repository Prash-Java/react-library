export const oktaConfig = {
    clientId:'0oa8b270n9UKUpktU5d7',
    issuer: 'https://dev-36121013.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openId', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}