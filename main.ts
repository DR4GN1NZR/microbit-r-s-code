input.onButtonPressed(Button.A, function () {
    p1 += -2
    if (p1 == 0) {
        p1 = 10
        basic.showString("P1 lost")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(p1)
    basic.showString("&")
    basic.showNumber(p2)
})
input.onButtonPressed(Button.B, function () {
    p2 += -2
    if (p2 == 0) {
        p2 = 10
        basic.showString("P2 lost")
    }
})
let p1 = 0
let p2 = 0
p2 = 10
p1 = 10
