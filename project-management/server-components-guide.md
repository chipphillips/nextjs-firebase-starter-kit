# Server Components Usage Guide

## Introduction
Server Components are a new feature in Next.js that allow us to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.

## When to Use Server Components
- For components that don't require client-side interactivity
- When fetching data that doesn't need to be updated frequently
- For components that render static or rarely changing content

## How to Create a Server Component
1. Create a new file in the `app` directory or its subdirectories.
2. Write your component as a regular function (not an arrow function).
3. Don't use hooks or event handlers in the component.
4. Use the `async` keyword if you need to fetch data.

Example: