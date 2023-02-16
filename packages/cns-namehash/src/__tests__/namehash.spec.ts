import cnsUtil, { namehash, normalize } from '../index';

describe('namehash', () => {
  // namehash test
  describe('hash', () => {
    it('empty name', () => {
      const input = '';
      const zeroExpected =
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      const output = cnsUtil.hashed(input);
      expect(output).toEqual(zeroExpected);
    });

    it('TLD eth', () => {
      const input = 'eth';
      const ethExpected =
        '0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae';
      expect(namehash(input)).toEqual(ethExpected);
    });

    it('TLD core', () => {
      const input = 'core';
      const ethExpected =
        '0xe4d63c8c37eeb1307ca8868d95e632445f0fb69aff462960c4f050f4641b6fed';
      expect(namehash(input)).toEqual(ethExpected);
    });

    it('TLD empty label', () => {
      const input = '';
      expect(cnsUtil.sha3(input)).toEqual(null);
    });

    it('TLD core label', () => {
      const input = 'core';
      const ethExpected =
        '0xc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f8';
      expect(cnsUtil.sha3(input)).toEqual(ethExpected);
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
