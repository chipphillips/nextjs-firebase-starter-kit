# Constructiv AI

Constructiv AI is a web application designed to empower builders and contractors, particularly small to midsize firms, with AI-powered tools to streamline construction processes, enhance efficiency, and drive innovation in the construction industry.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Constructiv AI aims to automate time-consuming administrative tasks, enhance communication, and improve project management efficiency in the construction industry. The application integrates Firebase for data storage, with PostgreSQL as an optional backup database. FastAPI serves as the backend framework, managing data flow between the front-end and our AI models.

The AI components utilize both OpenAI and Anthropic's Claude 3.5 API, with task-specific model assignment to optimize results.

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
  - Next.js - React framework for server-side rendering
  - React - JavaScript library for building user interfaces
  - TypeScript - Superset of JavaScript for type safety
  - Tailwind CSS - Utility-first CSS framework for styling

- **Backend:**
  - FastAPI - Python web framework for building APIs
  - Firebase - Primary database and authentication
  - PostgreSQL (optional) - Backup database

- **AI Models:**
  - OpenAI API
  - Anthropic Claude 3.5 API

- **Environment:**
  - Python (with Pydantic for data validation)

## Project Structure

The project follows a structured layout using Next.js App Router for the frontend and FastAPI for the backend:

```
constructiv-ai/
├── frontend/
│   ├── app/                # Next.js application directory
│   ├── components/         # Reusable React components
│   ├── lib/                # Frontend utilities
│   ├── public/             # Static assets
│   └── styles/             # Global styles
├── backend/
│   ├── app/                # FastAPI application
│   ├── models/             # Pydantic models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Backend utilities
├── ai/
│   ├── openai_models.py    # OpenAI API integration
│   └── claude_models.py    # Claude API integration
└── ...                     # Configuration files
```

## Getting Started

### Prerequisites

- Node.js version 14 or higher
- Python 3.8 or higher
- npm version 6 or higher
- Firebase account with a project set up
- OpenAI API key
- Anthropic API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/constructiv-ai.git
   cd constructiv-ai
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Application

1. Set up environment variables (see [Environment Variables](#environment-variables) section)
2. Run the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
3. Run the backend server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Environment Variables

Create a `.env` file in both the `frontend` and `backend` directories and add the following configurations:

Frontend (.env.local):
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
```

Backend (.env):
```
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

Replace the placeholders with your actual credentials.

## Firebase Configuration

1. Enable Authentication:
   - Go to your Firebase console
   - Enable Email/Password authentication

2. Enable Firestore Database:
   - Create a Firestore database in test mode

3. Create Service Account:
   - Navigate to Project Settings > Service Accounts
   - Generate a new private key and set it as `FIREBASE_SERVICE_ACCOUNT_KEY` in your backend `.env` file

## Available Scripts

Frontend:
- `npm run dev` - Runs the application in development mode
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production build
- `npm run lint` - Runs ESLint on the project files

Backend:
- `uvicorn main:app --reload` - Runs the FastAPI server with hot-reloading

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Commit your changes with clear messages
4. Submit a pull request to the main branch

## License

This project is licensed under the MIT License.
