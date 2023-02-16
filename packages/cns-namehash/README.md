# @coredomains/cns-namehash

A javascript library for generating CoreDAO Name Service(CNS) namehashes per spec

[Available on NPM](https://www.npmjs.com/package/@coredomains/cns-namehash)


## Installation 

`yarn add @coredomains/cns-namehash`

## Usage

```javascript
import {namehash,normalize} from '@coredomains/cns-namehash'

const hash = namehash('rickey.cns')
// 

// Support normalizing strings to CNS compatibility
const input = '♫.cns'
const normalized = normalize(input)
// 
```

> If your use in browser,need polyfill Buffer

npm install buffer


```typescript 
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
```

## Security Warning

ENS Supports UTF-8 characters, and so many duplicate names are possible. For example:

- faceboоk.cns
- facebook.cns

The first one has non-ascii chars. (control+F on this page and search for facebook, only the second one will match).

namehash.normalize() doesn't automagically remap those, and so other precautions should be taken to avoid user phishing.

**Notice:**
If use in browser,you should import [buffer](https://www.npmjs.com/package/buffer)


## 📝 License
Copyright © 2022 [CoreDAO](https://github.com/coredaodomains).<br />
This project is [MIT](LICENSE) licensed.