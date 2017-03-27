import { SimplewebsiteAngular2Page } from './app.po';

describe('simplewebsite-angular2 App', () => {
  let page: SimplewebsiteAngular2Page;

  beforeEach(() => {
    page = new SimplewebsiteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
