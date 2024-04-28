<br>
<div align="center">
<a href="#todo" target="_blank" rel="noreferrer noopener"><img width="130" alt="toc logo" src="./public/tocIconRound.png"></a>

### ToC Website

The website for Trans on Campus, a support network, social group, and advocacy group for Gender Deverse & Questioning students in Auckland.
</div>

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

The website uses [Markdown](https://www.markdownguide.org/cheat-sheet/) for content pages. To add a new page, create a new `.md` file in the `src/pages/resources` directory, using the `example.md` file as a guide.

You do not need to know how to program to write content, simply use basic Markdown syntax to format your text.

You must also fill in the md header, which is used to display resources on the site.

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

## Contact

If you have any questions or need help, please contact [toc@ramiels.me](mailto:toc@ramiels.me)
