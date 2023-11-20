import "./index.css"
import { TestElement } from "../norman"

export class Tile {
    constructor(variant = null, position = 1, details) {
        this.template = null
        this.variant = variant
        // console.warn({element: this.element})
        this.element = null
        this.position = position
        this.name = details.name
        this.target = details.target
        this.image = details.image
    }

    init () {
        if(this.element !== null) {
            console.warn(this.element)
            this.element.node.remove()
            this.element = null
        }
        this.template = `<a class="product-tile marketing_tile" data-module="product_tile" href="${this.target}">
            <img src="${this.image}" alt="${this.name} - Black Friday Offer">
        </a>`
        if (!!this.template) {
            this.element = new TestElement(this.template)
            this.element._insert(`#searchBasedNavigation_widget [data-module="layout_product_tile_holder"] .product-tile:nth-of-type(${this.position})`, "beforeBegin")
            
            this.variant.track_event(`PLP Tile Impression - ${this.name}`)
            
            this.element.node.addEventListener("click", e=> {
                this.variant.track_event(`PLP Tile Click - ${this.name}`)
            })
        }
    }
}