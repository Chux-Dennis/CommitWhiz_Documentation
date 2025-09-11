---
sidebar_position: 1
---

# What is CommitWhiz ?

CommitWhiz is a AI powered developer tool that helps you write clean, consistent, and meaningful Git commit messages effortlessly


CommitWhiz was built to:

- Guide you interactively when crafting commit messages.
- Improve project history readability for teams and open-source maintainers.
- Enforce commit conventions (like "feat:..." , "chore:..." )

Think of CommitWhiz as your commit assistant — making sure your messages are not just “random notes” but structured, clear, and useful for everyone who works with your codebase.

## Why better commit matters?
- Better collaboration → teammates instantly understand what each commit does.

- Automated changelogs & releases → commit messages can feed tools like semantic-release.

- Consistency at scale → whether it’s a solo project or a big monorepo, commit history stays neat.



## Example

Instead of :

```bash title="git"
git commit -m "New Changes"
```

With CommitWhiz:

```bash title="git"
git commit -m "fix(auth): resolve token expiry issue"
```