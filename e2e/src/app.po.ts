import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    await browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css('app-root .content span'))), 5000);
    return element(by.css('app-root .content span')).getText();
  }
}