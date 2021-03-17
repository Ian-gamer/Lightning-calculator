let Toggle = false
let Lightning_time = 0
input.onButtonPressed(Button.A, function () {
    Toggle = true
})
input.onGesture(Gesture.Shake, function () {
    Toggle = false
    Lightning_time = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Toggle = false
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(Lightning_time * 340)
})
basic.forever(function () {
    while (Toggle == true) {
        Lightning_time += 1
        basic.showNumber(Lightning_time)
        basic.pause(1000)
    }
})
