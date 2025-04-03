let Direção = 0
basic.forever(function () {
    Direção = input.compassHeading()
    if (Direção < 45 || Direção > 315) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
