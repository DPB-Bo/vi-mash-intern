import { Injectable } from '@angular/core';
import { Localization } from '@core/models/localization.model';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public defaultLanguage: string = environment.localization.defaultLanguage;
  public supportedLanguages: Array<string> = [];

  public constructor(
    private translateService: TranslateService
  ) { }

  public init(): void {
    const localization: Localization = environment.localization;
    const languages: Array<string> = localization.languages.map((lang) => lang.code);

    this.supportedLanguages = languages;
    this.defaultLanguage = localization.defaultLanguage;

    this.translateService.addLangs(languages);
    this.translateService.setDefaultLang(localization.defaultLanguage);

    this.translateService.use(localization.defaultLanguage);
  }

  /**
   * Gets the current language.
   * @return string The current language code.
   */
  public get language(): string {
    return this.translateService.currentLang;
  }

  /**
   * Set the current language.
   * Note: The current language is saved to the local storage.
   */
  public set language(language: string) {
    const isSupportedLanguage: boolean = this.supportedLanguages.find((lang) => lang === language) !== null;

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
  }
}
