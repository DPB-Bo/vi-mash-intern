// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  header: 'Zaiko',
  localization: {
    languages: [
      { code: 'en', name: 'EN', culture: 'en-EN' },
      { code: 'ja', name: 'JP', culture: 'ja-JP' }
    ],
    defaultLanguage: 'ja'
  },
  HOME_PAGE: 'http://localhost:4200',
  API_SERVICE: 'http://localhost:8085',
  API_AUTH: 'http://localhost:8086',
  DOWNLOAD_CSV: 'http://localhost:4200/csv',
  pageSize: 50,
  pageIndex: 1
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
