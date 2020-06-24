import { PurifyHTMLPipe } from './purify-html.pipe';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('PurifyHTMLPipe', () => {
  let domSanitizer: DomSanitizer
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurifyHTMLPipe],
      providers: [DomSanitizer]
    });

    domSanitizer = TestBed.get(DomSanitizer);
  });
  it('create an instance', () => {
    const pipe = new PurifyHTMLPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
