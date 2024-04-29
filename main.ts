function Left () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    Backward()
})
function Forward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    Stop()
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    Stop()
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    Forward()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        Forward()
    } else if (receivedString == "backward") {
        Backward()
    } else if (receivedString == "left") {
        Left()
    } else if (receivedString == "right") {
        Right()
    } else if (receivedString == "stop") {
        Stop()
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "pitch") {
        if (value < -20) {
            Forward()
        }
        if (value > 20) {
            Backward()
        }
    } else {
    	
    }
    if (name == "roll") {
        if (value < -20) {
            Right()
        }
        if (value > 20) {
            Left()
        }
    } else {
    	
    }
})
function Right () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
function Stop () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
}
function Backward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        while (pins.digitalReadPin(DigitalPin.P0) == 1) {
            Right()
        }
        Stop()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        while (pins.digitalReadPin(DigitalPin.P13) == 1) {
            Left()
        }
        Stop()
    } else {
    	
    }
})
