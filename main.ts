let temperatur = 0
basic.forever(function () {
    basic.clearScreen()
    temperatur = input.temperature()
    if (temperatur <= 16) {
        led.plot(3, 4)
    } else if (temperatur <= 17) {
        led.plot(2, 4)
    } else if (temperatur <= 18) {
        led.plot(1, 4)
    } else if (temperatur <= 19) {
        led.plot(0, 4)
    } else if (temperatur <= 20) {
        led.plot(0, 3)
    } else if (temperatur <= 21) {
        led.plot(0, 2)
    } else if (temperatur <= 22) {
        led.plot(0, 1)
    } else if (temperatur <= 23) {
        led.plot(0, 0)
    } else if (temperatur <= 24) {
        led.plot(1, 0)
    } else if (temperatur <= 25) {
        led.plot(2, 0)
    } else if (temperatur <= 26) {
        led.plot(3, 0)
    } else if (temperatur <= 27) {
        led.plot(4, 0)
    } else if (temperatur <= 28) {
        led.plot(4, 1)
    } else if (temperatur <= 29) {
        led.plot(4, 2)
    } else if (temperatur <= 30) {
        led.plot(4, 3)
    } else if (temperatur <= 31) {
        led.plot(4, 4)
    } else {
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    }
})
