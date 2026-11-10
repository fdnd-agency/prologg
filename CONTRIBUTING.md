# Team Agreements

## Communication
* Communication takes place via Teams or in person.
* Monday, Wednesday and Friday: 14:00, in person.
* Tuesday and Thursday: 11:00, stand-up via Microsoft Teams.
* Notify the team via Teams if you are unable to attend class.

## Planning & Issues
### Definition of Ready
- As a **[type of user]** , I want **[some goal / action]**, so that **[some value / benefit]**
- Estimated Effort

## Delivery
* Every team member works on feature branches, preferably linked to existing GitHub issues.
* All changes must be submitted through a Pull Request using the project template.
* Tag two team members in the Pull Request. One of them will take responsibility for reviewing it.
* Notify the team via Teams when a Pull Request is ready for review.
* Changes can be merged after approval.

## Code Conventions
### Project Structure
- Remove unused files.
- Remove unused imports.

### Branch Naming
We try as a team using the [FDND conventions for branch-naming](https://docs.fdnd.nl/conventies.html#branch-naming). These are the ones you can use:
1. **feat/** Implementing a new feature, eg: feat/add-login-page
2. **fix/** Fix for a bug, style or layout issue, eg: fix/fix-header-bug
3. **hotfix/** Urgent fix, eg: hotfix/security-patch
4. **release/** Preparing a release, eg: release/v1.2.0
5. **chore/** Non-code tasks such as dependency or documentation updates, eg: chore/update-contributing

<p align="center"><img width="500" alt="Screenshot 2026-11-10 at 16 40 17" src="https://github.com/user-attachments/assets/8c15622e-8689-4b55-be9d-94d25d10f6e0" /></p>

**Notice: only use lowercase for branch-naming**

### CSS Class Naming

Use **kebab-case** for CSS-classnames.

Use descriptive names that explain what something is, not what it looks like.

> Example: .person-card {}, .person-image {}, .person-name {}

### Component & File Naming
Use for components **PascalCase**.

> Example: FilterButton.svelte

Use **kebab-case** for overall files.

> Example: index.js

### The Naming Cases
<p align="center"><img width="500"  alt="Image" src="https://github.com/user-attachments/assets/f5d7cad0-0b72-4e7f-9d36-5e7a7b72ac5a" /></p>

### Variables & Functionnames
Use **camelCase**.

> Example:  let personName;

**Prefer using a verb that clearly describes what the function does.**

> Example:   function filterPersons() {}

### HTML ID's
Only use ID's when necessary and use kebab-case for naming them.
Use classes for component-specific styling instead of IDs. Reserve ID's for functionality that requires them, such as the Popover API.

### Commits
Keep commit messages short and clear.

> feat✨: add person card component
> fix🐛: correct person image
> style💎: update card layout
> refactor🔨: clean up person data
> docs📚: add code conventions

- fix🐛: a commit that fixes a bug.
- feat✨: a commit that adds new functionality.
- docs📚: a commit that adds or improves the documentation.
- style💎: a commit that improves styling or formatting.
- refactor🔨: a commit that improves code structure without changing functionality.
- test🚨: a commit that adds unit tests.
- perf🚀: a commit that improves performance, without functional changes.

## Responsibilities
* Every team member is responsible for delivering their assigned work.
* Respect each other's time by communicating clearly and meeting agreed deadlines.

## Feedback
Ask a teacher for feedback once per sprint, preferably during the second week.

## Useful Resources
### Pull Requests
This presentation explains what a Pull Request is and how to use it in GitHub.

[Powerpoint: Pull Requests](https://www.canva.com/design/DAHI5K9RBW8/MEjcZlj1jWMBIg-y5SQUfg/view?utm_content=DAHI5K9RBW8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99a40db19d#1)

### Figma
[Prologg - Design & TeamCanvas](https://www.figma.com/design/m6gDxMDBp69qJU5f0vGRHF/Prologg?node-id=70-11&p=f&t=Qdg1lGjbk6W1qKhX-0)

 
