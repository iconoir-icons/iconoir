---
title: How to contribute
---

# How to contribute

✨ First off, thanks for taking the time to contribute! ✨

The following is a quick set of guidelines for contributing to Iconoir.

> **ℹ️ Note:** At the moment, to keep consistency, quality, and make the whole
> process time-efficient, we are not accepting pull requests containing icons. You can open an issue
> to request a new icon.

## Contribution Process

> This repository uses [pnpm](https://pnpm.io/) as the package manager. Make sure you have it installed globally before you start working on the project.

> Running build command is essential to work on the `iconoir.com` contents. It has a local dependency on the `iconoir` package, hence you might encounter errors if you don't run it at least once.

- Fork the repository and clone it to your local machine.
  - Fork: [https://github.com/iconoir-icons/iconoir/fork](https://github.com/iconoir-icons/iconoir/fork)
  - Clone: `git clone https://github.com/<your-username>/<your-fork-name>.git`
- Make sure you have the latest version of the main branch.
  - ```bash
    git checkout main
    git pull origin main
    ```
- Create a new branch for your work. Use a descriptive name for the branch.
  - Examples:
    - `git checkout -b feat/add-search-bar`
    - `git checkout -b fix/bug-in-search`
- Install the necessary dependencies and set up your development environment.
  - This repository uses [pnpm](https://pnpm.io/) as the package manager.
  - Run `pnpm install` to install the dependencies.
- Run build once to make sure everything is working correctly.
  - Run `pnpm build` to build the project.
- Start working on your changes.
- Test your changes thoroughly.
- Commit your changes with clear and descriptive commit messages.
  - Use the present tense and be concise.
  - Examples:
    - `git commit -m "feat: Added search bar component"`
    - `git commit -m "fix: Fixed bug in search functionality"`
- Run lint to ensure your code follows the project's coding standards.
  - Run `pnpm lint` to check for linting errors.
  - If fixing is possible, run `pnpm lint --fix` to automatically fix linting errors.
  - Manually fix any remaining linting errors that cannot be automatically fixed.
- Commit the lint fixes if there are any.
  - `git commit -m "lint"` (if you had to fix linting errors manually)
- Push your changes to your forked repository.
  - `git push origin <your-branch-name>`
  - Example: `git push origin feat/add-search-bar`
- Open a pull request to the main repository.
  - Go to your forked repository on GitHub.
  - Click on the "Pull requests" tab.
  - Click on the "New pull request" button.
  - Select the base repository (`iconoir-icons/iconoir`)
  - Select the base branch (`main`)
  - Select the head repository (your forked repository)
  - Select the compare branch (the branch you just pushed)
  - Add a descriptive title and description for your pull request.
    - Example title: "feat: Added search bar component"
    - Ideal description will contain:
      - A brief summary of the changes you made.
      - Any relevant information about the implementation.
      - If applicable, the motivation behind the changes.
      - If applicable, screenshots or GIFs demonstrating the changes.
      - A small checklist of what you have done

## Pull Requests

Pull requests for new features, bug fixes, etc. are often appreciated.

> 👉 We're looking for help with fonts and libraries.

Guidelines for pull requests:

> **Make your commit messages as descriptive as possible.** Include as much information as you can.
> Explain anything that the file diffs themselves won't make apparent.

> **Target main.** Most of bugfixes or new features should go to the main branch.

> **Include only related work.** If your pull request has unrelated commits, it won't be accepted.

> **Packages and Libraries.** If you're adding or updating a package or React / Vue library, the
> target folder is `/packages/iconoir-[LIBRARY_NAME]`.

> **Fonts.** If you're adding or updating fonts, the target folder is `/fonts/`.

## Icon Requests

Before creating an icon request, please search to see if someone has requested the icon already. If
there is an open request, please upvote it.

⚠️ **Icons related to Brands or product logos are no longer accepted for different reasons. Only main tools and social networks are kept at the moment.**

If the icon has not already been requested, [create an
issue](https://github.com/iconoir-icons/iconoir/issues/new/choose) and add as much information as
possible. Follow the rules you see when opening a new bug report.

## Bug Reports

Before reporting an issue, please search to see if someone has filed a similar issue before. If
there is already an open issue, please upvote it and/or leave a comment with additional information.
Follow the rules you see when opening a new bug report.
