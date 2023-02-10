import cnsUtil, { namehash, normalize } from '../index';

describe('namehash', () => {
  // namehash test
  describe('hash', () => {
    it('empty name', () => {
      const input = '';
      const zeroExpected =
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      const output = cnsUtil.hash(input);
      expect(output).toEqual(zeroExpected);
    });

    it('TLD eth', () => {
      const input = 'eth';
      const ethExpected =
        '0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae';
      expect(namehash(input)).toEqual(ethExpected);
    });
  });

  describe('normalize', () => {
    it('normalize ascii domain', () => {
      const input = 'foo.cns'; // latin chars only
      const normalized = 'foo.cns';
      const output = normalize(input);
      expect(output).toEqual(normalized);
    });

    it('normalize capitalized domain', () => {
      const input = 'Foo.eth'; // latin chars only
      const normalized = 'foo.eth';
      const output = normalize(input);
      expect(output).toEqual(normalized);
    });

    it('normalize emoji domain', () => {
      const input = '🦚.eth';
      const normalized = '🦚.eth';
      const output = cnsUtil.normalize(input);
      expect(output).toEqual(normalized);
    });
  });
});
