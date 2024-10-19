# Development Guidelines

Source: [https://github.com/danny-avila/LibreChat/blob/main/.github/CONTRIBUTING.md](https://github.com/danny-avila/LibreChat/blob/main/.github/CONTRIBUTING.md)

## Development notes

- Before starting work, make sure your main branch has the latest commits with `npm run update`
- Run linting command to find errors: `npm run lint`. Alternatively, ensure husky pre-commit checks are functioning.
- After your changes, reinstall packages in your current branch using `npm run reinstall` and ensure everything still works.
- Restart the ESLint server ("ESLint: Restart ESLint Server" in VS Code command bar) and your IDE after reinstalling or updating.
- Clear web app localStorage and cookies before and after changes.
- For frontend changes:
  - Install typescript globally: `npm i -g typescript`.
  - Compile typescript before and after changes to check for introduced errors: `cd client && tsc --noEmit`.
- Run tests locally:
  - Backend unit tests: `npm run test:api`
  - Frontend unit tests: `npm run test:client`
  - Integration tests: `npm run e2e` (requires playwright installed, `npx install playwright`)

## 2. Git Workflow

We utilize a GitFlow workflow to manage changes to this project's codebase. Follow these general steps when contributing code:

1. Fork the repository and create a new branch with a descriptive slash-based name (e.g., `new/feature/x`).
2. Implement your changes and ensure that all tests pass.
3. Commit your changes using conventional commit messages with GitFlow flags. Begin the commit message with a tag indicating the change type, such as "feat" (new feature), "fix" (bug fix), "docs" (documentation), or "refactor" (code refactoring), followed by a brief summary of the changes (e.g., `feat: Add new feature X to the project`).
4. Submit a pull request with a clear and concise description of your changes and the reasons behind them.
5. We will review your pull request, provide feedback as needed, and eventually merge the approved changes into the main branch.

## 3. Commit Message Format

We follow the semantic format for commit messages.

### Example
