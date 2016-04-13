# quickmark-rule-emphasis

Italic / emphasised text matching rule for [quickmark](https://github.com/jameskmonger/quickmark).

## Usage

```javascript
const emphasis = require('quickmark-rule-emphasis');

emphasis('*italic text*');
// {
//     original: '*italic text*',
//     parsed: 'italic text'
// }

emphasis('_italic text_');
// {
//     original: '_italic text_',
//     parsed: 'italic text'
// }

emphasis('**some emphasised text** with a little bit of normal text after');
// {
//     original: '**some emphasised text**',
//     parsed: 'some emphasised text'
// }
```

## License

[MIT](LICENSE)
