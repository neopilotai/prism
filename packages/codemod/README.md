<p align="center">
  <a href="https://prism.khulnasoft.com">
      <img width="20%" src="https://raw.githubusercontent.com/khulnasoft/prismui/main/apps/docs/public/isotipo.png" alt="nextui" />
      <h1 align="center">@prismui/codemod</h1>
  </a>
</p>

</br>

The CLI provides a comprehensive suite of tools to migrate your codebase from NextUI to PrismUI.

## Quick Start

> **Note**: The prismui CLI requires [Node.js](https://nodejs.org/en) _20.19.x_ or later
>
> **Note**: If running in monorepo, you need to run the command in the root of your monorepo

You can start using @prismui/codemod in one of the following ways:

### Npx

```bash
npx @prismui/codemod@latest
```

### Global Installation

```bash
npm install -g @prismui/codemod
```

## Usage

```bash
Usage: @prismui/codemod [command]

A CLI tool for migrating your codebase to prismui

Arguments:
  codemod                Specify which codemod to run
                         Codemods: import-prismui, package-json-package-name, prismui-provider, tailwindcss-prismui, css-variables, npmrc

Options:
  -v, --version          Output the current version
  -d, --debug            Enable debug mode
  -h, --help             Display help for command
  -f, --format           Format the affected files with Prettier

Commands:
  migrate [projectPath] Migrate your codebase to use prismui
```

## Codemod Arguments

### import-prismui

Updates all import statements from `@nextui-org/*` packages to their `@prismui/*` equivalents.

```bash
prismui-codemod import-prismui
```

Example:

1. `import { Button } from "@nextui-org/button"` to `import { Button } from "@prismui/button"`

### package-json-package-name

Updates all package names in `package.json` from `@nextui-org/*` to `@prismui/*`.

```bash
prismui-codemod package-json-package-name
```

Example:

1. `@nextui-org/button: x.xx.xxx` to `@prismui/button: x.xx.xxx`

### prismui-provider

Migrate `NextUIProvider` to `HeroProvider`.

```bash
prismui-codemod prismui-provider
```

Example:

1. `import { NextUIProvider } from "@nextui-org/react"` to `import { HeroProvider } from "@prismui/react"`

2. `<NextUIProvider>...</NextUIProvider>` to `<HeroProvider>...</HeroProvider>`

### tailwindcss-prismui

Migrate all the `tailwind.config.(j|t)s` file to use the `@prismui` package.

```bash
prismui-codemod tailwindcss-prismui
```

Example:

1. `const {nextui} = require('@nextui-org/theme')` to `const {prismui} = require('@prismui/theme')`

2. `plugins: [nextui({...})]` to `plugins: [prismui({...})]`

3. `content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}']` to `content: ['./node_modules/@prismui/theme/dist/**/*.{js,ts,jsx,tsx}']`

4. `var(--nextui-primary-500)` to `var(--prismui-primary-500)`

### css-variables

Migrate all the css variables in the file starting with `--nextui-` to `--prismui-`.

```bash
prismui-codemod css-variables
```

Example:

1. `className="text-[var(--nextui-primary-500)]"` to `className="text-[var(--prismui-primary-500)]"`

### npmrc (Pnpm only)

Migrate the `.npmrc` file to use the `@prismui` package.

```bash
prismui-codemod npmrc
```

Example:

1. `public-hoist-pattern[]=*@nextui-org/theme*` to `public-hoist-pattern[]=*@prismui/theme*`

## Migrate Command

Migrate your entire codebase from NextUI to prismui. You can choose which codemods to run during the migration process.

```bash
prismui-codemod migrate [projectPath] [--format]
```

Example:

```bash
prismui-codemod migrate ./my-nextui-app
```

Output:

```bash
prismui Codemod v0.0.1

┌   Starting to migrate nextui to prismui
│
◇  1. Migrating "package.json"
│
◇  Do you want to migrate package.json?
│  Yes
│
◇  Migrated package.json
│
◇  2. Migrating import "nextui" to "prismui"
│
◇  Do you want to migrate import nextui to prismui?
│  Yes
│
◇  Migrated import nextui to prismui
│
◇  3. Migrating "NextUIProvider" to "PrismUIProvider"
│
◇  Do you want to migrate NextUIProvider to PrismUIProvider?
│  Yes
│
◇  Migrated NextUIProvider to PrismUIProvider
│
◇  4. Migrating "tailwindcss"
│
◇  Do you want to migrate tailwindcss?
│  Yes
│
◇  Migrated tailwindcss
│
◇  5. Migrating "css variables"
│
◇  Do you want to migrate css variables?
│  Yes
│
◇  Migrated css variables
│
◇  6. Migrating "npmrc" (Pnpm only)
│
◇  Do you want to migrate npmrc (Pnpm only) ?
│  Yes
│
◇  Migrated npmrc
│
└  ✅ Migration completed!
```

### Community

We're excited to see the community adopt NextUI CLI, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!

- [Discord](https://discord.gg/9b6yyZKmH4)
- [Twitter](https://twitter.com/getnextui)
- [GitHub Discussions](https://github.com/nextui-org/nextui-cli/discussions)

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](https://github.com/nextui-org/nextui-cli/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT](https://github.com/nextui-org/nextui-cli/blob/main/CODE_OF_CONDUCT.md).

## License

[MIT](https://choosealicense.com/licenses/mit/)
