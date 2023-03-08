import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private cache = new Map<string, string>();
  public constructor(public translate: TranslateService) { }

  public get(key: string): string {
    const value = this.cache.get(key);

    if (value) {
      return value;
    } else {
      this.translate.stream(key).subscribe((translation) => {
        this.cache.set(key, translation);
      });

      return this.cache.get(key) || '';
    }
  }
}
