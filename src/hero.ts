class Carousel extends HTMLElement {
  constructor() {
    super()
  }
}

class Hero {
  constructor() {
    this.init()
  }

  init() {
    // init collection-specific logic
    customElements.define('base-carousel', Carousel)
  }
}

// conditionally instantiate Hero if a specific DOM element exists to prevent running on all pages
if (document.querySelector('.hero-wrapper')) {
  new Hero()
}
