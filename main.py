def on_forever():
    CutebotPro.color_light(CutebotProRGBLight.RGBA, 0xff0000)
    lastSide = 0
    while abs(CutebotPro.get_offset()) <= 1600:
        CutebotPro.pwm_cruise_control(10, 10)
        if CutebotPro.get_offset() >= 0:
            lastSide = 1 
        else:
            lastSide = -1
    degreesTurned = 0
    if lastSide == 1:
        while abs(CutebotPro.get_offset()) >= 1600 and degreesTurned <= 400:
            CutebotPro.pwm_cruise_control(10,-10)
            CutebotPro.angle_running(CutebotProWheel.LEFT_WHEEL,20,CutebotProAngleUnits.ANGLE)
            degreesTurned += 20
            CutebotPro.pwm_cruise_control(-10,-10)
            CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.25, CutebotProDistanceUnits.CM)
        if abs(CutebotPro.get_offset()) >= 1600:
            while abs(CutebotPro.get_offset()) >= 1400:
                CutebotPro.pwm_cruise_control(20,-20)
                CutebotPro.angle_running(CutebotProWheel.RIGHT_WHEEL,20,CutebotProAngleUnits.ANGLE)
                CutebotPro.pwm_cruise_control(-20,-20)
                CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.25, CutebotProDistanceUnits.CM)
            CutebotPro.angle_running(CutebotProWheel.RIGHT_WHEEL,20,CutebotProAngleUnits.ANGLE)
            CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.3, CutebotProDistanceUnits.CM)
    else: 
        while abs(CutebotPro.get_offset()) >= 1600 and degreesTurned <= 400:    
            CutebotPro.pwm_cruise_control(10,-10)
            CutebotPro.angle_running(CutebotProWheel.RIGHT_WHEEL,20,CutebotProAngleUnits.ANGLE)
            degreesTurned += 20
            CutebotPro.pwm_cruise_control(-10,-10)
            CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.25, CutebotProDistanceUnits.CM)
        if abs(CutebotPro.get_offset()) >= 1600:
            while abs(CutebotPro.get_offset()) >= 1400:
                CutebotPro.pwm_cruise_control(20,-20)
                CutebotPro.angle_running(CutebotProWheel.LEFT_WHEEL,20,CutebotProAngleUnits.ANGLE)
                CutebotPro.pwm_cruise_control(-20,-20)
                CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.25, CutebotProDistanceUnits.CM)
            CutebotPro.angle_running(CutebotProWheel.LEFT_WHEEL,20,CutebotProAngleUnits.ANGLE)
            CutebotPro.distance_running(CutebotProOrientation.RETREAT,0.3, CutebotProDistanceUnits.CM)
    CutebotPro.pwm_cruise_control(10, 10)
basic.forever(on_forever)
