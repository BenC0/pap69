import { Tile } from "../PLP_Tile"
import { Variant } from "../norman"
import { ExtractVariantName } from "../norman/ExtractVariantName"
import { getRelevantTile } from "./get_relevant_tile"

const conditions = _ => {
    let conditions = [
        !!document.querySelector(`body`),
        !!getRelevantTile(),
    ]
    return conditions.every(a => a)
}

function action() {
    this.log("Action loaded")
    console.warn(this)
    let relevant_tile = getRelevantTile()
    if (!!relevant_tile) {
        let tile = new Tile(this, 1, relevant_tile)
        tile.init()
    }
}

function fallback() {
    this.log("Test can't run, fallback loaded", true)
}

const control = new Variant(TEST, ExtractVariantName(__dirname), conditions, action, fallback)
control.run()