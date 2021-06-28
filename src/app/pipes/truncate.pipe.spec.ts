import { StringTruncate } from './truncate.pipe';

describe('FilterPipe', () => {
  let filterPipe: StringTruncate;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new StringTruncate();
  });

  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should be called transform function with more than 64 characters', () => {
      let str = "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis"
      let result = filterPipe.transform(str);
      expect(result).toBe(str.slice(0,64));
  });

  it('should be called transform function with less than 64 characters', () => {
    let str = "quasi aspernatur\naut"
   let result = filterPipe.transform(str);
    expect(result).toBe(str);
});

});
