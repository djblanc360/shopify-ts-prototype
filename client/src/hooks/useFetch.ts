import { useState, useEffect } from "react"

// promise factory
export const useFetch = <T>(fetchFunction: () => Promise<T>, dependencies: unknown[] = []) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetchFunction()
                setData(res)
            } catch (err) {
                setError(`error fetching data: ${err}`)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, dependencies)

    return { data, loading, error }
}