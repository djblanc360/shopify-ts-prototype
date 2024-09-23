import { useFetch } from "./useFetch"
import { getCollection } from "@services/collectionService"
import type { Collection } from "../types/Collection"

// hook to fetch and return collection data
export const useCollectionData = (collectionId: string) => {
    const { data: collection, loading, error } = useFetch<Partial<Collection>>(() => getCollection(collectionId), [collectionId])

    return { collection, loading, error }
}