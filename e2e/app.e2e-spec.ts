import { CloudAPIStorePage } from './app.po';

describe('cloud-apistore App', function() {
  let page: CloudAPIStorePage;

  beforeEach(() => {
    page = new CloudAPIStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
