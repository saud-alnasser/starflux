# Contribution Guidelines

When contributing to `starflux`:

- Before opening a new pull request, try searching through the [issue tracker](https://github.com/saud-alnasser/starflux/issues).

- If you want to make code changes based on your personal opinion(s), please make sure you [open an issue](https://github.com/saud-alnasser/starflux/issues/new/choose) first describing the changes you want to make, and open a pull request only when your suggestions get approved by the maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by
checking if there's an existing issue related to the change you want to make if not [open an issue](https://github.com/saud-alnasser/starflux/issues/new/choose) describing the problem you would like to solve.

### Setup your environment

_Some commands will assume you have the Github CLI installed, if you haven't, consider [installing it](https://github.com/cli/cli#installation), but you can always use the Web UI if you prefer that instead._

In order to contribute to this project, you will need to fork the repository:

```bash
gh repo fork saud-alnasser/starflux
```

then, clone it to your local machine:

```bash
gh repo clone <your-github-name>/starflux
```

This project uses [pnpm](https://pnpm.io) as its package manager. Install it if you haven't already:

```bash
npm install -g pnpm
```

Then, install the project's dependencies:

```bash
pnpm install
```

### Implement your changes

This project is a [turborepo](https://turborepo.org/) monorepo. the docs is in the `www` directory, other packages under the `packages` directory. Now you're all setup and can start implementing your changes.

Here are some useful scripts for when you are developing:

| Command                | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| `pnpm dev:playground`  | Builds and starts a playground bot for the `@starflux/framework` |
| `pnpm dev:www`         | Starts the development server for the docs with HMR              |
| `pnpm dev`             | Builds and starts all the `@starflux/*` packages                 |
| `pnpm build:framework` | Builds the framework                                             |
| `pnpm build:www`       | Builds the docs                                                  |
| `pnpm build`           | Builds all the `@starflux/*` packages                            |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

Check that your code follows the project's style guidelines by running:

```bash
pnpm check
```

Please also make a manual, functional test of your changes.

If your change should appear in the changelog, i.e. it must be captured by `changeset` which is done by running

```bash
pnpm changeset
```

and filling out the form with the appropriate information. Then, add the generated changeset to git:

```bash
git add .changeset/*.md && git commit -m "chore: generate changeset"
```

When all that's done, it's time to file a pull request to upstream:

**NOTE**: All pull requests should target the `main` branch.

```bash
gh pr create --web
```

and fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

## Credits

This documented was inspired by the contributing guidelines for [t3-oss/create-t3-app](https://github.com/t3-oss/create-t3-app/blob/next/CONTRIBUTING.md).
