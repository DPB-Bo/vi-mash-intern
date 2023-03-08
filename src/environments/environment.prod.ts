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
