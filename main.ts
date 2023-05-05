radio.onReceivedValue(function (name, value) {
    comment.comment("DO NOT CHANGE!")
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (name == "A") {
        action = "A"
    }
    if (name == "B") {
        action = "B"
    }
    if (name == "AB") {
        action = "AB"
    }
    if (name == "C") {
        action = "C"
    }
    if (name == "D") {
        action = "D"
    }
    if (name == "E") {
        action = "E"
    }
    if (name == "F") {
        action = "F"
    }
})
let SecondSonar = 0
let action = ""
let yValue = 0
let xValue = 0
comment.comment("CHANGE THE RADIO GROUP TO YOUR TEAM'S JOYSTICK NUMBER")
radio.setGroup(29)
basic.showIcon(IconNames.Yes)
basic.showString("R")
let Sonar = 0
basic.forever(function () {
    if (action == "A") {
        comment.comment("Insert A-Button Action Between These Comments")
        comment.comment("Insert A-Button Action Between These Comments")
        action = "Z"
    } else if (action == "B") {
        comment.comment("Insert B-Button Action Between These Comments")
        comment.comment("Insert B-Button Action Between These Comments")
        action = "Z"
    } else if (action == "AB") {
        comment.comment("Insert A/B-Button Action Between These Comments")
        comment.comment("Insert A/B-Button Action Between These Comments")
        action = "Z"
    } else if (action == "C") {
        comment.comment("Insert C-Button Action Between These Comments")
        Sonar = 1
        comment.comment("Insert C-Button Action Between These Comments")
        action = "Z"
    } else if (action == "D") {
        comment.comment("Insert D-Button Action Between These Comments")
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 200)
        comment.comment("Insert D-Button Action Between These Comments")
        action = "Z"
    } else if (action == "E") {
        comment.comment("Insert E-Button Action Between These Comments")
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 310)
        comment.comment("Insert E-Button Action Between These Comments")
        action = "Z"
    } else if (action == "F") {
        comment.comment("Insert F-Button Action Between These Comments")
        Sonar = 0
        comment.comment("Insert F-Button Action Between These Comments")
        action = "Z"
    } else {
        comment.comment("DO NOT CHANGE!")
        wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue + xValue)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, yValue - xValue)
    }
})
basic.forever(function () {
    if (Sonar == 1) {
        wuKong.setAllMotor(100, 100)
        SecondSonar = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
        if (SecondSonar < 60 && SecondSonar > 3) {
            wuKong.setAllMotor(50, -100)
            basic.pause(randint(0, 10))
        } else {
            wuKong.setAllMotor(100, 100)
        }
    } else {
        if (action == "A") {
            comment.comment("Insert A-Button Action Between These Comments")
            comment.comment("Insert A-Button Action Between These Comments")
            action = "Z"
        } else if (action == "B") {
            comment.comment("Insert B-Button Action Between These Comments")
            comment.comment("Insert B-Button Action Between These Comments")
            action = "Z"
        } else if (action == "AB") {
            comment.comment("Insert A/B-Button Action Between These Comments")
            comment.comment("Insert A/B-Button Action Between These Comments")
            action = "Z"
        } else if (action == "C") {
            comment.comment("Insert C-Button Action Between These Comments")
            Sonar = 1
            comment.comment("Insert C-Button Action Between These Comments")
            action = "Z"
        } else if (action == "D") {
            comment.comment("Insert D-Button Action Between These Comments")
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 200)
            comment.comment("Insert D-Button Action Between These Comments")
            action = "Z"
        } else if (action == "E") {
            comment.comment("Insert E-Button Action Between These Comments")
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 310)
            comment.comment("Insert E-Button Action Between These Comments")
            action = "Z"
        } else if (action == "F") {
            comment.comment("Insert F-Button Action Between These Comments")
            Sonar = 0
            comment.comment("Insert F-Button Action Between These Comments")
            action = "Z"
        } else {
            comment.comment("DO NOT CHANGE!")
            wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue + xValue)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, yValue - xValue)
        }
    }
})
