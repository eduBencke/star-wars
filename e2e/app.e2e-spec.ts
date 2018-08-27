import { ProjetoStarwarsPage } from './app.po';

describe('projeto-starwars App', function() {
  let page: ProjetoStarwarsPage;

  beforeEach(() => {
    page = new ProjetoStarwarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
