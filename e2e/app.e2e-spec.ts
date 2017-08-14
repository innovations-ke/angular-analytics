import { AngularAnalyticsPage } from './app.po';

describe('angular-analytics App', () => {
  let page: AngularAnalyticsPage;

  beforeEach(() => {
    page = new AngularAnalyticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
