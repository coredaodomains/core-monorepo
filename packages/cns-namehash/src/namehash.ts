/* eslint-disable @typescript-eslint/no-var-requires */
import uts46 from 'idna-uts46-hx';
import sha from 'js-sha3';

export function normalize(name: string): string {
  return name ? uts46.toUnicode(name, { useStd3ASCII: true }) : name;
}

export function namehash(inputName: string): string {
  let node = '';
  for (let i = 0; i < 32; i++) {
    node += '00';
  }

  const name = normalize(inputName);
  if (name) {
    const labels = name.split('.');

    // eslint-disable-next-line for-direction
    for (let i = labels.length - 1; i >= 0; i--) {
      const labelSha = sha.keccak256(labels[i]);
      node = sha.keccak256(Buffer.from(node + labelSha, 'hex'));
    }
  }

  return '0x' + node;
}
