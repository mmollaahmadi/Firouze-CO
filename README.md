This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Run by Docker
The Docker file is ready to run the application on a specific port like 8080 through following commands
```bash
# build image
sudo docker build -t alibaba-countries-challenge:v1 .
# run image
sudo docker run --rm -it -p 8080:3000 --name alibaba-countries-challenge alibaba-countries-challenge:v1

```

## Deploy on Vercel

This Next.js app has been deployed by [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You can find the demo page in [Alibaba Countries Challenge](https://alibab-countries-challenge.vercel.app/).
