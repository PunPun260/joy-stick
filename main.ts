let y = 0
let x = 0
led.plot(2, 2)
let x1 = 2
let y1 = 2
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    serial.writeValue("y", pins.analogReadPin(AnalogPin.P1))
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    if (x > 750) {
        x1 += 1
        if (x1 < 0) {
            x1 += 1
            led.plot(x1, y1)
        } else if (x1 > 4) {
            x1 += -1
            led.plot(x1, y1)
        } else {
            led.toggle(x1 - 1, y1)
            led.plot(x1, y1)
            basic.pause(100)
        }
    } else if (x < 250) {
        x1 += -1
        if (x1 < 0) {
            x1 += 1
            led.plot(x1, y1)
        } else if (x1 > 4) {
            x1 += -1
            led.plot(x1, y1)
        } else {
            led.toggle(x1 + 1, y1)
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
    if (y > 750) {
        y1 += 1
        if (y1 < 0) {
            y1 += 1
            led.plot(x1, y1)
        } else if (y1 > 4) {
            y1 += -1
            led.plot(x1, y1)
        } else {
            led.toggle(x1, y1 - 1)
            led.plot(x1, y1)
            basic.pause(100)
        }
    } else if (y < 250) {
        y1 += -1
        if (y1 < 0) {
            y1 += 1
            led.plot(x1, y1)
        } else if (y1 > 4) {
            y1 += -1
            led.plot(x1, y1)
        } else {
            led.toggle(x1, y1 + 1)
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
})
