radio.onReceivedString(function (receivedString) {
    if (receivedString == "del") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (receivedString == "tras") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
    } else if (receivedString == "izq") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (receivedString == "der") {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
radio.setGroup(57)
