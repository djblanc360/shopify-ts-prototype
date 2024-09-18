# Shopify Theme - TypeScript & Tailwind CSS with Vite

This a skeleton Shopify theme using **TypeScript**, **Tailwind CSS**, and **Vite** as the build tool. This will serve as a launching point for future Shopify themes.

## Project Structure

```bash
root/
├── server/                          # Go backend
│   ├── cmd/                         # main app
│   │   └── api/
│   │       └── main.go              # entry point for the Go backend
│   ├── internal/                    # private app and library code
│   │   ├── handlers/                # HTTP handlers for  endpoints
│   │   │   ├── products.go
│   │   │   ├── collections.go
│   │   │   ├── search.go
│   │   │   ├── cart.go
│   │   │   └── auth.go
│   │   ├── models/                  # data models
│   │   │   ├── product.go
│   │   │   ├── collection.go
│   │   │   ├── user.go
│   │   │   └── cart.go
│   │   ├── services/                # business logic and external integrations
│   │   │   ├── shopify_service.go   # NO IMPLEMENTATION YET
│   │   │   └── search_service.go    # NO IMPLEMENTATION YET
│   │   ├── middleware/              # custom middleware
│   │   │   ├── auth_middleware.go
│   │   │   └── logging_middleware.go
│   │   ├── config/                  # config files and environment variables
│   │   │   └── config.go
│   │   └── utils/
│   │       └── utils.go
│   ├── .env                         # backend environment variables
│   ├── go.mod                       # Go module file
│   └── go.sum                       # Go dependencies
│
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.svg
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx      # renders a single product item
│   │   │   ├── Collection.tsx       # renders collection of productst
│   │   │   └── .../
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── HomePage.tsx
│   │   │   ├── Product/
│   │   │   │   ├── ProductPage.tsx
│   │   │   ├── Cart/
│   │   │   └── .../
│   │   ├── hooks/                   # custom hooks
│   │   │   ├── useFetch.ts          # fetch API
│   │   │   └── useCollectionData.ts # fetch collection data
│   │   ├── services/                # API calls to backend
│   │   │   ├── api.ts               # Base API config
│   │   │   ├── productService.ts
│   │   │   └── collectionService.ts
│   │   ├── contexts/                # global state management
│   │   │   ├── CartContext.tsx
│   │   ├── types/                   # TypeScript type definitions
│   │   │   ├── Product.ts
│   │   │   ├── Collection.ts
│   │   ├── utils/                   # Utility functions and helpers
│   │   │   ├── formatPrice.ts
│   │   │   └── debounce.ts
│   │   ├── App.tsx                  # main component
│   │   ├── index.tsx                # entry point
│   │   ├── react-app-env.d.ts       # TypeScript declarations
│   │   └── styles/                  # CSS/SCSS/Tailwind CSS
│   │       └─── tailwind.css
│   ├── package.json                 # frontend dependencies and scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── vite.config.ts               # Vite config
│   └── .env                         # frontend environment variables
└── README.md

```

## Features

- **TypeScript**: Enables modern JavaScript development with type safety.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and maintainable designs.
- **Vite**: Fast bundler and build tool for modern frontend projects.
- **Shopify CLI**: Handles theme development and live previewing.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Shopify CLI**: Install the Shopify CLI to interact with Shopify themes. Instructions can be found [here](https://shopify.dev/docs/themes/tools/cli).

### Installation

1. Clone the repository and navigate to the project directory:

```bash
   git clone <your-repo-url>
   cd ts-prototype
```

2. Install dependencies:
```bash
npm install
```