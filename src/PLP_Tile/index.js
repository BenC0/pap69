import "./index.css"
import { TestElement } from "../norman"
import tile from "./tile.html"

export class Tile {
    constructor(variant = null, position = 1) {
        this.template = null
        this.variant = variant
        // console.warn({element: this.element})
        this.element = null
        this.position = position
    }

    init () {
        if(this.element !== null) {
            console.warn(this.element)
            this.element.node.remove()
            this.element = null
        }
        this.template = tile
        if (!!this.template) {
            this.element = new TestElement(this.template)
            this.element._insert(`#searchBasedNavigation_widget [data-module="layout_product_tile_holder"] .product-tile:nth-of-type(${this.position})`, "beforeBegin")
            
            this.element.node.addEventListener("click", e=> {
                this.variant.track_event("PLP Tile Click")
            })
        }
    }
}