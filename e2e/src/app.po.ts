import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl) as Promise<void>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}