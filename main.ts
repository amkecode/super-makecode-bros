namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        Mario.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile20`)
    tiles.setWallAt(tiles.getTileLocation(16, 10), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(true)
})
let coin: Sprite = null
let Mario: Sprite = null
scene.setBackgroundColor(9)
Mario = sprites.create(img`
    . . . 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 . 
    . . e e e 5 5 e 5 . . . 
    . e 5 e 5 5 5 e 5 5 5 . 
    . e 5 e e 5 5 5 e 5 5 5 
    . e e 5 5 5 5 e e e e . 
    . . . 5 5 5 5 5 5 5 . . 
    . . e e 2 e e e . . . . 
    . e e e 2 e e 2 e e e . 
    e e e e 2 2 2 2 e e e e 
    5 5 e 2 5 2 2 5 2 e 5 5 
    5 5 5 2 2 2 2 2 2 5 5 5 
    5 5 2 2 2 2 2 2 2 2 5 5 
    . . 2 2 2 . . 2 2 2 . . 
    . e e e . . . . e e e . 
    e e e e . . . . e e e e 
    `, SpriteKind.Player)
controller.moveSprite(Mario, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Mario.ay = 350
scene.cameraFollowSprite(Mario)
tiles.setWallAt(tiles.getTileLocation(16, 10), true)
Mario.setPosition(6, 200)
for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
    coin = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f f 1 1 1 f f f f . . . 
        . . f f 1 1 5 5 5 5 5 f f . . . 
        . . f 1 5 5 1 1 1 f 5 5 f f . . 
        . f f 1 5 5 1 5 5 f 5 5 f f . . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
        . f f 1 5 5 1 5 5 f 5 5 f f . . 
        . . f 1 5 5 f f f f 5 5 f f . . 
        . . f f 1 5 5 5 5 5 5 f f . . . 
        . . . f f f 5 5 5 f f f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Coin)
    tiles.setTileAt(value, assets.tile`transparency16`)
    tiles.placeOnTile(coin, value)
}
