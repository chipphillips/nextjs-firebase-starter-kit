'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

// Define the props that the ErrorBoundary component will accept
interface ErrorBoundaryProps {
  children: ReactNode; // The content to be rendered normally when there's no error
  fallback: ReactNode; // The content to display when an error occurs
}

// Define the state structure for the ErrorBoundary
interface ErrorBoundaryState {
  hasError: boolean; // Indicates whether an error has occurred
}

// ErrorBoundary component: Catches JavaScript errors anywhere in its child component tree
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Initialize the state with no error
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error occurs in a child component
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // This lifecycle method is called after an error has been thrown by a descendant component
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    // If an error occurred, render the fallback UI
    if (this.state.hasError) {
      return this.props.fallback;
    }

    // Otherwise, render the children normally
    return this.props.children;
  }
}

export default ErrorBoundary;