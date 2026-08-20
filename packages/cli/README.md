<p align="center">
  <a href="https://prism.khulnasoft.com">
      <img width="20%" src="https://raw.githubusercontent.com/khulnasoft/prismui/v3/apps/docs/public/icons/readme-logo.png" alt="prismui (previously nextui)" />
      <h1 align="center">PrismUI CLI</h1>
  </a>
</p>
</br>
<p align="center">
  <a href="https://github.com/khulnasoft/prism/blob/main/license">
    <img src="https://img.shields.io/npm/l/prism-cli?style=flat" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/prism-cli">
    <img src="https://img.shields.io/npm/dm/prism-cli.svg?style=flat-round" alt="npm downloads">
  </a>
</p>

The CLI offers a suite of commands to initialize, manage, and improve your PrismUI projects. It enables you to `install`, `uninstall`, or `upgrade` PrismUI packages, assess the health of your project, and more.

## Quick Start

> **Note**: The PrismUI CLI requires [Node.js](https://nodejs.org/en) _22+_ or later

You can choose the following ways to start the PrismUI CLI.

### Npx

```bash
npx prism-cli@latest
```

### Global Installation

```bash
npm install -g prism-cli
```

## Usage

```bash
Usage: prismui [command]

Options:
  -v, --version                  Output the current version
  --no-cache                     Disable cache, by default data will be cached for 30m after the first request
  -d, --debug                    Debug mode will not install dependencies
  -h --help                      Display help information for commands

Commands:
  init [options] [projectName]   Initializes a new project
  install [options]              Installs @prismui/react and @prismui/styles in your project
  upgrade [options]              Upgrades @prismui/react and @prismui/styles to the latest versions
  uninstall [options]            Uninstalls @prismui/react and @prismui/styles from the project
  list [options]                 Lists installed PrismUI packages (@prismui/react, @prismui/styles)
  env [options]                  Displays debugging information for the local environment
  doctor [options]               Checks for issues in the project
  agents-md [options]            Downloads PrismUI documentation for AI coding agents
  help [command]                 Display help for command
```

## Analytics

The `agents-md` command collects anonymous usage data.

**What we collect:** Selection (react/native/both), output file names, duration, success or error. No file paths, or project contents are collected.

**Opt out:** Set `PRISMUI_ANALYTICS_DISABLED=1` in your environment or shell profile.

## Commands

### Init

Initialize a new PrismUI project with official templates.

```bash
prismui init [projectName] [options]
```

#### Init Options

- `-t --template [string]` The template to use for the new project e.g. app, pages, vite, react-router
- `-p --package [string]` The package manager to use for the new project

##### Example

```bash
# Initialize a new PrismUI project with the app template, named my-prismui-app using pnpm
prismui init my-prismui-app -t app -p pnpm
```

Alternatively, you can run `init` without any flags and select an option from the prompt.

```bash
prismui init
```

output:

```bash
PrismUI CLI <version>

┌  Create a new project
│
◇  Select a template (Enter to select)
│  ● App (A Next.js 16 with app directory template pre-configured with PrismUI (v3) and Tailwind CSS.)
│  ○ Pages (A Next.js 16 with pages directory template pre-configured with PrismUI (v3) and Tailwind CSS.)
│  ○ Vite (A Vite template pre-configured with PrismUI (v3) and Tailwind CSS.)
│  ○ React Router (A React Router template pre-configured with PrismUI (v3) and Tailwind CSS.)
│
◇  New project name (Enter to skip with default name)
│  my-prismui-app
│
◇  Select a package manager (Enter to select)
│  ● npm
│  ○ yarn
│  ○ pnpm
│  ○ bun
│
◇  Template created successfully!
│
◇  Next steps ───────╮
│                    │
│  cd my-prismui-app  │
│  npm install       │
│                    │
├────────────────────╯
│
└  🚀 Get started with npm run dev
```

### Install

Install `@prismui/react` and `@prismui/styles` in your project, along with their peer dependencies. If they are already installed, the command does nothing.

```bash
prismui install [options]
```

#### Install Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui install
```

Output:

```bash
PrismUI CLI <version>

📦 Packages to be installed:
╭─────────────────────────────────────────────────────────────────────────────╮
│   Package          │   Version        │   Status   │   Docs                 │
│─────────────────────────────────────────────────────────────────────────────│
│   @prismui/react    │   3.0.0          │   stable   │   https://prism.khulnasoft.com   │
│   @prismui/styles   │   3.0.0          │   stable   │   https://prism.khulnasoft.com   │
╰─────────────────────────────────────────────────────────────────────────────╯

╭─────────────── PeerDependencies ────────────────╮
│  react@18.3.1                      latest       │
│  react-dom@18.3.1                  latest       │
│  tailwindcss@4.2.2                 latest       │
╰─────────────────────────────────────────────────╯
? Proceed with installation? › - Use arrow-keys. Return to submit.
❯   Yes
    No

✅ @prismui/react and @prismui/styles installed successfully
```

### Upgrade

Upgrade `@prismui/react` and `@prismui/styles` with their peer dependencies to the latest versions.

```bash
prismui upgrade [options]
```

#### Upgrade Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui upgrade
```

Output:

```bash
PrismUI CLI <version>

╭──────────────────────────── Upgrade ────────────────────────────╮
│  @prismui/react               ^3.0.0  ->  ^3.1.0                │
│  @prismui/styles              ^3.0.0  ->  ^3.1.0                │
╰─────────────────────────────────────────────────────────────────╯

? Would you like to proceed with the upgrade? › - Use arrow-keys. Return to submit.
❯   Yes
    No

✅ Upgrade complete. All packages are up to date.
```

### Uninstall

Uninstall `@prismui/react` and `@prismui/styles` from your project. Peer dependencies will not be deleted.

```bash
prismui uninstall [options]
```

#### Uninstall Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui uninstall
```

Output:

```bash
PrismUI CLI <version>

❗️ Packages slated for uninstallation:
╭──────────────────────────────────────────────────────────────────────────────────────╮
│   Package          │   Version   │   Status   │   Docs                               │
│──────────────────────────────────────────────────────────────────────────────────────│
│   @prismui/react    │   3.0.0     │   stable   │   https://prism.khulnasoft.com                 │
│   @prismui/styles   │   3.0.0     │   stable   │   https://prism.khulnasoft.com                 │
╰──────────────────────────────────────────────────────────────────────────────────────╯
? Confirm uninstallation of these packages: › - Use arrow-keys. Return to submit.
❯   Yes
    No

✅ Successfully uninstalled: @prismui/react, @prismui/styles
```

### List

List the installed PrismUI packages (`@prismui/react`, `@prismui/styles`).

```bash
prismui list [options]
```

#### List Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui list
```

Output:

```bash
PrismUI CLI <version>

Current installed packages:

╭──────────────────────────────────────────────────────────────────────────────────────╮
│   Package          │   Version          │   Status   │   Docs                        │
│──────────────────────────────────────────────────────────────────────────────────────│
│   @prismui/react    │   3.0.0 🚀latest   │   stable   │   https://prism.khulnasoft.com          │
│   @prismui/styles   │   3.0.0 🚀latest   │   stable   │   https://prism.khulnasoft.com          │
╰──────────────────────────────────────────────────────────────────────────────────────╯
```

### Doctor

Check for issues in your project.

```bash
prismui doctor [options]
```

#### Features

> 1. Check whether `@prismui/react` and `@prismui/styles` are installed
> 2. Check whether `required peer dependencies` are installed and matched minimal requirements in the project

#### Doctor Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui doctor
```

Output:

If there is a problem in your project, the `doctor` command will display the problem information.

```bash
PrismUI CLI <version>

PrismUI CLI: ❌ Your project has 1 issue that require attention

❗️Issue 1: missingPrismUIPackages

The following PrismUI packages are not installed:
- @prismui/styles

Run `prismui install` to install them.
```

Otherwise, the `doctor` command will display the following message.

```bash
PrismUI CLI <version>

✅ Your project has no detected issues.
```

### Env

Display debug information about the local environment.

```bash
prismui env [options]
```

#### Env Options

- `-p --packagePath` [string] The path to the package.json file

##### Example

```bash
prismui env
```

Output:

```bash
PrismUI CLI <version>

Current installed packages:

╭──────────────────────────────────────────────────────────────────────────────────────╮
│   Package          │   Version          │   Status   │   Docs                        │
│──────────────────────────────────────────────────────────────────────────────────────│
│   @prismui/react    │   3.0.0 🚀latest   │   stable   │   https://prism.khulnasoft.com          │
│   @prismui/styles   │   3.0.0 🚀latest   │   stable   │   https://prism.khulnasoft.com          │
╰──────────────────────────────────────────────────────────────────────────────────────╯

Environment Info:
  System:
    OS: darwin
    CPU: arm64
  Binaries:
    Node: v25.8.1
```

### Agents-md

Download PrismUI documentation for AI coding agents (Claude, Cursor, etc.). This command downloads the latest documentation from the PrismUI repository and generates an index file that can be injected into markdown files like `AGENTS.md` or `CLAUDE.md` to help AI assistants understand your project's PrismUI setup.

```bash
prismui agents-md [options]
```

#### Features

> 1. Downloads latest PrismUI documentation from the `v3` branch
> 2. Supports React, Native, and Migration (v2→v3) documentation
> 3. Generates a section for the selected library (React, Native, or Migration) in the markdown file
> 4. Automatically adds `.prismui-docs/` to `.gitignore`

#### Agents-md Options

- `--react` [boolean] Include React docs only (one library at a time)
- `--native` [boolean] Include Native docs only
- `--migration` [boolean] Include PrismUI v2 to v3 migration docs only
- `--output <file>` [string] Target file path (e.g., `AGENTS.md`, `CLAUDE.md`)
- `--ssh` [boolean] Use SSH instead of HTTPS for git clone

#### Example

Run the command without any flags to enter interactive mode:

```bash
prismui agents-md
```

Download React docs to a specific file:

```bash
prismui agents-md --react --output AGENTS.md
```

Download Native docs:

```bash
prismui agents-md --native --output CLAUDE.md
```

Download migration docs (v2→v3):

```bash
prismui agents-md --migration --output AGENTS.md
```

Use SSH for cloning (useful if HTTPS fails):

```bash
prismui agents-md --react --ssh --output AGENTS.md
```

#### How It Works

1. **Downloads Documentation**: Clones the PrismUI repository using git sparse-checkout to download only the documentation files
2. **Generates Index**: Creates a compact index of all documentation files organized by directory
3. **Injects into Markdown**: Injects the index into your specified markdown file (e.g., `AGENTS.md`) with special markers:
   - `<!-- PRISMUI-REACT-AGENTS-MD-START -->` / `<!-- PRISMUI-REACT-AGENTS-MD-END -->` for React docs
   - `<!-- PRISMUI-NATIVE-AGENTS-MD-START -->` / `<!-- PRISMUI-NATIVE-AGENTS-MD-END -->` for Native docs
   - `<!-- PRISMUI-MIGRATION-AGENTS-MD-START -->` / `<!-- PRISMUI-MIGRATION-AGENTS-MD-END -->` for Migration docs
4. **Single library**: Only one of React, Native, or Migration can be selected at a time

#### File Structure

After running the command, you'll have:

```
your-project/
├── .prismui-docs/          # Downloaded documentation (gitignored)
│   ├── react/            # React documentation files (if selected)
│   ├── native/           # Native documentation files (if selected)
│   └── migration/        # Migration docs (v2→v3, if selected)
├── AGENTS.md             # Your markdown file with injected index
└── .gitignore            # Updated to include .prismui-docs/
```

#### Notes

- The command always downloads the latest documentation from the `v3` branch
- Documentation is stored in `.prismui-docs/` which is automatically added to `.gitignore`

### Community

We're excited to see the community adopt PrismUI CLI, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!

- [Discord](https://discord.gg/9b6yyZKmH4)
- [Twitter](https://twitter.com/hero_ui)
- [GitHub Discussions](https://github.com/khulnasoft/prism/discussions)

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](https://github.com/khulnasoft/prism/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT](https://github.com/khulnasoft/prism/blob/main/CODE_OF_CONDUCT.md).

## License

[MIT](https://choosealicense.com/licenses/mit/)
