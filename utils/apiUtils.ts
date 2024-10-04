import { logger } from './logger'; // We'll create this logger utility

type FetchOptions = RequestInit & {
  retries?: number;
  retryDelay?: number;
};

export async function fetchWithRetry(url: string, options: FetchOptions = {}): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchOptions } = options;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        logger.warn(`API call failed (attempt ${i + 1}/${retries}): ${error.message}`);
        if (i === retries - 1) {
          logger.error(`API call failed after ${retries} attempts: ${error.message}`);
          throw error; // If it's the last attempt, throw the error
        }
      } else {
        logger.warn(`API call failed (attempt ${i + 1}/${retries}): Unknown error`);
        if (i === retries - 1) {
          logger.error(`API call failed after ${retries} attempts: Unknown error`);
          throw new Error('Unknown error occurred');
        }
      }
      logger.info(`Retrying in ${retryDelay}ms...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }

  // This line should never be reached due to the throw in the loop,
  // but TypeScript requires it for type safety
  throw new Error('Unexpected error in fetchWithRetry');
}

export async function fetchWithRetryJSON<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const response = await fetchWithRetry(url, options);
  return response.json();
}