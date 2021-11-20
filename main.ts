controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(26, 90)
    pause(100)
    mySprite.setPosition(26, 80)
    pause(100)
    mySprite.setPosition(26, 70)
    pause(100)
    mySprite.setPosition(26, 80)
    pause(100)
    mySprite.setPosition(26, 90)
    pause(100)
    mySprite.setPosition(26, 100)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 1e+67; index++) {
        mySprite2.setPosition(90, 100)
        pause(100)
        mySprite2.setPosition(80, 100)
        pause(100)
        mySprite2.setPosition(70, 100)
        pause(100)
        mySprite2.setPosition(60, 100)
        pause(100)
        mySprite2.setPosition(50, 100)
        pause(100)
        mySprite2.setPosition(40, 100)
        pause(100)
        mySprite2.setPosition(30, 100)
        pause(100)
        mySprite2.setPosition(20, 100)
        pause(100)
        mySprite2.setPosition(10, 100)
        pause(100)
        mySprite2.setPosition(0, 100)
        pause(100)
        mySprite2.setPosition(-10, 100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -150)
    pause(300)
    mySprite.setVelocity(0, 150)
    pause(300)
    mySprite.setVelocity(0, 0)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 1e+132; index++) {
        scene.setBackgroundColor(2)
        pause(100)
        scene.setBackgroundColor(4)
        pause(100)
        scene.setBackgroundColor(5)
        pause(100)
        scene.setBackgroundColor(7)
        pause(100)
        scene.setBackgroundColor(8)
        pause(100)
        scene.setBackgroundColor(10)
        pause(100)
    }
})
controller.combos.attachCombo("UpUpDownDownLeftRightLeftRight", function () {
    game.showLongText("Nice! You now have Developer Permissions on MicrogamerZ!", DialogLayout.Bottom)
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("Welcome to Jump Jump! Press space to start! (Hit space when done reading these!)", DialogLayout.Bottom)
game.showLongText("How to play: Hit Enter (B) Then jump over the spikes using Space (A).", DialogLayout.Bottom)
game.showLongText("Press Left Arrow to toggle rainbow mode. Other then that, you are set to play!", DialogLayout.Bottom)
info.setLife(1)
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`JJ_MainChar1`, SpriteKind.Player)
mySprite.setPosition(26, 100)
mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f b b f . . . . . . 
    . . . . . f f b b f f . . . . . 
    . . . . . f b b b b f . . . . . 
    . . . . f f b b b b f f . . . . 
    . . . . f b b b b b b f . . . . 
    . . . f f b b b b b b f f . . . 
    . . . f b b b b b b b b f . . . 
    . . f f b b b b b b b b f f . . 
    . . f b b b b b b b b b b f . . 
    . f f b b b b b b b b b b f f . 
    . f b b b b b b b b b b b b f . 
    f f b b b b b b b b b b b b f f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
mySprite2.setPosition(100, 100)
for (let index = 0; index < 1e+238; index++) {
    music.playMelody("C G F G C G C G ", 200)
}
