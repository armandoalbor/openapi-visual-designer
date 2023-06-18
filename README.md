<p align="center" style="padding: 16px 0">
  <a href="https://es.react.dev/" target="blank"><img src="./src/assets/react.svg" height="120" alt="React Logo" /></a>
  <a href="https://vitejs.dev/" target="blank"><img src="./src/assets/vite.svg" height="120" alt="Vite Logo" /></a>
  <a href="https://www.openapis.org/" target="blank"><img src="https://www.openapis.org/wp-content/uploads/sites/3/2023/04/OpenAPI_Specification_Logo_Pantone1.png" height="120" alt="OpenAPI Logo" /></a>
</p>

## Description

[OpenAPI Visual Designer](https://es.react.dev/) We seek to create the best openapi editor so that the community can generate quality documentation for their backend projects with an incredibly intuitive and easy-to-use interface.

## Running on development

1. Clone repository
2. Install dependencies

```bash
$ yarn install
```

3. Run app in dev mode using Vite

```bash
# development
$ yarn dev
```

## Stack

- React
- Vite
- MaterialUI

## Production Build

1. Create file `.env`
2. Fill environment variables required for production
3. Create production build with the next command

```bash
$ yarn build
```

## Dependencies reference 🧰

We use [MaterialUI v5](https://mui.com/material-ui/getting-started/overview/) as suite of design

```bash
$ yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Use i18n to manage app translations for multi language or localization

```bash
$ yarn add i18next react-i18next
```

To enable global imports is necessary install `vite-tsconfig-paths`

```bash
$ yarn add i18next vite-tsconfig-paths
```

To add a Rich text editor install [lexical](https://lexical.dev/). Our editor component is based on this [example](https://codesandbox.io/s/lexical-rich-text-example-5tncvy?file=/src/Editor.js)

```bash
$ yarn add lexical @lexical/react
```
