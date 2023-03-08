export interface Localize {
  code: string;
  name: string;
  culture: string;
}

export interface Localization {
  languages: Array<Localize>;
  defaultLanguage: string;
}
