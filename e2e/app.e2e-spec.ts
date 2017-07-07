import { PcaPage } from './app.po';

describe('pca App', () => {
  let page: PcaPage;

  beforeEach(() => {
    page = new PcaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
