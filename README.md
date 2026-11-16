# Lenny's (new) NEXTjs portfolio

My portfolio website, redesigned with NEXTjs.

## Production

[**lennym.dev**](https://lennym.dev)

## Tech Stack

**Site:** NextJS

**Hosting:** Vercel

**Analytics:** [Umami](https://umami.is/)

Why? Because Google Analytics should be (and in some places is) illegal.

## Projects

Each project on `/projects` is a markdown file in `content/projects/`. The frontmatter holds the fields, and the body is the description (inline markdown; HTML is allowed too, e.g. `<a href="..." target="_blank">`).

```md
---
name: Genfolio
index: -3 # lower shows first
public: true # false hides it
web_url: https://genfolio.xyz/ # optional; the card links here, else to gh_url
gh_url: https://github.com/leomet07/genfolio # optional
images: # only the first is shown
  - /img/genfolio/homepage.png
---

[Genfolio](https://devpost.com/software/genfolio) was the first place winning project ...
```

The files are read and rendered to HTML at build time (`lib/projects.ts`), so the page stays fully static.

## Run Locally

Clone the project

```bash
git clone https://github.com/leomet07/nextportfolio
```

Go to the project directory

```bash
cd nextportfolio
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

Run the production server

```bash
npm start
```
