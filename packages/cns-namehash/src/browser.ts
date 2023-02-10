import { namehash, normalize } from './namehash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).CnsHash = { hash: namehash, normalize: normalize };

console.log(
  'Method "CnsHash" was added to the window object. You can try it yourself by just entering " CnsHash.hash()"',
);
