# Github Search Users Sample App

## Engines

- Node >= 14.x

## Add env

### For development

- Create .env.local file
- Copy .env.example and paste to .env.local

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Editor config in need

### Vscode settings

Copy config bellow and paste to .vscode/settings.json

```js
{
  "eslint.validate": ["javascript", "typescript"],
  "editor.tabSize": 2,
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "cSpell.words": [],
  "eslint.lintTask.enable": true,
  "prettier.enable": true,
  "prettier.configPath": ".prettierrc.cjs",
  "files.exclude": {
    "node_modules/": true
  }
}
```

### Vscode extensions in need

- Eslint
- Tslint
- Prettier
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
