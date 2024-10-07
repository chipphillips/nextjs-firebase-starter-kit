# Constructiv AI

Constructiv AI is a web application empowering builders and contractors, particularly small to midsize firms, with AI-powered tools to streamline construction processes, enhance efficiency, and drive innovation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Constructiv AI automates administrative tasks, enhances communication, and improves project management efficiency in the construction industry. It integrates Firebase for data storage, with PostgreSQL as an optional backup. FastAPI manages data flow between the front-end and AI models, utilizing both OpenAI and Anthropic's Claude 3.5 API for task-specific optimizations.

## Features

- AI-powered tools for construction management, including:
  - AI Readiness Survey
  - Project Documentation Manager
  - Cost Estimator
  - Schedule Optimizer
  - Construction Quote Comparison
  - Safety Checklist Generator
  - Communication Assistant
- User authentication with Firebase
- Dynamic routing and server-side rendering with Next.js
- Responsive design using Tailwind CSS
- Backend API routes integrated within FastAPI
- Secure data handling with Firebase and optional PostgreSQL
- Interactive dashboards and user profiles
- Blog and resources section

## Tech Stack

- **Frontend:**
  - Next.js 14 - React framework for server-side rendering and static site generation
  - React 18 - JavaScript library for building user interfaces
  - TypeScript - Superset of JavaScript for type safety
  - Tailwind CSS - Utility-first CSS framework for styling
  - shadcn/ui - Collection of re-usable components built with Radix UI and Tailwind CSS
  - Lucide React - Library of consistent SVG icons for React applications

- **Backend:**
  - Firebase - Comprehensive platform providing backend services:
    - Firestore - Flexible, scalable NoSQL cloud database
    - Firebase Authentication - Secure user authentication services
    - Firebase Storage - Cloud storage for user-generated content
    - Firebase Functions - Serverless compute platform for backend logic
  - Python with FastAPI - For additional backend services and API endpoints

- **State Management:**
  - React Context API - For managing global application state

- **Styling and UI:**
  - Tailwind CSS - For responsive and customizable UI components
  - Next Themes - For implementing dark mode and theme switching

- **Content Management:**
  - Firebase Firestore - For storing and managing blog posts and other dynamic content
  - (Optional) MDX - If using MDX for any static content or documentation

- **Development Tools:**
  - ESLint - For identifying and fixing problems in JavaScript code
  - TypeScript - For static type checking
  - Prettier - For consistent code formatting
  - ts-node - For running TypeScript files directly

- **Testing:**
  - Jest - JavaScript testing framework (types included in devDependencies)

- **Build and Deployment:**
  - Next.js built-in build system
  - Firebase Hosting - For deploying and serving the application
  - Firebase Emulators - For local development and testing of Firebase services

- **Additional Libraries:**
  - dotenv - For loading environment variables
  - react-error-boundary - For graceful error handling in React components
  - react-icons - For including popular icon sets as React components

- **AI Models:**
  - OpenAI API
  - Anthropic Claude 3.5 API

This tech stack combines the power of Next.js for frontend development, Firebase for backend services and content management, and shadcn/ui for rapid UI development. It provides a robust foundation for building a scalable, performant, and feature-rich application for the construction industry.

Note: The blog is primarily managed through Firebase Firestore, with MDX potentially used for rendering content or static documentation.

## Project Structure

The project follows a structured layout using Next.js App Router for the frontend and FastAPI for the backend:
