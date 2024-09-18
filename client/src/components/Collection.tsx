import { useCollectionData } from '@hooks/useCollectionData'
import ProductCard from './ProductCard'
import type { Collection } from '../types/Collection'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const CollectionSection = ({ collectionId }: {collectionId: string}) => {
    const { collection, loading, error } = useCollectionData(collectionId)
    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
          "(min-width: 600px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 768px)": {
            slides: { perView: 3, spacing: 10 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 4, spacing: 10 },
          },
        },
        slides: { perView: 1 },
      })

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
        <h1>{collection?.title}</h1>
        <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide">
                {collection?.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </div>
    )
}

export default CollectionSection