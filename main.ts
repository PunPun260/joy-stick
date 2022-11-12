basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    serial.writeValue("y", pins.analogReadPin(AnalogPin.P1))
})
