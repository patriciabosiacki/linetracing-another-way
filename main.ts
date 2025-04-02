basic.forever(function on_forever() {
    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    let lastSide = 0
    while (Math.abs(CutebotPro.getOffset()) <= 1600) {
        CutebotPro.pwmCruiseControl(10, 10)
        if (CutebotPro.getOffset() >= 0) {
            lastSide = 1
        } else {
            lastSide = -1
        }
        
    }
    let degreesTurned = 0
    if (lastSide == 1) {
        while (Math.abs(CutebotPro.getOffset()) >= 1600 && degreesTurned <= 400) {
            CutebotPro.pwmCruiseControl(10, -10)
            CutebotPro.angleRunning(CutebotProWheel.LeftWheel, 20, CutebotProAngleUnits.Angle)
            degreesTurned += 20
            CutebotPro.pwmCruiseControl(-10, -10)
            CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.25, CutebotProDistanceUnits.Cm)
        }
        if (Math.abs(CutebotPro.getOffset()) >= 1600) {
            while (Math.abs(CutebotPro.getOffset()) >= 1400) {
                CutebotPro.pwmCruiseControl(20, -20)
                CutebotPro.angleRunning(CutebotProWheel.RightWheel, 20, CutebotProAngleUnits.Angle)
                CutebotPro.pwmCruiseControl(-20, -20)
                CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.25, CutebotProDistanceUnits.Cm)
            }
            CutebotPro.angleRunning(CutebotProWheel.RightWheel, 20, CutebotProAngleUnits.Angle)
            CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.3, CutebotProDistanceUnits.Cm)
        }
        
    } else {
        while (Math.abs(CutebotPro.getOffset()) >= 1600 && degreesTurned <= 400) {
            CutebotPro.pwmCruiseControl(10, -10)
            CutebotPro.angleRunning(CutebotProWheel.RightWheel, 20, CutebotProAngleUnits.Angle)
            degreesTurned += 20
            CutebotPro.pwmCruiseControl(-10, -10)
            CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.25, CutebotProDistanceUnits.Cm)
        }
        if (Math.abs(CutebotPro.getOffset()) >= 1600) {
            while (Math.abs(CutebotPro.getOffset()) >= 1400) {
                CutebotPro.pwmCruiseControl(20, -20)
                CutebotPro.angleRunning(CutebotProWheel.LeftWheel, 20, CutebotProAngleUnits.Angle)
                CutebotPro.pwmCruiseControl(-20, -20)
                CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.25, CutebotProDistanceUnits.Cm)
            }
            CutebotPro.angleRunning(CutebotProWheel.LeftWheel, 20, CutebotProAngleUnits.Angle)
            CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 0.3, CutebotProDistanceUnits.Cm)
        }
        
    }
    
    CutebotPro.pwmCruiseControl(10, 10)
})
