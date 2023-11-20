export function getRelevantTile() {
    const tile_map = [
        {
            "name": "View all dog food",
            "location": "/shop/en/pets/dog/dog-food/view-all-dog-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/rc-dog-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b30023d4751700474882.png"
        },
        {
            "name": "Dry Dog",
            "location": "/shop/en/pets/dog/dog-food/dry-dog-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/jwb-dog-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2ff64c44f1700474870.png"
        },
        {
            "name": "Wet dog",
            "location": "/shop/en/pets/dog/dog-food/wet-dog-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/butchers-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2fc8733d31700474824.png"
        },
        {
            "name": "Dog Treats",
            "location": "/shop/en/pets/dog/dog-treats",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/dog-treats-4-for-3-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2fa35285e1700474787.png"
        },
        {
            "name": "View all cat food",
            "location": "/shop/en/pets/cat/cat-food/view-all-cat-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/rc-cat-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2f6393ae81700474723.png"
        },
        {
            "name": "Dry cat",
            "location": "/shop/en/pets/cat/cat-food/dry-cat-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/hills-cat-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2f4e013161700474702.png"
        },
        {
            "name": "wet cat",
            "location": "/shop/en/pets/cat/cat-food/wet-cat-food",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/sheba-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2f865e1411700474758.png"
        },
        {
            "name": "Dog toys",
            "location": "/shop/en/pets/dog/dog-toys",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/dog-toys-save-30-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b30101cf9e1700474896.png"
        },
        {
            "name": "Cat toys",
            "location": "/shop/en/pets/cat/cat-toys",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/cat-toys-save-50-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2f9979af51700474777.png"
        },
        {
            "name": "Dog beds",
            "location": "/shop/en/pets/dog/dog-beds",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/dog-bedding-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2fb0d8e511700474800.png"
        },
        {
            "name": "Cat beds",
            "location": "/shop/en/pets/cat/cat-beds",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/cat-bedding-pick-",
            "image": "https://editor-assets.abtasty.com/47297/655b2f357dc791700474677.png"
        },
        {
            "name": "Coats & clothing",
            "location": "/shop/en/pets/dog/dog-coats-and-clothing",
            "target": "https://www.petsathome.com/shop/en/pets/merch-groups/coats-and-clothing-pick",
            "image": "https://editor-assets.abtasty.com/47297/655b2fea418e21700474858.png"
        }
    ]
    const currentPagePath = window.location.pathname
    let relevant_tiles = tile_map.filter(tile => tile.location == currentPagePath)
    if (relevant_tiles.length == 0) {
        return null
    } else {
        return relevant_tiles[0]
    }
}