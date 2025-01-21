# Starter Template for Next.js 🚀

This is a starter template for Next.js version 15. It includes pre-configured tools to optimize the start of a new application and features some opinionated code.

## Main Features ✨

- All default options provided by Next.js.
- Custom configurations for IDEs (VSCode or Cursor).
- Custom configurations for ESLint and Prettier.
- Pre-configured "not-found" page.
- Libraries and enhanced ESLint rules for environment variable management:
  - `@t3-oss/env-nextjs`
  - `zod`
  - Centralized environment variables in the `src/env/server.ts` file.

## Installation 🛠️

```bash
# Clone this repository
git clone <repository-url>

# Navigate to the project directory
cd <project-name>

# Install dependencies using pnpm (recommended)
pnpm install

# Alternatively, you can use npm or yarn
npm install
```

## Usage 📄

(Here you can detail how to start using the template and any relevant instructions)

---

## ⚠️ Work in Progress

Environment variable detection during the build process using the `jiti` library is currently a work in progress. The developer has not yet found a solution compatible with Next.js 15. Stay tuned for future updates to address this issue.

---

**Note:** Feel free to customize the included configurations to better fit your project. We hope this starter template saves you time and helps you build amazing applications with Next.js! 🚀

