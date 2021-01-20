# Mention

## Installation
```bash
# with npm
npm install @tiptap/extension-mention

# with Yarn
yarn add @tiptap/extension-mention
```

## Settings
| Option         | Type     | Default                    | Description                                                                  |
| -------------- | -------- | -------------------------- | ---------------------------------------------------------------------------- |
| HTMLAttributes | `Object` | `{}`                       | Custom HTML attributes that should be added to the rendered HTML tag.        |
| suggestion     | `Object` | `{ char: '@', command: … ` | [Suggestion utility](/api/utilities/suggestion) |

## Settings for suggestions
| Option          | Type       | Default        | Description                                                 |
| --------------- | ---------- | -------------- | ----------------------------------------------------------- |
| char            | `String`   | `'@'`          | The character that triggers the autocomplete popup.         |
| allowSpaces     | `Boolean`  | `false`        | Allows or disallows spaces in suggested items.              |
| startOfLine     | `Boolean`  | `false`        | Trigger the autocomplete popup at the start of a line only. |
| decorationTag   | `String`   | `'span'`       | The HTML tag that should be rendered for the suggestion.    |
| decorationClass | `String`   | `'suggestion'` | A CSS class that should be added to the suggestion.         |
| command         | `Function` | `() => {}'`    | Executed when a suggestion is selected.                     |
| items           | `Function` | `() => {}`     | Pass an array of filtered suggestions, can be async.        |
| render          | `Function` | `() => ({})`   | A render function for the autocomplete popup.               |

## Source code
[packages/extension-mention/](https://github.com/ueberdosis/tiptap-next/blob/main/packages/extension-mention/)

## Usage
<demo name="Nodes/Mention" />