// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.spotify.com/v1',
  VITE_CLIENT_ID: '628dc4e71f6247479d01068c00585ac2',
  VITE_CLIENT_SECRET: '4ea666762f934b319573cfb0c7c74c77',
  VITE_REDIRECT_URI: 'http://localhost:4200/login',
  VITE_AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
