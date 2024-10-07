import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

import { fetchWithRetry, fetchWithRetryJSON } from '../utils/apiUtils';
import { logger } from '../utils/logger';

// Mock the global fetch function
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

// Mock the logger
jest.mock('../utils/logger', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

describe('apiUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchWithRetry', () => {
    it('should return response on successful fetch', async () => {
      const mockData = { data: 'test' };
      const mockResponse = new Response(JSON.stringify(mockData), { status: 200 });
      (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(mockResponse);

      const result = await fetchWithRetry('https://api.example.com/data');
      expect(result).toBe(mockResponse);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(logger.warn).not.toHaveBeenCalled();
      expect(logger.error).not.toHaveBeenCalled();
    });

    it('should retry on failure and succeed', async () => {
      const mockErrorResponse = new Response(null, { status: 500 });
      const mockSuccessResponse = new Response(JSON.stringify({ data: 'test' }), { status: 200 });
      (global.fetch as jest.MockedFunction<typeof fetch>)
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValueOnce(mockErrorResponse)
        .mockResolvedValueOnce(mockSuccessResponse);

      const result = await fetchWithRetry('https://api.example.com/data');
      expect(result).toBe(mockSuccessResponse);
      expect(global.fetch).toHaveBeenCalledTimes(3);
      expect(logger.warn).toHaveBeenCalledTimes(2);
      expect(logger.error).not.toHaveBeenCalled();
    });

    it('should throw error after max retries', async () => {
      (global.fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(new Error('Network error'));

      await expect(fetchWithRetry('https://api.example.com/data')).rejects.toThrow('Network error');
      expect(global.fetch).toHaveBeenCalledTimes(3);
      expect(logger.warn).toHaveBeenCalledTimes(3);
      expect(logger.error).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchWithRetryJSON', () => {
    it('should return JSON data on successful fetch', async () => {
      const mockData = { data: 'test' };
      const mockResponse = new Response(JSON.stringify(mockData), { status: 200 });
      (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(mockResponse);

      const result = await fetchWithRetryJSON('https://api.example.com/data');
      expect(result).toEqual(mockData);
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });
});