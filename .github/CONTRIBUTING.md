# Contributing to FlyonUI

We welcome contributions from the community! Whether you're reporting bugs, suggesting new features, or fixing issues, your help is appreciated 🤝

## Reporting Issues

- Before opening a new issue, please first [search for existing issues](https://github.com/themeselection/flyonui/issues?q=) to avoid duplicates.
- Provide detailed reports with as much context as possible, including steps to reproduce the issue, your environment, and any relevant logs or screenshots.
- For hard-to-reproduce bugs, please include a minimal reproducible repository or detailed steps to recreate the issue.

## Fixing Existing Issues

- Help us by [fixing existing issues](https://github.com/themeselection/flyonui/issues?q=).
- Avoid working on issues already assigned to others to prevent duplicate efforts.
- If you're interested in working on an issue, please add a comment to request assignment before starting work. This helps maintainers track who's working on what and prevents duplication of effort.
- Use the following commit message format for fixes: `fix: #<issue_number> [description]`. This automatically closes the issue and adds the fix to the changelog upon release.

## Feature Requests

- If you have an idea you'd like to discuss with the community, please [open a discussion](https://github.com/themeselection/flyonui/discussions/new?category=ideas-request-new-feature).
- Please note that not all feature requests will be accepted, as some may not align with the vision or scope of the library. Don't take it personally if a request is rejected.

## Pull Requests

- Pull requests should address [an open issue](https://github.com/themeselection/flyonui/issues?q=is%3Aissue+is%3Aopen+) **that is assigned to you**. If no issue exists, create one first. If an issue is not assigned to you, please request assignment in the comments before submitting a PR. This ensures we avoid duplicate efforts.
- For minor changes like fixing typos, an issue is not required. Feel free to directly open a pull request.
- For documentation fixes, including updates to the website, you can also submit a pull request without opening an issue first.

## Local Development Setup

To build the FlyonUI package locally, follow these steps:

1. [Fork the repository](https://github.com/themeselection/flyonui/fork) and clone it to your local machine.
   ```bash
   git clone https://github.com/your-username/flyonui.git
   ```
2. Install the necessary package dependencies:
   ```bash
   bun install
   ```
3. Build the package:
   ```bash
   bun run build:css && bun run build:js
   ```
4. You can now import FlyonUI into your `app.css`:
   ```css
   @import "tailwindcss";
   @plugin "./path/to/flyonui/index.js";
   @import "./path/to/flyonui/variants.css";
   @source "./path/to/flyonui/dist/index.js" // only include if you have added node_modules/ in .gitignore
   ```
5. Finally, include the `flyonui.js` file in your HTML:
   ```html
   <script src="/path/to/flyonui.js"></script>
