# AI Chatbot Integration Examples with Next.js

This Turborepo demonstrates how to integrate AI chatbots into various technologies using the [Sensay AI Chatbot](https://sensay.io/ai-chatbot) platform.

### About Sensay AI Chatbot

[Sensay AI Chatbot](https://sensay.io/ai-chatbot) is a powerful platform for creating AI-powered chatbots that can:

- Provide instant customer support
- Answer product questions
- Handle sales inquiries
- Offer personalized assistance
- Integrate seamlessly with your existing website

The platform offers easy integration through simple script tags and provides advanced AI capabilities for enhanced user experience.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `nextjs`: a [Next.js](https://nextjs.org/) app demonstrating AI chatbot integration


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd widget-examples

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=nextjs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=nextjs
yarn exec turbo build --filter=nextjs
pnpm exec turbo build --filter=nextjs
```

### Develop

To develop all apps and packages, run the following command:

```
cd widget-examples

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=nextjs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=nextjs
yarn exec turbo dev --filter=nextjs
pnpm exec turbo dev --filter=nextjs
```

## Useful Links

Learn more about Sensay AI Chatbot:

- [Sensay AI Chatbot Platform](https://sensay.io/ai-chatbot)

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
