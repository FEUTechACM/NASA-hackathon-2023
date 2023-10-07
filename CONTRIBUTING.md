# Table of Contents

* [Workflow](#workflow)
* [Project Standards](#project-standards)
  * [Commit Message Format](#commit-message-format)
  * [Commit Message Example](#commit-message-example)
  * [Commit Rules](#commit-rules)

---

## Workflow

For this project, we will use the [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

## Project Standards

We adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specifications aligned with [Semantic Versioning](https://semver.org/) with a few modifications.

### Commit Message Format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Note**: An (\*) asterisk before the commit description indicates that there is more information written in the commit message description.

### Commit Message Example

1. **fix:** a bugfix
2. **feat:** a new feature
3. **refactor:** a code change that neither fixes a bug nor adds a feature
4. **chore:** changes to the build process or auxiliary tools and libraries such as documentation generation
5. **style:** changes that do not affect the meaning of the code (whitespace, formatting, missing semi-colons, etc)
6. **docs:** documentation only changes
7. **test:** adding missing tests or correcting existing tests
8. **perf:** a code change that improves performance
9. **ci:** changes to our CI configuration files and scripts
10. **build:** changes that affect the build tool or external dependencies (example scopes: gulp, broccoli, npm)
11. **revert:** revert to a commit
12. **BREAKING CHANGE:** introduces a breaking API change (correlating with [Semantic Versioning](https://semver.org/))

### Commit Rules

1. **NEVER** rebase the `master` branch.
2. Only rebase on your own branch.
3. Make us of `git pull --rebase` instead of `git pull`.
4. Use only `--force-with-lease` if in need to force push.
5. Make use of `git commit --amend` if you need to edit your commit message.
6. Make use of `git rebase -i` if you need to modify your commit history.
