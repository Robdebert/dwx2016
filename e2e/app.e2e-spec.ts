import { BookRatingsPage } from './app.po';

describe('book-ratings App', function() {
  let page: BookRatingsPage;

  beforeEach(() => {
    page = new BookRatingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
