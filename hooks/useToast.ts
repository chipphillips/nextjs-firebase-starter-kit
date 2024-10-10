// Import the useState hook from React to manage state
import { useState } from 'react';

// Define the structure of a Toast notification
interface Toast {
  message: string;  // The text content of the toast
  type: 'success' | 'error' | 'info';  // The type of toast, which can affect its appearance
}

// Custom hook for managing toast notifications
export const useToast = () => {
  // Create a state variable 'toast' and a function to update it 'setToast'
  // The initial value is null (no toast shown)
  const [toast, setToast] = useState<Toast | null>(null);

  // Function to display a new toast notification
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    // Set the toast state with the provided message and type
    setToast({ message, type });
    
    // Automatically hide the toast after 3 seconds
    // This improves user experience by not requiring manual dismissal
    setTimeout(() => setToast(null), 3000);
  };

  // Return the current toast state and the function to show new toasts
  // This allows components using this hook to display and access toast notifications
  return { toast, showToast };
};