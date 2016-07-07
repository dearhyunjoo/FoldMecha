function Bird(){

this.driverM = color(0)
this.drivenM = color(255)
this.radius= 64

this.rotation_interlock = PI+.21 //temp
this.in_gear = this.radius-27 //temp

this.rotationAngle=0

this.a = 0
this.b = 0

this.angle_increase = 0.015
this.minNumberOfTeeth=3
this.maxNumberOfTeeth=30
this.centergearX=width/2+70
this.centergearY=height/2+80

this.UI1_created = false
this.noDraw = 0

var tempGear = grey
var tempLinkage = blue2
var tempLinkage_center = black

this.init = function(){

   this.t2 = new Turtle()
   this.dist_a = 250
   this.dist_b = 120
   this.dist_c = 100
   this.dist_d = 300
   this.dist_e = 350
   this.dist_f = 380

   this.xx = 20
   this.yy = 40

   this.dist_aMin = 0
   this.dist_aMax = 400
   this.dist_bMin = 0
   this.dist_bMax = 400
   this.dist_dMin = 0
   this.dist_dMax = 400
   this.dist_cMin = 0
   this.dist_cMax = 400
   this.dist_eMin = 0
   this.dist_eMax = 400
   this.dist_fMin = 0
   this.dist_fMax = 400
   this.xMin = 0
   this.xMax = 200
   this.yMin = 0
   this.yMax = 200
   this.lengthGap = 10
  }

  this.drawWing = function(tempX, tempY, centerPositionX,centerPositionY,side){ //x & y are where to start drawing wings

     this.t1 = new Turtle()

     this.wing_axisX = -1*(50+(this.radius+this.teethHeight/2))-20 + (this.xx-15)*side-tempX
     this.wing_axisY = this.yy-10-tempY
     this.wing_topLengthX = 18
     this.wing_topLengthY = 0

     this.step1_a = sq(this.dist_b) + sq(this.dist_d) - sq(this.dist_a)
     this.step2_a = 2*this.dist_b*this.dist_d
     this.angle_cosine_a = this.step1_a/this.step2_a
     this.step3_a = acos(this.angle_cosine_a)
     this.angle_a = degrees(this.step3_a)

     this.step1_d2 = sq(this.dist_c) + sq(this.dist_e) - sq(this.dist_d)
     this.step2_d2 = 2*this.dist_c*this.dist_e
     this.angle_cosine_d2 = this.step1_d2/this.step2_d2
     this.step3_d2 = acos(this.angle_cosine_d2)
     this.angle_d2 = degrees(this.step3_d2)

     this.step1_e = sq(this.dist_d) + sq(this.dist_c) - sq(this.dist_e)
     this.step2_e = 2*this.dist_d*this.dist_c
     this.angle_cosine_e = this.step1_e/this.step2_e
     this.step3_e = acos(this.angle_cosine_e)
     this.angle_e = degrees(this.step3_e)

     this.t1.penup()
     this.t1.forward(this.wing_axisY+this.wing_topLengthY)
     this.t1.left(90*side)
     this.t1.forward((this.wing_axisX+this.wing_topLengthX*side)*side)

     this.d2_x = this.t1.x
     this.d2_y = this.t1.y      // point d2: where the wing starting point.

     var leftTurn = this.angle_f + this.angle_x

     this.t1.right(90*side)
     this.t1.left((180-leftTurn)*side)
     this.t1.forward(this.dist_e)

     this.b_x = this.t1.x
     this.b_y = this.t1.y    // point B: the edge of the wing

     this.t1.back(this.dist_e)
     this.t1.right(this.angle_d2*side)
     this.t1.forward(this.dist_c)

     this.a_x = this.t1.x
     this.a_y = this.t1.y    // point A: headside triangle

     this.t1.left((180-(this.angle_a+this.angle_e))*side)
     this.t1.forward(this.dist_b)

     this.c_x = this.t1.x
     this.c_y = this.t1.y    // point C: top of the wing triangle

 // CACULATION IS DONE _ COME BACK TO HOME
     this.t1.back(this.dist_b)
     this.t1.right((180-(this.angle_a+this.angle_e))*side)

     this.t1.back(this.dist_c)
     this.t1.left(this.angle_d2*side)

     this.t1.right((180-leftTurn)*side)
     this.t1.left(90*side)

     this.t1.back((this.wing_axisX+this.wing_topLengthX*side)*side)
     this.t1.right(90*side)
     this.t1.back(this.wing_axisY+this.wing_topLengthY)

     var theta = this.rotationAngle*this.rotationDirection+this.rotation_interlock
     var len = sqrt(pow(this.in_gear,2)+pow(this.in_gear,2))

     push()
     translate(centerPositionX,centerPositionY)
     var rad = -.11 // due to some mismatch
     this.dist_g = dist(len*cos(theta+rad), len*sin(theta+rad), this.d2_x-centerPositionX, this.d2_y-centerPositionY)

     this.pinion_Xdot = len*cos(theta+rad)
     this.pinion_Ydot = len*sin(theta+rad)

     this.dist_x = abs(this.d2_x-centerPositionX-this.pinion_Xdot)
     this.dist_y = abs(this.d2_y-centerPositionY-this.pinion_Ydot)

     this.step1_x = sq(this.dist_y) + sq(this.dist_g) - sq(this.dist_x)
     this.step2_x = 2*this.dist_y*this.dist_g
     this.angle_cosine_x = this.step1_x/this.step2_x
     this.step3_x =acos(this.angle_cosine_x)
     this.angle_x =degrees(this.step3_x)

     stroke(tempLinkage)
     fill(tempLinkage)
     line(this.pinion_Xdot,this.pinion_Ydot,this.b_x-centerPositionX,this.b_y-centerPositionY) // side f
     ellipse(this.pinion_Xdot,this.pinion_Ydot, 8,8) //moving pivot on gears

     pop()

     this.step1_f = sq(this.dist_e) + sq(this.dist_g) - sq(this.dist_f)
     this.step2_f = 2*this.dist_e*this.dist_g
     this.angle_cosine_f = this.step1_f/this.step2_f
     this.step3_f =acos(this.angle_cosine_f)
     this.angle_f =degrees(this.step3_f)

     stroke(tempLinkage)
     fill(tempLinkage)
     line(this.a_x,this.a_y,this.d2_x,this.d2_y) // side c
     triangle(this.a_x, this.a_y, this.b_x, this.b_y, this.c_x, this.c_y) //side a,b,c
     noStroke()
     fill(tempLinkage_center)
     ellipse(this.d2_x,this.d2_y,8,8)
  }

  this.compBird = function(startingX,startingY,gear_setting,gearSize_wing,motorType,render_wing){
    //this.noDraw = x
    if (gear_setting == 1){
      this.motorA = this.driverM
      this.motorB = this.drivenM
    } else if (gear_setting == 0){
      this.motorB = this.driverM
      this.motorA = this.drivenM
    }

    if(gearSize_wing ==1){
      this.radius= 48
      this.in_gear = this.radius-22
    }else if(gearSize_wing ==2){
      this.radius= 56
      this.in_gear = this.radius-25
    }else if(gearSize_wing ==3){
      this.radius= 64
      this.in_gear = this.radius-27
    }else if(gearSize_wing ==4){
      this.radius= 72
      this.in_gear = this.radius-32
    }

    if(render_wing == 0){ // Gears & Linkages
      tempGear = grey
      tempGear_center = black
      tempLinkage = blue2
      tempLinkage_center = black
    }else if(render_wing == 1){ // only Gears
      tempGear = grey
      tempGear_center = black
      tempLinkage = remove
      tempLinkage_center = remove
    }else if(render_wing == 2){ // only Linkages
      tempGear = remove
      tempGear_center = remove
      tempLinkage = blue2
      tempLinkage_center = black
    }

    this.motor_status = motorType

    /* TO DRAW LEFT GEAR */
    this.centerPositionX=this.centergearX + startingX
    this.centerPositionY=this.centergearY + startingY
    this.rotationDirection = 1
    this.gear_status = this.motorA
    this.drawGear(this.radius, startingX,startingY, this.centerPositionX, this.centerPositionY, this.rotationDirection,this.gear_status,this.motor_status)

    /* TO DRAW RIGHT GEAR*/
    this.centerPositionX=this.centergearX+(this.radius*2+this.teethHeight) + startingX
    this.rotationDirection = -1
    this.gear_status = this.motorB
    this.drawGear(this.radius, startingX,startingY, this.centerPositionX, this.centerPositionY, this.rotationDirection,this.gear_status,this.motor_status)

 }

  this.drawGear = function(radius, startingX,startingY,centerPositionX, centerPositionY,rotationDirection,gear_status,motor_status){

    this.teethHeight=0.25*this.radius
    this.numberOfTeeth=radius/4
    this.numberOfTeeth=constrain(this.numberOfTeeth, this.minNumberOfTeeth, this.maxNumberOfTeeth)
    this.teethAngle=TWO_PI/this.numberOfTeeth
    this.teethWidth=sin(this.teethAngle/2)*radius
    this.lineY=cos(this.teethAngle/2)*radius+this.teethHeight

    if(this.rotationDirection ==1){       // left gear
      this.rotation_interlock = 0
    }else if(this.rotationDirection == -1){   //right gear

      if(this.radius == 48){    //  gear size 1
        this.rotation_interlock = (this.radius*2/5)-3.22
      }else if(this.radius ==56){   //  gear size 2
        this.rotation_interlock = (this.radius*2/5)-.17
      }else if(this.radius ==64){   //  gear size 3
        this.rotation_interlock = PI+.21
      }else if(this.radius ==72){   //  gear size 4
        this.rotation_interlock = PI+.18
      }
   }

    push()
    translate(centerPositionX, centerPositionY)
    rotate(this.rotationAngle*rotationDirection+this.rotation_interlock)
    this.rotationAngle = this.rotationAngle + this.angle_increase

    if(motor_status == 180){
      if (this.rotationAngle >PI){ this.rotationAngle = PI }
      else if (this.rotationAngle <0){ this.rotationAngle = 0 }

      if (this.rotationAngle == PI || this.rotationAngle == 0){
        this.angle_increase = this.angle_increase * -1
      }
    }else if (motor_status == 360){
      if (this.rotationAngle >= 2*PI){
          this.rotationAngle = 0
      }
    }

     fill(tempGear)
     stroke(tempGear)

    for (var i=0; i<this.numberOfTeeth; i++)
    {
      rotate(this.teethAngle)
      triangle((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight, this.teethWidth/2, -this.lineY+this.teethHeight, -this.teethWidth/2, -this.lineY)
      triangle((this.teethWidth/4)+2, -this.lineY, -this.teethWidth/2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
      line(-this.teethWidth/2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
    }
    ellipse(0, 0, 2*(-this.lineY+this.teethHeight), 2*(-this.lineY+this.teethHeight)) //gear flesh
    fill(tempGear_center)//center
    ellipse(0,0,20,20)

    pop()

    this.drawWing(startingX, startingY, centerPositionX,centerPositionY,rotationDirection)
  }

  this.drawGear2 = function(radius, centerPositionX, centerPositionY){

    this.teethHeight=0.35*radius
    this.numberOfTeeth=radius/2
    this.teethAngle=TWO_PI/this.numberOfTeeth
    this.teethWidth=sin(this.teethAngle/2)*radius
    this.lineY=cos(this.teethAngle/2)*radius+this.teethHeight

     translate(centerPositionX, centerPositionY-10)
     fill(200)
    for (var i=0; i<this.numberOfTeeth; i++)
    {
      rotate(this.teethAngle)
      stroke(200)
      strokeWeight(1)
      triangle((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight, this.teethWidth/2, -this.lineY+this.teethHeight, -this.teethWidth/2, -this.lineY)
      triangle((this.teethWidth/4)+2, -this.lineY, -this.teethWidth/2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
      stroke(200)
      line(-this.teethWidth/2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
    }
    ellipse(0, 0, 2*(-this.lineY+this.teethHeight), 2*(-this.lineY+this.teethHeight)) //gear flesh

  }

  this.flappingUI = function(UI_mode){
    if (UI_mode == 1){

      translate(20,40)

      fill(150)
      triangle(20,70,110,10,165,35)
      stroke(150)
      line(165,35,205,70) // side D:
      line(20,70,180,130) // side F:

      for(var i=20; i<200;i=i+8){
        line(i,70,i+4,70) // dotted line
      }

      noStroke()
      fill(0)
      ellipse(205,70,6,6)
      ellipse(180,130,6,6)

      text("A", 60,35)
      text("B", 140,20)
      text("D", 110,62)
      text("C", 188, 50)
      text("E", 140, 87)
      text("F", 100, 120)

      rect(190,120,15,20)
      fill(255)
      text("1", 193, 135)

      noFill()
      stroke(0)
      rect(210,120,15,20)
      fill(0)
      text("2", 213, 135)

    }else if (UI_mode == 2){

      this.drawGear2(28, 120,142)

      stroke(150)
      line(37,-70,80,-70)   // side X
      line(37,-40,37,-70)
      line(80,-65,80,-75)

      for(var i=-30; i<50; i=i+8){
        line(i,-38,i+4,-38)
      }
      for(var i=-40; i<38; i=i+8){
        line(37,i,37,i+4)
      }

      fill(0)
      noStroke()
      ellipse(0,0,6,6)
      ellipse(37,-38,6,6)
      ellipse(37,-70,6,6)

      text("G", 50, -77) // previous X
      text("H", 20, -50) // previous Y

      noFill()
      stroke(0)
      rect(90,27,15,20)
      fill(0)
      text("1", 93, 42)

      fill(0)
      rect(110,27,15,20)
      fill(255)
      text("2", 113, 42)

    }
  }

  this.drawNet = function(gearSize_wing,Flapping_map_page,thick_wing,driver,motor_embed){
    this.b = gearSize_wing

    var radiusN = 8*(5+gearSize_wing)

    this.teethHeight=0.25*radiusN
    this.numberOfTeeth=radiusN/4
    this.teethAngle=TWO_PI/this.numberOfTeeth
    this.teethWidth=sin(this.teethAngle/2)*radiusN
    this.lineY=cos(this.teethAngle/2)*radiusN+this.teethHeight

    if(Flapping_map_page == 1){
      var gear_x0 = (-3*this.teethWidth/4)-2.5  // extend
      var gear_y0 = -this.lineY+this.teethHeight+1  // extend
      var gear_x1 = (-3*this.teethWidth/4)+2 // drawing teeth
      var gear_y1 = -this.lineY+this.teethHeight // drawing teeth
      var gear_x2 = -this.teethWidth/2 // drawing teeth
      var gear_y2 = -this.lineY // drawing teeth
      var gear_x3 = (this.teethWidth/4)+2 // drawing teeth
      var gear_y3 = -this.lineY // drawing teeth
      var gear_x4 = this.teethWidth/2 // drawing teeth
      var gear_y4 = -this.lineY+this.teethHeight // drawing teeth
      var gear_x5 = (3*this.teethWidth/4)+2.5  // extend
      var gear_y5 = -this.lineY+this.teethHeight+1  // extend

      stroke(0)
      fill(255)

  // LEFT TOP
        translate(100, 100)
        for (var i=0; i<this.numberOfTeeth; i++)
        {
          rotate(this.teethAngle)
          line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
          line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
          line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
          line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
          line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
        }
        ellipse(0, 0, 14, 14) // Left gear center

  // RIGHT UP
        translate(radiusN*3, 0)
        for (var i=0; i<this.numberOfTeeth; i++){
          rotate(this.teethAngle)
          line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
          line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
          line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
          line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
          line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
        }
        ellipse(0, 0, 14, 14) //Left Bottom gear center
        ellipse(0, radiusN-16,11,11)

  // RIGHT BOTTOM
        translate(0, radiusN*5/2)
        for (var i=0; i<this.numberOfTeeth; i++){
          rotate(this.teethAngle)
          line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
          line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
          line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
          line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
          line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
      }
        ellipse(0, 0, 14, 14) //Right gear center
        ellipse(0, radiusN-16,11,11)
  // LEFT BOTTOM
        translate(-radiusN*3, 0)
        for (var i=0; i<this.numberOfTeeth; i++){
          rotate(this.teethAngle)
          line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
          line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
          line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
          line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
          line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
        }
        noFill()
        ellipse(0, 0, 14, 14) //Right gear center

    }else if(Flapping_map_page == 2){

        var case_pos_X = 10
        var case_width = radiusN*4+radiusN*3+this.teethHeight*3
        var case_centerX = case_pos_X+(1/2*case_width)
        var case_pos_Y = 20
        var locationY = 50
        var dis_Y_gear = radiusN+this.teethHeight+this.yy
        var case_height = locationY+dis_Y_gear+radiusN*2

        noFill()
        stroke(0)
        rect(case_pos_X,case_pos_Y,case_width,case_height)
        ellipse(case_centerX+this.xx,case_pos_Y+locationY,10,10) // top RIGHT
        ellipse(case_centerX-this.xx,case_pos_Y+locationY,10,10) // top LEFT

        if(motor_embed == 1){
          if(driver == 1){ // EMBED MOTOR ON LEFT
            rect(case_centerX-(radiusN+this.teethHeight)-(2/3*115-3),case_pos_Y+locationY+dis_Y_gear-(1/2*55),115,55)
            ellipse(case_centerX+(radiusN+this.teethHeight),case_pos_Y+locationY+dis_Y_gear,12,10) // CENTER for Gear R
            fill(150)
            ellipse(case_centerX-(radiusN+this.teethHeight),case_pos_Y+locationY+dis_Y_gear,10,10) // CENTER for Gear L*/
          }else if(driver == 0){ // EMBED MOTOR ON RIGHT
            noFill()
            rect(case_centerX+(radiusN+this.teethHeight)-(2/3*115-3),case_pos_Y+locationY+dis_Y_gear-(1/2*55),115,55)
            ellipse(case_centerX-(radiusN+this.teethHeight),case_pos_Y+locationY+dis_Y_gear,10,10) // CENTER for Gear L*/
            fill(150)
            ellipse(case_centerX+(radiusN+this.teethHeight),case_pos_Y+locationY+dis_Y_gear,10,10) // CENTER for Gear R
          }
        }

         translate(case_pos_X+case_width+100, case_pos_Y+30)
         noFill()
      //        translate(0, -radiusN*5/2+320)
         for(var i=-1; i<7; i++){
           ellipse(60*i,0,43,43) // first line
           ellipse(60*i,0,11,11)
           ellipse(60*i,60,43,43) // second line
           ellipse(60*i,60,11,11)
        }
        ellipse(60*7-5,0,30,30) // smaller - first line
        ellipse(60*7-5,0,11,11)
        ellipse(60*7-5,60,30,30) // smaller - second line
        ellipse(60*7-5,60,11,11)

// for floor adjustment of driven gear
        ellipse(60*-1+this.radius/2,60+this.radius*3/2,this.radius*2-10, this.radius*2-10)
        ellipse(60*-1+this.radius/2,60+this.radius*3/2,11,11)
        ellipse(60*-1+this.radius*5/2,60+this.radius*3/2,this.radius*2-10, this.radius*2-10)
        ellipse(60*-1+this.radius*5/2,60+this.radius*3/2,11,11)
        ellipse(60*-1+this.radius*9/2,60+this.radius*3/2,this.radius*2-10, this.radius*2-10)
        ellipse(60*-1+this.radius*9/2,60+this.radius*3/2,11,11)

//stick from here
        // var stick_pos_Y = case_pos_Y+case_height+40
        var stick_pos_Y = 60+this.radius*3
        var stick_thick = 50
        case_pos_X = -95
        ellipse(case_pos_X+stick_thick/2,stick_pos_Y,stick_thick,stick_thick)
        ellipse(case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y,stick_thick,stick_thick)
        ellipse(case_pos_X+stick_thick/2,stick_pos_Y+60,stick_thick,stick_thick)
        ellipse(case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y+60,stick_thick,stick_thick)
        stroke(255)
        fill(255)
        rect(case_pos_X+stick_thick/2,stick_pos_Y-stick_thick/2,this.dist_f+50,50)// 300 should be changed to dist_F
        rect(case_pos_X+stick_thick/2,stick_pos_Y-stick_thick/2+60,this.dist_f+50,50)// 300 should be changed to dist_F
        stroke(0)
        noFill()
        line(case_pos_X+stick_thick/2,stick_pos_Y-stick_thick/2,case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y-stick_thick/2)
        line(case_pos_X+stick_thick/2,stick_pos_Y+stick_thick/2,case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y+stick_thick/2)
        line(case_pos_X+stick_thick/2,stick_pos_Y+60-stick_thick/2,case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y+60-stick_thick/2)
        line(case_pos_X+stick_thick/2,stick_pos_Y+60+stick_thick/2,case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y+60+stick_thick/2)
        ellipse(case_pos_X+stick_thick/2,stick_pos_Y,20,20)
        ellipse(case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y,20,20)
        ellipse(case_pos_X+stick_thick/2,stick_pos_Y+60,20,20)
        ellipse(case_pos_X+stick_thick/2+this.dist_f+50,stick_pos_Y+60,20,20)


    }else if (Flapping_map_page == 3){
  //    thickness = 70 // 50,70,90,110

     if(thick_wing == 1){
      thickness = 44
     }else if(thick_wing == 2){
      thickness = 60
     }else if(thick_wing == 3){
      thickness = 75
     }

     var stick_pos_Y = 35//20
     var stick_Y_gap = 18//20
     var stick_pos_X = 30//50
     var extra = 300
      noFill()
      stroke(0)
//stick 1
      rect(stick_pos_X,stick_pos_Y,this.xx*2+this.dist_c+this.dist_b+this.dist_a+30+30,thickness)
//stick 2
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap+thickness,30+30+this.dist_d+this.dist_c+this.xx*2,thickness)    // extra part to fold

      for(var i=stick_pos_Y; i<stick_pos_Y+thickness; i = i+5){
        line(stick_pos_X+this.xx*2,i,stick_pos_X+this.xx*2,i+2) // #1. this.xx
        line(stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a,i,stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a,i+2) // #4, dist_a
      }// stick 1
      for(var i=stick_pos_Y; i<stick_pos_Y+thickness; i = i+11){
        line(stick_pos_X+this.xx*2+this.dist_c,i,stick_pos_X+this.xx*2+this.dist_c,i+5) //  #2, dist_d
        line(stick_pos_X+this.xx*2+this.dist_c+this.dist_b,i,stick_pos_X+this.xx*2+this.dist_c+this.dist_b,i+5)  // #3, dist_b
        line(stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a+30,i,stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a+30,i+5) // #5, extra
      }// stick 1
      for(var i=stick_pos_Y+stick_Y_gap+thickness; i<stick_pos_Y+stick_Y_gap+thickness*2; i = i+5){
        line(stick_pos_X+30,i,stick_pos_X+30,i+2) // #1. this.xx
        line(stick_pos_X+30+30+this.dist_d+this.dist_c,i,stick_pos_X+30+30+this.dist_d+this.dist_c,i+2) // #4, dist_a
      }// stick 2
      for(var i=stick_pos_Y+stick_Y_gap+thickness; i<stick_pos_Y+stick_Y_gap+thickness*2; i = i+11){
        line(stick_pos_X+30+30,i,stick_pos_X+30+30,i+5) //  #2, dist_d
        line(stick_pos_X+30+30+this.dist_d,i,stick_pos_X+30+30+this.dist_d,i+5)  // #3, dist_b
      }// stick 2

//stick 3
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap*2+thickness*2,this.xx*2+this.dist_c+this.dist_b+this.dist_a+30+30,thickness)
//stick 4
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap*3+thickness*3,30+30+this.dist_d+this.dist_c+this.xx*2,thickness)    // extra part to fold
      for(var i=stick_pos_Y+stick_Y_gap*2+thickness*2; i<stick_pos_Y+stick_Y_gap*2+thickness*3; i = i+5){
        line(stick_pos_X+30+30,i,stick_pos_X+30+30,i+2) //  #2, dist_d
        line(stick_pos_X+30+30+this.dist_a+this.dist_b+this.dist_c,i,stick_pos_X+30+30+this.dist_a+this.dist_b+this.dist_c,i+2) // #5, extra
      }// stick 3
      for(var i=stick_pos_Y+stick_Y_gap*2+thickness*2; i<stick_pos_Y+stick_Y_gap*2+thickness*3; i = i+11){
        line(stick_pos_X+30,i,stick_pos_X+30,i+5) // #1. this.xx
        line(stick_pos_X+30+30+this.dist_a,i,stick_pos_X+30+30+this.dist_a,i+5)  // #3, dist_b
        line(stick_pos_X+30+30+this.dist_a+this.dist_b,i,stick_pos_X+30+30+this.dist_a+this.dist_b,i+5) // #4, dist_a
      }// stick 3
      for(var i=stick_pos_Y+stick_Y_gap*3+thickness*3; i<stick_pos_Y+stick_Y_gap*3+thickness*4; i = i+11){
         line(stick_pos_X+this.xx*2+this.dist_c,i,stick_pos_X+this.xx*2+this.dist_c,i+5) // #1. this.xx
         line(stick_pos_X+this.xx*2+this.dist_d+this.dist_c,i,stick_pos_X+this.xx*2+this.dist_d+this.dist_c,i+5) //  #2, dist_d
      }// stick 4
      for(var i=stick_pos_Y+stick_Y_gap*3+thickness*3; i<stick_pos_Y+stick_Y_gap*3+thickness*4; i = i+5){
         line(stick_pos_X+this.xx*2,i,stick_pos_X+this.xx*2,i+2) // #1. this.xx
         line(stick_pos_X+this.xx*2+this.dist_d+this.dist_c+30,i,stick_pos_X+this.xx*2+this.dist_d+this.dist_c+30,i+2)  // #3, dist_b
      }// stick 4

      textSize(11)
      fill(100)
      noStroke()
      var textY = -5  // where to write #1 ~7 for foldig nets
      text("1", stick_pos_X+(1/2*this.xx*2), stick_pos_Y+thickness+textY)
      text("2", stick_pos_X+this.xx*2+(1/2*this.dist_c), stick_pos_Y+thickness+textY)
      text("3", stick_pos_X+this.xx*2+this.dist_c+(1/2*this.dist_b), stick_pos_Y+thickness+textY)
      text("4", stick_pos_X+this.xx*2+this.dist_c+this.dist_b+(1/2*this.dist_a), stick_pos_Y+thickness+textY)
      text("A", stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a+10, stick_pos_Y+thickness+textY)
      text("B", stick_pos_X+this.xx*2+this.dist_c+this.dist_b+this.dist_a+40, stick_pos_Y+thickness+textY)

      text("C", stick_pos_X+10, stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("D", stick_pos_X+40, stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("5", stick_pos_X+30*2+(1/2*this.dist_d), stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("6", stick_pos_X+30*2+this.dist_d+(1/2*this.dist_c), stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("7", stick_pos_X+30*2+this.dist_d+this.dist_c+(1/2*this.xx*2), stick_pos_Y+stick_Y_gap+thickness*2+textY)

      text("B", stick_pos_X+10, stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("A", stick_pos_X+40, stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("4", stick_pos_X+30+30+(1/2*this.dist_a), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("3", stick_pos_X+30+30+this.dist_a+(1/2*this.dist_b), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("2", stick_pos_X+30+30+this.dist_a+this.dist_b+(1/2*this.dist_c), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("1", stick_pos_X+30+30+this.dist_a+this.dist_b+this.dist_c+(1/2*this.xx*2), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("D", stick_pos_X+this.xx*2+this.dist_c+this.dist_d+10, stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("C", stick_pos_X+this.xx*2+this.dist_c+this.dist_d+40, stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("5", stick_pos_X+this.xx*2+this.dist_c+(1/2*this.dist_d), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("6", stick_pos_X+this.xx*2+(1/2*this.dist_c), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("7", stick_pos_X+(1/2*this.xx*2), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)

    }
}

this.drawPNG = function(){
  noStroke()
  fill(255)
  rect(0,510,1200,150)
  saveCanvas('parts_flapping','png')
}
// get functions
  this.getA = function(){return this.dist_a;}
  this.getB = function(){return this.dist_b;}
  this.getD = function(){return this.dist_d;}
  this.getC = function(){return this.dist_c;}
  this.getE = function(){return this.dist_e;}
  this.getF = function(){return this.dist_f;}
  this.getX = function(){return this.x;}
  this.getY = function(){return this.y;}

  this.setA = function(newA){
    if (newA > this.dist_aMin && newA < this.dist_aMax){
      this.dist_a = newA
      this.updateSim()
      return true
    }
    return false
  }
  this.setB = function(newB){
    if (newB>this.dist_bMin && newB<this.dist_bMax){
      this.dist_b = newB
      this.updateSim()
      return true
    }
      return false
  }
  this.setD = function(newD){
    if (newD>this.dist_dMin && newD<this.dist_dMax){
      this.dist_d = newD
      this.updateSim()
      return true
    }
      return false
  }
  this.setC = function(newC){

    if (newC > this.dist_cMin && newC < this.dist_cMax){
      this.dist_c = newC
      this.updateSim()
      return true
    } //need else anyway - if min and max was well defined, this should not happen
    return false
  }
  this.setE = function(newE){
    if (newE>this.dist_eMin && newE<this.dist_eMax){
      this.dist_e = newE
      this.updateSim()
      return true
    }
      return false
  }
  this.setF = function(newF){
    if (newF>this.dist_fMin && newF<this.dist_fMax){
      this.dist_f = newF
      this.updateSim()
      return true
    }
      return false
  }

  this.setX = function(newX){
    if (newX>this.xMin && newX<this.xMax){
      this.xx = newX
      return true
    }
      return false
  }
  this.setY = function(newY){
    if (newY>this.yMin && newY<this.yMax){
      this.yy = newY
      return true
    }
      return false
  }
  this.updateSim = function(){
    this.dist_aMin = abs(this.dist_d-this.dist_b)+this.lengthGap
    this.dist_aMax = this.dist_b+this.dist_d

    this.dist_bMin = abs(this.dist_a-this.dist_d)+this.lengthGap
    this.dist_bMax = this.dist_a+this.dist_d

    this.dist_dMin = abs(this.dist_a-this.dist_b)+this.lengthGap
    this.dist_dMax = this.dist_a+this.dist_b

    this.dist_cMin = 0
    this.dist_cMax = 400

    this.dist_eMin = abs(this.dist_d-this.dist_c)+this.lengthGap
    this.dist_eMax = this.dist_d+this.dist_c

    this.dist_fMin = abs(this.dist_e-this.dist_g)+this.lengthGap
    this.dist_fMax = this.dist_e+this.dist_g

    return true
  }

}
