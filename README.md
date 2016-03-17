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

### Atom Configurations

Downloads these packages:

- linter
- linter-eslint
- linter-stylelint
- language-babel
- language-javascript-jsx

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

#### What you can do

```
// colors.import.css
// export values to other CSS files.
@value primary: #BF4040;
@value secondary: #1F4F7F;

// style.import.css
// import values from colors.import.css
@value colors: './colors.import.css';
@value primary, secondary from colors;

// sass-like variable
$color: primary;

// sass-like nested structure
.box {
  background-color: $color;

  p {
    font-size: 30rem;
  }
}
```

### Redux

Redux is used to maintain state for components and actions.

A component should only use Redux to store state if and only if the component state will affect other components.

### DocHead

Dochead is not working at the moment due to Meteor 1.3-rc.2.

### Linting

ESLint is using `eslint-config-airbnb`
StyleLint is using normalize.css .stylintrc

Issues:
- ESLint gives error on spread operator, see `/client/main.js#L11`

Future:
- use `stylelint-config-standard`

### Server-side Rendering

#### How it works

SSR can be enabled by importing `/client/main` in `/server/entry`.

Issues:
- 1-2 seconds flickering on first load.

Future:
- use SSR on first load and client-side rendering on subsequent load.
