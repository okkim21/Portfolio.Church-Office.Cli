import { Portfolio.ChurchOfficePage } from './app.po';

describe('portfolio.church-office App', () => {
  let page: Portfolio.ChurchOfficePage;

  beforeEach(() => {
    page = new Portfolio.ChurchOfficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
