# Preliminary Design Review (PDR) for Constructiv AI

## Introduction

The purpose of this document is to present the initial design and architecture of the Constructiv AI application. This PDR outlines the system architecture, design decisions, data models, and key functionalities.

## System Architecture

### Overview

Constructiv AI is a full-stack web application built using Next.js. It leverages server-side rendering, API routes, and integrates with Firebase services for authentication and data storage.

### Architecture Diagram

[Include an architecture diagram if possible]

## Design Decisions

### Technology Stack

- **Frontend Framework:** Next.js for server-side rendering and routing.
- **Styling:** Tailwind CSS for utility-first styling.
- **Language:** TypeScript for type safety and better developer experience.
- **Authentication:** Firebase Authentication for secure user management.
- **Database:** Firestore (Firebase) for real-time database capabilities.
- **Server-Side Operations:** Firebase Admin SDK for backend functionalities within Next.js API routes.

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

## Security Considerations

- **Authentication Verification:**

  - API routes verify Firebase ID tokens to authenticate requests.

- **Data Access:**

  - Users can only access their own data.
  - Firestore security rules enforce data access policies.

- **Environment Variables:**

  - Sensitive credentials are stored in `.env.local` and not committed to version control.

## Performance Considerations

- **Server-Side Rendering:**

  - Improves initial page load times and SEO.

- **Code Splitting:**

  - Uses dynamic imports to load components as needed.

- **Caching:**

  - Leverages browser caching and CDN capabilities.

## Accessibility

- Follows WCAG guidelines for accessible web applications.
- Uses semantic HTML elements and ARIA attributes.

## Risks and Mitigations

- **Scalability:**

  - Mitigation: Use Firebase services that scale automatically.

- **Data Privacy:**

  - Mitigation: Implement strong authentication and authorization measures.

- **Third-Party Dependencies:**

  - Mitigation: Keep dependencies up-to-date and monitor for vulnerabilities.

## Testing Strategy

- **Unit Tests:**

  - Test individual components and functions using Jest.

- **Integration Tests:**

  - Test interactions between components and API routes.

- **End-to-End Tests:**

  - (Optional) Use tools like Cypress for full application testing.

## Deployment Plan

- **Hosting Platform:**

  - Deploy the application on Vercel for seamless integration with Next.js.

- **Environment Configuration:**

  - Set up environment variables on the hosting platform.

- **Continuous Integration:**

  - Implement CI/CD pipelines for automated testing and deployment.

## Conclusion

The preliminary design provides a solid foundation for Constructiv AI, focusing on scalability, security, and a robust user experience. Further development and testing will refine the application and ensure it meets the project's objectives.

