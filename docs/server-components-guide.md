# Server Components Guide for Constructiv AI

## Overview
Server Components are a new feature in Next.js that allow us to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.

## When to Use Server Components
- For components that don't require client-side interactivity
- When fetching data that doesn't need to be updated frequently
- For components that render static or rarely changing content

## How to Create a Server Component
1. Create your component file in the `app` directory
2. Export a default function that returns JSX
3. Use `async/await` for data fetching if needed

Example:
