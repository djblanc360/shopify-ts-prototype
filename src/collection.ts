import 'keen-slider/keen-slider.min.css'
import KeenSlider, { KeenSliderInstance } from 'keen-slider' // see 'node_modues/keen-slider/keen-slider.d.ts
import { Product } from './types'

class Carousel extends HTMLElement {
    products: Product[]
    settings: any[]
    slider: KeenSliderInstance | null = null // slider instance

    constructor() {
        super()
        this.products = JSON.parse(this.dataset.products || '[]')
        this.settings = JSON.parse(this.dataset.settings || '{}')
        this.initSwiper()
        console.log('in Carousel - products', this.products)
        console.log('in Carousel - settings', this.settings)
        // this.slider = null
    }

  connectedCallback() {
    // this.initSwiper()
  }

  initSwiper() {
    const carouselElement = this.querySelector('.carousel') as HTMLElement // Cast to HTMLElement
    if (carouselElement) {
        this.slider = new KeenSlider(carouselElement, {
            loop: true,
            breakpoints: {
                "(min-width: 400px)": {
                    slides: { perView: 2, spacing: 5 },
                },
                "(min-width: 1000px)": {
                    slides: { perView: 4, spacing: 10 },
                },
            },
            created: () => {
                console.log('KeenSlider created', carouselElement.classList)
            },
            slides: { perView: 1 },
        })
    }
  }

  disconnectedCallback() {
    if (this.slider) {
        this.slider.destroy()
        this.slider = null
    }
  }
}

class Collection {
    constructor() {
        this.init()
    }

    init() {
        // init collection-specific logic
        customElements.define('base-carousel', Carousel)
    }
}

// conditionally instantiate Collection if a specific DOM element exists to prevent running on all pages
if (document.querySelector('.collection-wrapper')) {
    new Collection()
}