import { PurifyHTMLPipe } from './purify-html.pipe';

describe('PurifyHTMLPipe', () => {
  it('create an instance', () => {
    const pipe = new PurifyHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});
