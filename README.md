# next-match
> Math groups with next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-match
```

## usage
```js
import '@jswork/next-match';

const str = '/api/v1/{id}/{uuid}/{a.b}';

nx.match(str, /{(.*?)}/g, 0);   // [ '{id}', '{uuid}', '{a.b}' ]
nx.match(str, /{(.*?)}/g, 1);   // ['id', 'uuid', 'a.b']
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-match/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-match
[version-url]: https://npmjs.org/package/@jswork/next-match

[license-image]: https://img.shields.io/npm/l/@jswork/next-match
[license-url]: https://github.com/afeiship/next-match/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-match
[size-url]: https://github.com/afeiship/next-match/blob/master/dist/next-match.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-match
[download-url]: https://www.npmjs.com/package/@jswork/next-match
