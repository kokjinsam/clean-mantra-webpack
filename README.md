# Clean Project

## Major features:

1. SSR
2. React
3. Mantra
4. Redux
5. Webpack

## Minor Features:

1. kadira:dochead for SEO
2. webpack:postcss for css
3. JSX control statements
4. ImmutableJS
5. normalize.css

etc. For more see package.json.

### Installation

```
$ git clone https://github.com/sammkj/clean-mantra-webpack.git myapp
$ cd myapp
$ npm install
$ meteor
```

### Version

Project Version: 1.3-rc.3
Meteor Version: 1.3-rc.3

### Atom Configurations

Downloads these packages:

- linter
- linter-eslint
- linter-stylelint
- language-babel
- language-javascript-jsx

*These are not necessary but will tremendously speed up your app development*

### Styling

App style configurations can be found in `/client/configs/styles`.

Files:

1. base.import.css - override normalize.css
2. fonts.import.css - Roboto, material-icons
3. typography.import.css - Material Design font sizes

#### Fonts

Roboto as default.

Issues:
- Unable to import fonts in fonts.import.css

### Redux

Redux is used to maintain state for components and actions.

A component should only use Redux to store state if and only if the component state will affect other components.

### DocHead

Currently using a hot-fix `kadira:dochead`.

Future:
- Change to use official package

### Linting

ESLint is using `eslint-config-airbnb`.
StyleLint is using a customized `.stylintrc`.

Issues:
- StyleLint spits out lots of error, tried `ignoreFiles`, `stylint-disable` comment.

To enable back StyleLint:

```
// add this in webpack.json
"postcss": {
  ["stylelint", { "ignoreFiles": "node_modules/**/*.css" }],
}
```
### Server-side Rendering

#### How it works

SSR can be enabled by importing `/client/main` in `/server/entry`.

Issues:
- 1-2 seconds flickering on first load.

Future:
- use SSR on first load and client-side rendering on subsequent load.
