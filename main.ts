let light_val = 0
music.setVolume(255)
basic.forever(function () {
    light_val = input.lightLevel()
    led.plotBarGraph(
    light_val,
    255
    )
})
basic.forever(function () {
    if (light_val > 150) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    }
})
