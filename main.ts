radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let V = 0
let I = 0
comment.comment("CHANGE THE RADIO GROUP TO YOUR TEAM'S JOYSTICK NUMBER")
radio.setGroup(29)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.showIcon(IconNames.Yes)
basic.showString("R")
basic.forever(function () {
    if (I == 1) {
        if (V < 90) {
            V = V + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
        }
    } else if (I == 2) {
        V = V - 2
        basic.pause(100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
    }
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
    }
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -35)
    }
    if (I == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -80)
    }
    if (I == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 80)
    }
    if (I == 0) {
        wuKong.stopAllMotor()
    }
})
