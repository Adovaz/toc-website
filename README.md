<br>
<div align="center">
<a href="#todo" target="_blank" rel="noreferrer noopener"><img width="130" alt="toc logo" src="./public/tocIconRound.png"></a>

### ToC Website

The website for Trans on Campus, a support network, social group, and advocacy group for Gender Deverse & Questioning students in Auckland.

## Contents

- [Contributing](#contributing)
  - [Writing Content](#writing)
  - [Development](#development)
    - [Setup](#setup)
    - [Development](#development-server)
    - [Project Structure](#project-structure)
- [Contact](#contact)

## Contributing

Please feel free to contribute to the upkeep and development of the website by making Pull Requests or raising Issues.

## Writing

[TODO]

The website uses Markdown for content pages. To add a new page, create a new `.md` file in the `src/content` directory, using the `template.md` file as a guide.

You do not need to know how to program to write content, simply use basic Markdown syntax to format your text.

## Development

We use [Astro](https://astro.build) to build the website. The website is hosted on [Cloudflare Pages](https://pages.cloudflare.com). The site uses basic HTML, CSS, and JavaScript.

Astro provides our templating, meaning we can create and reuse components across the site without duplicating code.

To add a new page, create a new `.astro` file in the `src/pages` directory. To add a new component, create a new `.astro` file in the `src/components` directory. Most pages use the `defaultLayout.astro` component to maintain a consistent look and feel.

### Setup

> [!TIP]
> It is recommended you work in VSCode with the Astro extension installed.

[Install Node.js](https://nodejs.org/en) version 19 or higher, then run the following command in your terminal:

```bash
$ npm install
```

### Development Server

To start the development server on `http://localhost:4321`, run:

```bash
$ npm run dev
```

### 🧞 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Project Structure

The project is structured as follows:

```text
/
├── public/
│   └── siteImage.jpg
├── src/
│   ├── components/
│   │   └── siteComponent.astro
│   ├── layouts/
│   │   └── pageLayout.astro
│   └── pages/
│       └── page.astro
└── package.json
```

- `public/` contains static files like images and favicons.
- `src/` contains all the source code for the website.
  - `components/` contains reusable components.
  - `layouts/` contains layout components.
  - `pages/` contains the pages of the website.
- `package.json` contains the project's dependencies and scripts.

## Contact

If you have any questions or need help, please contact [toc@ramiels.me](mailto:toc@ramiels.me)
