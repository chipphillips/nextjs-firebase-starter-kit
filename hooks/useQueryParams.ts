import { useRouter } from 'next/router'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * This hook manages URL query parameters for easier manipulation of the application's state via the URL.
 * It provides functions to get, set, and remove query parameters.
 * 
 * @param {Object} options - Configuration options for the hook
 * @param {string} [options.basePath] - An optional base path to prepend to the URL
 * @returns {Object} An object containing utility functions for query parameter manipulation
 */
type QueryParams = {
  basePath?: string
}

export const useQueryParams = ({ basePath }: Partial<QueryParams>) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  /**
   * Retrieves the value of a specific query parameter
   * @param {string} name - The name of the query parameter to retrieve
   * @returns {string} The value of the query parameter, or an empty string if not found
   */
  const getDefaultParams = (name: string) => {
    return searchParams?.get(name) || ''
  }

  /**
   * Constructs the full pathname, including the base path if provided
   * @returns {string} The full pathname
   */
  const handleBasePath = () => {
    if (!basePath) return pathname
    let path = basePath.startsWith('/') ? basePath.slice(1) : basePath
    let newPathName = pathname
    if (pathname.endsWith('/')) {
      newPathName = pathname.slice(0, -1)
    }
    return newPathName.includes(path) ? newPathName : `${newPathName}/${path}`
  }

  /**
   * Removes specified query parameters from the URL
   * @param {string[]} name - An array of query parameter names to remove
   */
  const removeQuery = (name: string[]) => {
    const params = new URLSearchParams(searchParams?.toString())
    name.forEach((item) => {
      params.delete(item)
    })
    router.push(`${pathname}?${params.toString()}`)
  }

  /**
   * Sets multiple query parameters in the URL
   * @param {Record<string, string>} params - An object containing the query parameters to set
   */
  const querySet = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams()
    Object.keys(params).forEach(key => {
      const name = key.toLowerCase()
      const value = params[key] ? params[key].toLowerCase() : ''
      if (value.length < 1) return
      searchParams.set(name, value)
    })
    
    const newPathName = handleBasePath() + '?' + searchParams.toString()
    router.push(newPathName)
  }

  return {
    getDefaultParams,
    querySet,
    removeQuery
  }
}
