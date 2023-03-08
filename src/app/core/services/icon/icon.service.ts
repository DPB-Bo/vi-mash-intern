import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  public constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  public init(): void {
    const domain = (isPlatformServer(this.platformId)) ? 'http://localhost:4200/' : '';

    this.iconRegistry.addSvgIcon('icon-user', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/user.svg'));
    this.iconRegistry.addSvgIcon('icon-team', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-team.svg'));
    this.iconRegistry.addSvgIcon('icon-help', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-help.svg'));
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/logo.svg'));
    this.iconRegistry.addSvgIcon('logoSideNavMenu', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/logo-side-nav-menu.svg'));
    this.iconRegistry.addSvgIcon('icon-plus', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/plus.svg'));
    this.iconRegistry.addSvgIcon('icon-export', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/export.svg'));
    this.iconRegistry.addSvgIcon('icon-pic', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/person-in-charge.svg'));
    this.iconRegistry.addSvgIcon('icon-company', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/shipper.svg'));
    this.iconRegistry.addSvgIcon('icon-product', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/product.svg'));
    this.iconRegistry.addSvgIcon('icon-right', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/angle-right.svg'));
    this.iconRegistry.addSvgIcon('icon-left', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/angle-left.svg'));
    this.iconRegistry.addSvgIcon('icon-delete-red', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-delete-red.svg'));
    this.iconRegistry.addSvgIcon('icon-calendar', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/calendar.svg'));
    this.iconRegistry.addSvgIcon('icon-search-input', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/button-search-input.svg'));
    this.iconRegistry.addSvgIcon('icon-direction', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/direction.svg'));
    this.iconRegistry.addSvgIcon('icon-grid', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/grid.svg'));
    this.iconRegistry.addSvgIcon('icon-holiday', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/holiday.svg'));
    this.iconRegistry.addSvgIcon('icon-location', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/location.svg'));
    this.iconRegistry.addSvgIcon('icon-logical-zone', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/logical-zone.svg'));
    this.iconRegistry.addSvgIcon('icon-map', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/map.svg'));
    this.iconRegistry.addSvgIcon('icon-money', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/money.svg'));
    this.iconRegistry.addSvgIcon('icon-owner', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/owner.svg'));
    this.iconRegistry.addSvgIcon('icon-product-2d', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/product-2d.svg'));
    this.iconRegistry.addSvgIcon('icon-question-mark', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/question-mark.svg'));
    this.iconRegistry.addSvgIcon('icon-setting-many', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/setting-many.svg'));
    this.iconRegistry.addSvgIcon('icon-setting', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/setting.svg'));
    this.iconRegistry.addSvgIcon('icon-supplier', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/supplier.svg'));
    this.iconRegistry.addSvgIcon('icon-tag', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/tag.svg'));
    this.iconRegistry.addSvgIcon('icon-three-dots', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/threedots.svg'));
    this.iconRegistry.addSvgIcon('icon-repository', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/repository.svg'));
    this.iconRegistry.addSvgIcon('icon-report-page', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/report-page.svg'));
    this.iconRegistry.addSvgIcon('icon-adjust', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/adjust.svg'));
    this.iconRegistry.addSvgIcon('icon-pen-edit', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/pen-edit.svg'));
    this.iconRegistry.addSvgIcon('icon-pen', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/pen.svg'));
    this.iconRegistry.addSvgIcon('icon-lock', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/lock.svg'));
    this.iconRegistry.addSvgIcon('icon-news-paper', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/news-paper.svg'));
    this.iconRegistry.addSvgIcon('icon-balance', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/balance.svg'));
    this.iconRegistry.addSvgIcon('icon-message-bubble', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/message-bubble.svg'));
    this.iconRegistry.addSvgIcon('icon-recycle-bin', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/recycle-bin.svg'));
    this.iconRegistry.addSvgIcon('icon-note', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/note.svg'));
    this.iconRegistry.addSvgIcon('icon-prohibit', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/prohibit.svg'));
    this.iconRegistry.addSvgIcon('icon-truck', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/truck.svg'));
    this.iconRegistry.addSvgIcon('icon-products', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/products.svg'));
    this.iconRegistry.addSvgIcon('icon-double-arrows', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/double-arrows.svg'));
    this.iconRegistry.addSvgIcon('icon-report-checked', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/report-checked.svg'));
    this.iconRegistry.addSvgIcon('icon-list', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/list.svg'));
    this.iconRegistry.addSvgIcon('icon-link', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/link.svg'));
    this.iconRegistry.addSvgIcon('icon-close', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/close.svg'));
    this.iconRegistry.addSvgIcon('icon-user-prefix', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-user.svg'));
    this.iconRegistry.addSvgIcon('icon-password', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/lock.svg'));
    this.iconRegistry.addSvgIcon('icon-hidden-password', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/eye-slash.svg'));
    this.iconRegistry.addSvgIcon('icon-show-password', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/eye.svg'));
    this.iconRegistry.addSvgIcon('icon-back', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-back.svg'));
    this.iconRegistry.addSvgIcon('icon-mail', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-mail.svg'));
    this.iconRegistry.addSvgIcon('icon-error', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-error.svg'));
    this.iconRegistry.addSvgIcon('icon-notification', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-notification.svg'));
    this.iconRegistry.addSvgIcon('icon-success', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-success.svg'));
    this.iconRegistry.addSvgIcon('icon-close-dialog', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/close-dialog.svg'));
    this.iconRegistry.addSvgIcon('icon-key', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/key.svg'));
    this.iconRegistry.addSvgIcon('icon-logout', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/logout.svg'));
    this.iconRegistry.addSvgIcon('icon-edit', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/edit.svg'));
    this.iconRegistry.addSvgIcon('button-edit', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/button-edit.svg'));
    this.iconRegistry.addSvgIcon('icon-export-blue', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/export-blue.svg'));
    this.iconRegistry.addSvgIcon('icon-editable', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/editable.svg'));
    this.iconRegistry.addSvgIcon('icon-delete-white', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/delete-white.svg'));
    this.iconRegistry.addSvgIcon('icon-save', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/save.svg'));
    this.iconRegistry.addSvgIcon('icon-cancel', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/cancel.svg'));
    this.iconRegistry.addSvgIcon('icon-len', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-len.svg'));
    this.iconRegistry.addSvgIcon('icon-reload', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/reload.svg'));
    this.iconRegistry.addSvgIcon('icon-show-more', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/show-more.svg'));
    this.iconRegistry.addSvgIcon('icon-delete', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-delete.svg'));
    this.iconRegistry.addSvgIcon('icon-user-list', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-user-list.svg'));
    this.iconRegistry.addSvgIcon('icon-coins', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-coins.svg'));
    this.iconRegistry.addSvgIcon('icon-copy', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-copy.svg'));
    this.iconRegistry.addSvgIcon('icon-copy-disable', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/copy-disable.svg'));
    this.iconRegistry.addSvgIcon('icon-copy-allocation', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-copy-allocation.svg'));
    this.iconRegistry.addSvgIcon('icon-list', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-list.svg'));
    this.iconRegistry.addSvgIcon('icon-open-box', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-open-box.svg'));
    this.iconRegistry.addSvgIcon('icon-circle-arrow', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-circle-arrow.svg'));
    this.iconRegistry.addSvgIcon('icon-receipt', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-receipt.svg'));
    this.iconRegistry.addSvgIcon('icon-unlock', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-unlock.svg'));
    this.iconRegistry.addSvgIcon('icon-lock', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-lock.svg'));
    this.iconRegistry.addSvgIcon('info', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/info.svg'));
    this.iconRegistry.addSvgIcon('info-disable', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/info-disable.svg'));
    this.iconRegistry.addSvgIcon('icon-search-disabled', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-search-disabled.svg'));
    this.iconRegistry.addSvgIcon('icon-batch', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/batch-list.svg'));
    this.iconRegistry.addSvgIcon('icon-confirm', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-confirm.svg'));
    this.iconRegistry.addSvgIcon('icon-exclamation-circle-delete', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/exclamation-circle-delete.svg'));
    this.iconRegistry.addSvgIcon('icon-print', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/print.svg'));
    this.iconRegistry.addSvgIcon('icon-print-delivery', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/print-delivery.svg'));
    this.iconRegistry.addSvgIcon('icon-double-check', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-double-check.svg'));
    this.iconRegistry.addSvgIcon('icon-order', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/order.svg'));
    this.iconRegistry.addSvgIcon('icon-play', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/play.svg'));
    this.iconRegistry.addSvgIcon('icon-holiday1', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/holidays1.svg'));
    this.iconRegistry.addSvgIcon('icon-cancel-white', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/icon-cancel-white.svg'));
    this.iconRegistry.addSvgIcon('icon-vector', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/vector.svg'));
  }
}
