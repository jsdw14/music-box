let light_val = 0
music.setVolume(255)
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    light_val = input.lightLevel()
    if (light_val > 20) {
        light_val = input.lightLevel()
        led.plotBarGraph(
        light_val,
        255
        )
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
})
basic.forever(function () {
    if (light_val > 150) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    }
})
