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

Every project on `/projects` is in `content/projects.md`, in the order they show on the site. The comment at the top of that file explains the format:

```md
## Genfolio

- web_url: https://genfolio.xyz/
- gh_url: https://github.com/leomet07/genfolio
- images: /img/genfolio/homepage.png, /img/genfolio/template.png

[Genfolio](https://devpost.com/software/genfolio) was the first place winning project ...
```

The file is read and rendered to HTML at build time (`lib/projects.ts`), so the page stays fully static.

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
