# Food Delivery Exercise Nuxt-3

## Description
- This repository is the frontend part of my exercise 'Food Delivery Website'. It is a client side rendered site, this project fetches data from the backend when it loads initially, rest of the operations like searching and filtering are done on frontend side. 
- I have used [Go](https://go.dev/doc/) language in backend with [Fiber](https://docs.gofiber.io/) framework.
- Used Nuxt3 as frontend framework.

You can refer [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

Get backend code here:
https://github.com/nirav-improwised/Data-Structures/tree/master/Zomato_CLI_problem

Clone this repository using:
```bash
git clone git@github.com:nirav-improwised/Food-Delivery-Exercise-Nuxt-3.git
```
Install dependencies:
```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```
## Backend Development Server
```
go run main.go
```
Backend development server will start on port http://localhost:5500
(If you haven't changed it in the code, also provided your 5500 port is not occupied already)

## Frontend Development Server
```
npm run dev
```
Frontend development server will start on http://localhost:3000
(If you haven't changed it in the code, also provided your 5500 port is not occupied already)

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
