import { FriendmastiPage } from './app.po';

describe('friendmasti App', () => {
  let page: FriendmastiPage;

  beforeEach(() => {
    page = new FriendmastiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
