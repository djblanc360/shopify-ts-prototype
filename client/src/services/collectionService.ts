import type { Collection } from '../types/Collection'

export const getCollection = async (collectionId: string): Promise<Collection> => {
    const response = await fetch(`/api/collections/${collectionId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch collection')
    }
    const data = await response.json()
    return data.collection as Collection  // Assuming the API response structure
}