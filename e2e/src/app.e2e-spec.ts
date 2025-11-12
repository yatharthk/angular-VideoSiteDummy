import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Timeout } from 'protractor/built/util';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await browser.waitForAngularEnabled(false);
    await browser.manage().setTimeouts({implicit: 5000});
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    await browser.sleep(2000);
    expect(await page.getTitleText()).toEqual('videoSite app is running!');
  });

  afterEach(async () => {
    await browser.manage().deleteAllCookies();
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});