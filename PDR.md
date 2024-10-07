# Preliminary Design Review (PDR) for Constructiv AI

## Introduction

The purpose of this document is to present the initial design and architecture of the Constructiv AI application. This PDR outlines the system architecture, design decisions, data models, and key functionalities.

## System Architecture

### Overview

Constructiv AI is a hybrid architecture application with a Next.js 14 frontend and a combination of Firebase services and Python/FastAPI backend. It leverages server-side rendering, API routes, and integrates with Firebase services for authentication and data storage, while using FastAPI for AI processing and complex operations.

### Architecture Diagram

[Include an updated architecture diagram showing the hybrid structure]

## Design Decisions

### Technology Stack

- **Frontend Framework:** Next.js 14 for server-side rendering and routing.
- **Styling:** Tailwind CSS for utility-first styling, shadcn/ui for UI components.
- **Language:** TypeScript for type safety and better developer experience.
- **Authentication:** Firebase Authentication for secure user management.
- **Database:** Firestore (Firebase) for real-time database capabilities, with PostgreSQL as an optional backup.
- **Server-Side Operations:** 
  - Firebase Admin SDK for backend functionalities within Next.js API routes.
  - Python/FastAPI for AI processing and complex operations.
- **AI Integration:** OpenAI API and Anthropic Claude 3.5 API for AI-powered features.

### Component Structure

- **Reusable Components:**

  - Buttons, Inputs, Cards, Modals, etc., are placed under `components/ui/`.

- **Page Components:**

  - Each page under the `app/` directory corresponds to a route.

- **State Management:**

  - Use React's built-in state management and context API as needed.

## Data Models

### User

- **Fields:**

  - `uid`: Unique user identifier from Firebase Authentication.
  - `email`: User's email address.
  - `displayName`: User's name.
  - `createdAt`: Account creation timestamp.

### Survey Response

- **Fields:**

  - `uid`: Reference to the user.
  - `responses`: User's answers to the AI Readiness Survey.
  - `createdAt`: Submission timestamp.

### Vote

- **Fields:**

  - `uid`: Reference to the user.
  - `toolId`: Identifier of the tool being voted for.
  - `createdAt`: Vote timestamp.

### QuoteComparison

- **Fields:**

  - `projectId`: Reference to the project.
  - `quotes`: Array of supplier quotes.
  - `comparisonResults`: AI-generated comparison data.
  - `createdAt`: Comparison timestamp.

## Key Functionalities

### Authentication Flow

- Users can sign up and sign in using email and password.
- Protected routes redirect unauthenticated users to the sign-in page.
- Firebase ID tokens are used for authenticated API requests.

### Dashboard

- Provides access to available AI tools.
- Displays personalized information based on the user.

### AI Readiness Survey

- Users can complete a survey to assess their readiness for AI adoption.
- Responses are stored in Firestore.

### Custom AI Report

- Generates a report based on the user's survey responses.
- Utilizes backend logic to create personalized content.

### Voting System

- Users can vote for upcoming AI tools.
- Ensures one vote per user per tool.

### Quote Comparison Tool

- Allows users to input and compare supplier quotes.
- Uses AI to analyze and provide recommendations for supplier selection.

## AI Integration

- **Model Selection:** Task-specific model assignment for optimized results.
- **OpenAI Integration:** Used for general AI tasks and natural language processing.
- **Claude 3.5 Integration:** Utilized for specific AI functionalities requiring advanced reasoning.
- **AI Processing Flow:** FastAPI routes handle data flow between frontend and AI models.

## Security Considerations

- **Authentication Verification:**

  - API routes verify Firebase ID tokens to authenticate requests.

- **Data Access:**

  - Users can only access their own data.
  - Firestore security rules enforce data access policies.

- **Environment Variables:**

  - Sensitive credentials are stored in `.env.local` and not committed to version control.

- **API Security:**

  - Implement rate limiting and input validation for all API endpoints.
  - Use HTTPS for all communications.

## Performance Considerations

- **Server-Side Rendering:**

  - Improves initial page load times and SEO.

- **Code Splitting:**

  - Uses dynamic imports to load components as needed.

- **Caching:**

  - Leverages browser caching and CDN capabilities.

- **AI Processing Optimization:**

  - Implement efficient task routing and model selection for AI features.

## Accessibility

- Follows WCAG guidelines for accessible web applications.
- Uses semantic HTML elements and ARIA attributes.

## Risks and Mitigations

- **Scalability:**

  - Mitigation: Use Firebase services that scale automatically and optimize FastAPI backend.

- **Data Privacy:**

  - Mitigation: Implement strong authentication, authorization measures, and data encryption.

- **Third-Party Dependencies:**

  - Mitigation: Keep dependencies up-to-date and monitor for vulnerabilities.

- **AI Model Performance:**

  - Mitigation: Implement fallback mechanisms and continuous monitoring of AI model performance.

## Testing Strategy

- **Unit Tests:**

  - Test individual components and functions using Jest.

- **Integration Tests:**

  - Test interactions between components and API routes.

- **End-to-End Tests:**

  - Use tools like Cypress for full application testing.

- **AI Model Testing:**

  - Implement specific tests for AI model outputs and performance.

## Deployment Plan

- **Hosting Platform:**

  - Deploy the Next.js application on Vercel.
  - Host the FastAPI backend on a scalable cloud platform (e.g., AWS, Google Cloud).

- **Environment Configuration:**

  - Set up environment variables on the hosting platforms.

- **Continuous Integration:**

  - Implement CI/CD pipelines for automated testing and deployment of both frontend and backend.

## Conclusion

The preliminary design provides a solid foundation for Constructiv AI, focusing on scalability, security, and a robust user experience. The hybrid architecture combining Next.js, Firebase, and FastAPI, along with the integration of multiple AI models, positions the application to meet the project's objectives effectively.