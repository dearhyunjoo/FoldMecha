// var PDFDocument = require('pdfkit')
// var doc = new PDFDocument()

function OpenClose(){

  // var pdf
  var _this = this
  this.lengthGap = 5

  this.savePart = false
  this.saveCase = false
  this.saveLink = false
  var fileName = "untitle"

  this.gearSize = 2
  this.motor_status = 180
  this.OPthick = 2
  this.motor_embed = 1


  // 1~4 : gear size 1~4 with 180 servo, 5~8 with 360 servo, 9~12 paired
  this.rack_Y_reset1 = false
  this.rack_Y_reset2 = false
  this.rack_Y_reset3 = false
  this.rack_Y_reset4 = false
  this.rack_Y_reset5 = false
  this.rack_Y_reset6 = false
  this.rack_Y_reset7 = false
  this.rack_Y_reset8 = false
  this.rack_Y_reset9 = false
  this.rack_Y_reset10 = false
  this.rack_Y_reset11 = false
  this.rack_Y_reset12 = false

  this.noDraw = false

  var fixed_up_Y = 100  // start with gear size 2
  var fixed_up_x_adjust = this.radius- this.teethHeight
  var lower_Y = 0
  var tempGear = grey
  var tempLinkage = blue2
  var tempLinkage_center = black
//  var gearC_petal = color(grey)

  function resetRack(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12){
   console.log("reset Rack: ", this)
    _this.rack_Y_reset1 = r1
    _this.rack_Y_reset2 = r2
    _this.rack_Y_reset3 = r3
    _this.rack_Y_reset4 = r4
    _this.rack_Y_reset5 = r5
    _this.rack_Y_reset6 = r6
    _this.rack_Y_reset7 = r7
    _this.rack_Y_reset8 = r8
    _this.rack_Y_reset9 = r9
    _this.rack_Y_reset10 = r10
    _this.rack_Y_reset11 = r11
    _this.rack_Y_reset12 = r12
  }

  this.compGear = function(startingX,startingY,pair_petal,gearSize_petal,motorType,render_petal){
    //pinion gear is circular & rack gear is linear gear

    this.render_petal = render_petal

    this.pair_petal = pair_petal

    if (this.pair_petal == 0){
      this.centerX = 0
    }else if (this.pair_petal == 1){
// when another rack is added, move the pinion center to the left
      this.centerX = -1/2*(this.rack_X_size+this.teethHeight+this.pinion_diameter/-2)
    }
    this.motorType = motorType
    lower_Y = startingY
    lower_Y2 = startingY

    if(gearSize_petal==1){this.radius = 48}
    else if(gearSize_petal==2){this.radius = 56}
    else if(gearSize_petal==3){this.radius = 64}
    else if(gearSize_petal==4){this.radius = 72}

    this.rack_increase_change = this.radius*1/100

    if(this.motorType ==180){
      if(gearSize_petal ==1){

        if(pair_petal == 0 && this.rack_Y_reset1 == false){
            this.rack_Y = height/2-3+lower_Y
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(true, false, false, false, false, false, false, false, false, false, false, false)

        }else if(pair_petal == 1 && this.rack_Y_reset9 == false){
            this.rack_Y = height/2-3+lower_Y
            this.rack_Y2 = height/2+278
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, false, false, false, false, false, false, true, false, false, false)

        }
      }else if(gearSize_petal ==2){

        if(pair_petal == 0 && this.rack_Y_reset2 == false){
            this.rack_Y = height/2-16+lower_Y
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, true, false, false, false, false, false, false, false, false, false, false)

        }else if(pair_petal == 1 && this.rack_Y_reset10 == false){
            this.rack_Y = height/2-16+lower_Y
            this.rack_Y2 = height/2+290
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, false, false, false, false, false, false, false, true, false, false)

        }

      }else if(gearSize_petal ==3){

        if(pair_petal == 0 && this.rack_Y_reset3 == false){
            this.rack_Y = height/2-50+lower_Y
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, true,false, false, false, false, false, false, false, false, false)

        }else if(pair_petal == 1 && this.rack_Y_reset11 == false){
            this.rack_Y = height/2-50+lower_Y
            this.rack_Y2 = height/2+323
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, false, false, false, false, false, false, false, false, true,false)

        }
      }else if(gearSize_petal ==4){

        if(pair_petal == 0 && this.rack_Y_reset4 == false){
            this.rack_Y = height/2-88+lower_Y
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, false, true, false, false, false, false, false, false, false, false)

        }else if(pair_petal == 1 && this.rack_Y_reset12 == false){
            this.rack_Y = height/2-88+lower_Y
            this.rack_Y2 = height/2+362
            this.rotationAngle = 3; this.angle_increase = 0.01; this.change_direction = -1
            resetRack(false, false, false, false, false, false, false, false, false, false, false, true)

        }
      }
    }else if(this.motorType ==360){
      if(gearSize_petal ==1){

      if (this.rack_Y_reset5 == false){
          this.rotationAngle = PI+PI/2-.18
          this.rack_Y = height/2-3+lower_Y

          resetRack(false, false, false, false, true, false, false, false, false, false, false, false)
        }
      }else if(gearSize_petal ==2){

        if (this.rack_Y_reset6 == false){
          this.rotationAngle = PI+PI/4
          this.rack_Y = height/2-16+lower_Y

          resetRack(false, false, false, false, false, true, false, false, false, false, false, false)
        }
      }else if(gearSize_petal ==3){

      if (this.rack_Y_reset7 == false){
          this.rotationAngle = PI+PI/4+.2
          this.rack_Y = height/2-50+lower_Y

          resetRack(false, false, false, false, false, false, true, false, false, false, false, false)
        }
      }
      if(gearSize_petal ==4){
      if (this.rack_Y_reset8 == false){
          this.rotationAngle = PI+PI/4+.43
          this.rack_Y = height/2-88+lower_Y

          resetRack(false, false, false, false, false, false, false, true, false, false, false, false)
        }
      }

      if(this.render_petal == 0 || this.render_petal == 2){
        gearC_petal = color(grey)
        console.log("GREY COLOR")
      }else if (this.render_petal == 1){
        gearC_petal = color(white)
        console.log("WHITE ENTERED")
      }


  }
// settting where to draw gears
    this.centerPositionY_rack = height/2+200+lower_Y2
    this.centerPositionX_pinion = temp_windowWidth/2+200+startingX
    this.drawPinionGear(pair_petal,this.radius, this.centerPositionX_pinion+this.centerX, this.centerPositionY_rack,motorType,render_petal)
}

  this.drawRackGear = function(pair_petal,radius,centerPositionX_rack,centerPositionY_rack,motorType){

    this.RlineY=cos(this.teethAngle/2)*radius+this.teethHeight
    this.bottom_w = 25

    push()
    translate(centerPositionX_rack,this.rack_Y+this.teethWidth+lower_Y2)
    rotate(PI/2)

    fill(tempGear)
    stroke(tempGear)

    for (var i=0; i<this.numberOfTeeth; i++){
       this.gear_Rx0 =this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
       this.gear_Ry0 =-this.RlineY+this.teethHeight
       this.gear_Rx1 =(-3*this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth
       this.gear_Ry1 =-this.RlineY+this.teethHeight
       this.gear_Rx2 =-this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
       this.gear_Ry2 =-this.RlineY
       this.gear_Rx3 =(this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth
       this.gear_Ry3 =-this.RlineY

      quad(this.gear_Rx0,this.gear_Ry0,this.gear_Rx1,this.gear_Ry1,this.gear_Rx2,this.gear_Ry2,this.gear_Rx3,this.gear_Ry3)
    }

    this.rack_Y_size = this.numberOfTeeth*this.teethWidth*2
    this.rack_X_size = 70
    this.rack_Xpos = (-3*this.teethWidth/4)-this.teethWidth
    this.rack_Ypos = -this.RlineY+this.teethHeight

    rect(this.rack_Xpos,this.rack_Ypos,this.rack_Y_size, this.rack_X_size)

    this.fx = (-3*this.teethWidth/4)-this.teethWidth
    this.fy = -this.RlineY+this.teethHeight+this.rack_X_size/2
    pop()

  if(pair_petal == 1){
    push()
    translate(centerPositionX_rack+(-1*9/2*(-this.lineY+this.teethHeight))+5,this.rack_Y2+this.teethWidth+100+lower_Y2)

    rotate(-PI/2)
    fill(tempGear)
    stroke(tempGear)
    this.numberOfTeeth = 15

    for (var i=0; i<this.numberOfTeeth; i++){
      this.gear_Rx0 =this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
      this.gear_Ry0 =-this.RlineY+this.teethHeight
      this.gear_Rx1 =(-3*this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth
      this.gear_Ry1 =-this.RlineY+this.teethHeight
      this.gear_Rx2 =-this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
      this.gear_Ry2 =-this.RlineY
      this.gear_Rx3 =(this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth
      this.gear_Ry3 =-this.RlineY

      quad(this.gear_Rx0,this.gear_Ry0,this.gear_Rx1,this.gear_Ry1,this.gear_Rx2,this.gear_Ry2,this.gear_Rx3,this.gear_Ry3)
    }
    this.rack_Y_size = this.numberOfTeeth*this.teethWidth*2
    this.rack_X_size = 70
    this.rack_Xpos = (-3*this.teethWidth/4)-this.teethWidth
    this.rack_Ypos = -this.RlineY+this.teethHeight

    rect(this.rack_Xpos,this.rack_Ypos,this.rack_Y_size, this.rack_X_size)

    pop()
  }else{

  }
    if (motorType == 180){
      if(this.change_direction == 1){
        this.rack_change_apply = abs(this.rack_increase_change)*-1
      }else{
        this.rack_change_apply = abs(this.rack_increase_change)
      }

    }else if (motorType == 360){
      if (radius == 48){
        if(this.change_direction == 1){
          this.rack_change_apply = abs(this.rack_increase_change)*-3
        }else{
          this.rack_change_apply = abs(this.rack_increase_change)*.99
        }
      }else if (radius == 56){
        if(this.change_direction == 1){
          this.rack_change_apply = abs(this.rack_increase_change)*-3
        }else{
          this.rack_change_apply = abs(this.rack_increase_change)*.9999
        }
      }else if (radius == 64){
        if(this.change_direction == 1){
          this.rack_change_apply = abs(this.rack_increase_change)*-4.12
        }else{
          this.rack_change_apply = abs(this.rack_increase_change)*1.025
        }
      }else if (radius == 72){
        if(this.change_direction == 1){
          this.rack_change_apply = abs(this.rack_increase_change)*-4.14
        }else{
          this.rack_change_apply = abs(this.rack_increase_change)*1.033
        }
      }
    }

    if (radius == 48){
      fixed_up_Y  = 140+lower_Y2
      fixed_up_x_adjust = this.radius - this.teethHeight*2
    }else if (radius == 56){
      fixed_up_Y  = 100+lower_Y2
      fixed_up_x_adjust = this.radius - this.teethHeight
    }else if (radius == 64){
      fixed_up_Y  = 80+lower_Y2
      fixed_up_x_adjust = this.radius - this.teethHeight/2
    }else if (radius == 72){
      fixed_up_Y  = 50+lower_Y2
      fixed_up_x_adjust = this.radius
    }

    //to set fixed pivot Y (up) - draw the point at the bottom of this function
    this.centerP_X = this.fy+centerPositionX_rack+fixed_up_x_adjust

    // Moving pivot Y
    this.movingP_Y = (this.fx-this.dist_f+(this.rack_Y+this.teethWidth))+lower_Y2
    fill(tempLinkage)
    noStroke()
    ellipse(this.centerP_X-this.bottom_w,this.movingP_Y,8,8) // LEFT
    ellipse(this.centerP_X+this.bottom_w,this.movingP_Y,8,8) // RIGHT
    stroke(tempLinkage)
    line(this.centerP_X-this.bottom_w,this.movingP_Y,this.centerP_X+this.bottom_w,this.movingP_Y)

    if(pair_petal == 0){ }
    else if (pair_petal == 1){
// where to draw for the others
    }
    // Moving pivot
    this.dist_g = abs((this.fx-this.dist_f+(this.rack_Y+this.teethWidth))-fixed_up_Y)

    // calcurate angles for triangle DEG
    this.step1_DG = sq(this.dist_d) + sq(this.dist_g) - sq(this.dist_e)
    this.step2_DG = 2*this.dist_d*this.dist_g
    this.angle_cosine_DG = this.step1_DG/this.step2_DG
    this.step3_DG = acos(this.angle_cosine_DG)
    this.angle_DG = degrees(this.step3_DG)

    this.step1_DE = sq(this.dist_d) + sq(this.dist_e) - sq(this.dist_g)
    this.step2_DE = 2*this.dist_d*this.dist_e
    this.angle_cosine_DE = this.step1_DE/this.step2_DE
    this.step3_DE = acos(this.angle_cosine_DE)
    this.angle_DE = degrees(this.step3_DE)

    this.step1_EG = sq(this.dist_e) + sq(this.dist_g) - sq(this.dist_d)
    this.step2_EG = 2*this.dist_e*this.dist_g
    this.angle_cosine_EG = this.step1_EG/this.step2_EG
    this.step3_EG = acos(this.angle_cosine_EG)
    this.angle_EG = degrees(this.step3_EG)

    // calcurate by walking for LEFT
    this.t3.penup()
    this.t3.right(90)
    this.t3.forward(this.centerP_X-width/2)
    this.t3.left(90)
    this.t3.forward(height/2-fixed_up_Y)
        this.fixed_X = this.t3.x
        this.fixed_Y = this.t3.y
    this.t3.left(180-this.angle_DG)
    this.t3.forward(this.dist_d)
        this.DE_X = this.t3.x
        this.DE_Y = this.t3.y
    this.t3.forward(this.dist_c)
        this.AC_X = this.t3.x
        this.AC_Y = this.t3.y
    this.t3.back(this.dist_d+this.dist_c)
    this.t3.right(180-this.angle_DG)  // back to fixed point
    this.t3.left(180-(this.angle_DG+this.angle_BD))
    this.t3.forward(this.dist_b)
        this.AB_X = this.t3.x
        this.AB_Y = this.t3.y
    this.t3.back(this.dist_b)
    this.t3.right(180-(this.angle_DG+this.angle_BD))
    this.t3.back(height/2-fixed_up_Y)
    this.t3.right(90)
    this.t3.back(this.centerP_X-width/2)
    this.t3.left(90)

    // calcurate by walking for RIGHT
    this.t4.penup()
    this.t4.right(90)
    this.t4.forward(this.centerP_X-width/2)
    this.t4.left(90)
    this.t4.forward(height/2-fixed_up_Y)
    this.t4.right(180-this.angle_DG)   // for right
    this.t4.forward(this.dist_d)
        this.DE_X2 = this.t4.x
    this.t4.forward(this.dist_c)
        this.AC_X2 = this.t4.x
    this.t4.back(this.dist_d+this.dist_c)
    this.t4.left(180-this.angle_DG)  // back to fixed point
    this.t4.right(180-(this.angle_DG+this.angle_BD))
    this.t4.forward(this.dist_b)
        this.AB_X2 = this.t4.x
    this.t4.back(this.dist_b)
    this.t4.left(180-(this.angle_DG+this.angle_BD))
    this.t4.back(height/2-fixed_up_Y)
    this.t4.right(90)
    this.t4.back(this.centerP_X-width/2)
    this.t4.left(90)

    // start draw opening and closing
    stroke(tempLinkage)
    line(this.DE_X,this.DE_Y,this.centerP_X-this.bottom_w,this.movingP_Y) // side E
    line(this.centerP_X,this.movingP_Y,this.centerP_X,this.movingP_Y+this.dist_f) // side F

    //draw petal for L
    fill(tempLinkage)
    triangle(this.fixed_X-this.bottom_w,this.fixed_Y,this.AB_X,this.AB_Y,this.AC_X,this.AC_Y)
    triangle(this.fixed_X+this.bottom_w,this.fixed_Y,this.AB_X2,this.AB_Y,this.AC_X2,this.AC_Y)
    line(this.centerP_X+this.bottom_w,this.movingP_Y,this.DE_X2,this.DE_Y) // side E for R

    noStroke()
    fill(tempLinkage_center)
    ellipse(this.centerP_X-this.bottom_w,fixed_up_Y,8,8)
    ellipse(this.centerP_X+this.bottom_w,fixed_up_Y,8,8)


    // here it makes all move
    this.rack_Y = this.rack_Y-this.rack_change_apply
    this.rack_Y2 = this.rack_Y2-this.rack_change_apply*-1

  }

  this.drawPinionGear = function(pair_petal,radius, centerPositionX, centerPositionY,motorType,render_petal){
    this.numberOfTeeth=radius/4
    this.teethHeight=0.25*radius
    this.teethAngle=TWO_PI/this.numberOfTeeth
    this.teethWidth=sin(this.teethAngle/2)*radius
    this.lineY=cos(this.teethAngle/2)*radius+this.teethHeight
    push()

    if(this.rotationDirection == -1) this.rotationAngle = 0

    translate(centerPositionX, centerPositionY)
    rotate(this.rotationAngle)

    if (motorType == 180){
      this.TN = 1
      if (this.rotationAngle >PI){ this.rotationAngle = PI }
      if (this.rotationAngle <0){ this.rotationAngle = 0 }

      if(this.rotationAngle==PI || this.rotationAngle==0){
         this.angle_increase = this.angle_increase*-1
         this.change_direction = this.change_direction*-1
      }

    } else if (motorType == 360){
      this.TN = 2/3; this.angle_increase = .0051

      this.rotationAngle = this.rotationAngle + this.angle_increase

      if(this.rotationAngle>=2*PI){
        this.rotationAngle = 0
      }
/////FIX IT : gear 2 0~PI*3/2
      if (radius == 48 || radius == 56){
        if(this.rotationAngle>=PI*3/2){ //270
          this.change_direction = 1
        }else{
          this.change_direction = -1
        }
      }else if(radius == 64 || radius == 72){
        if(this.rotationAngle>=PI*8/5){ //
          this.change_direction = 1
        }else{
          this.change_direction = -1
        }
      }
    }
    this.rotationAngle = this.rotationAngle + this.angle_increase

    if(this.render_petal == 0){ // Gears & Linkages
      tempGear = grey
      tempGear_center = black
      tempLinkage = blue2
      tempLinkage_center = black
    }else if (this.render_petal == 1){ // only Gears
      tempGear = grey
      tempGear_center = black
      tempLinkage = white
      tempLinkage_center = white
    }else if(this.render_petal == 2){ // only Linkages
      tempGear = white
      tempGear_center = white
      tempLinkage = blue2
      tempLinkage_center = black
    }

    fill(tempGear)

    for (var i=0; i<this.numberOfTeeth*this.TN; i++)
    {
      rotate(this.teethAngle)
      stroke(tempGear)
      strokeWeight(1)
      triangle((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight, this.teethWidth/2, -this.lineY+this.teethHeight, -this.teethWidth/2, -this.lineY)
      triangle((this.teethWidth/4)+2, -this.lineY, -this.teethWidth/2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
      strokeWeight(2)
      line(-this.teethWidth/2, -this.lineY,this.teethWidth/2,-this.lineY+this.teethHeight)
    }
    //gearbody
    this.pinion_diameter = 2*(-this.lineY+this.teethHeight)
    ellipse(0,0, this.pinion_diameter, this.pinion_diameter)
    fill(tempGear_center)
    ellipse(0,0,20,20)

    pop()

    this.centerPositionX_rack = centerPositionX - this.radius*2 - this.teethHeight
    this.drawRackGear(pair_petal,radius,this.centerPositionX_rack,centerPositionY-50, motorType)
  }

  this.init = function(){
  // init all the variables inside the class (instance vars) here.
    this.t3 = new Turtle() // LEFT
    this.t4 = new Turtle() // RIGHT
    this.dist_a = 100
    this.dist_b = 300
    this.dist_c = 100
    this.dist_d = 200
    this.dist_e = 250
    this.dist_f = 70

    lower_Y = 0
    if(this.dist_f >=100){
      lower_Y = abs(this.dist_f-100)
    }
    this.centerwidth = 15  // base length
    this.dist_aMin = 50
    this.dist_aMax = 400
    this.dist_bMin = 50
    this.dist_bMax = 400
    this.dist_cMin = 50
    this.dist_cMax = 400
    this.dist_dMin = 50
    this.dist_dMax = 400
    this.dist_eMin = 50
    this.dist_eMax = 400

    this.step1_BD = sq(this.dist_b) + sq(this.dist_c+this.dist_d) - sq(this.dist_a)
    this.step2_BD = 2*this.dist_b*(this.dist_c+this.dist_d)
    this.angle_cosine_BD = this.step1_BD/this.step2_BD
    this.step3_BD = acos(this.angle_cosine_BD)
    this.angle_BD = degrees(this.step3_BD)

    this.step1_AB = sq(this.dist_a) + sq(this.dist_b) - sq(this.dist_c+this.dist_d)
    this.step2_AB = 2*this.dist_a*this.dist_b
    this.angle_cosine_AB = this.step1_AB/this.step2_AB
    this.step3_AB = acos(this.angle_cosine_AB)
    this.angle_AB = degrees(this.step3_AB)

    this.step1_AC = sq(this.dist_a) + sq(this.dist_c+this.dist_d) - sq(this.dist_b)
    this.step2_AC = 2*this.dist_a*(this.dist_c+this.dist_d)
    this.angle_cosine_AC = this.step1_AC/this.step2_AC
    this.step3_AC = acos(this.angle_cosine_AC)
    this.angle_AC = degrees(this.step3_AC)
  }

  this.opencloseUI = function(){

    fill(150)
    triangle(210,85,60,45,75,85)
    stroke(150)
    line(110,80,210,140) // side E
    line(210,140,210,175) // side F
    line(205,175,215,175)
    noStroke()
    fill(0)
    ellipse(210,85,6,6)
    ellipse(210,140,6,6)
    text("A", 50,70)
    text("B", 135,60)
    text("C", 95,100)
    text("D", 165,100)
    text("E", 150,130)
    text("F", 190,160)
  }

  this.drawNet = function(gearSize,motor_status,OP_map_page,OPthick,motor_embed){
    _this.gearSize = gearSize
    _this.motor_status = motor_status
    _this.OPthick = OPthick
    _this.motor_embed = motor_embed

    var radiusN = 8*(5+gearSize)
    if (motor_status == 180){this.TN = 1}
    else if (motor_status == 360){this.TN = 2/3}

    if(OPthick == 1){thickness = 45}
    else if(OPthick == 2){thickness = 60}
    else if(OPthick == 3){thickness = 75}

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

    this.teethHeight=0.25*radiusN
    this.numberOfTeeth=radiusN/4
    this.teethAngle=TWO_PI/this.numberOfTeeth
    this.teethWidth=sin(this.teethAngle/2)*radiusN
    this.lineY=cos(this.teethAngle/2)*radiusN+this.teethHeight

   if(OP_map_page == 1){

     if(_this.savePart == true){
       var canvasP = createCanvas(1200, 500)
      //  pdf = createPDF()
      //  pdf.beginRecord()
       fill(0)
       text(fileName, 50,400)
   }

     if(this.TN == 1){   // 180 Motor

      stroke(0)
      fill(255)
      translate(radiusN*3/2, radiusN*3/2)
  // TOP PINION GEAR
      for (var i=0; i<this.numberOfTeeth; i++){
        rotate(this.teethAngle)
        line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
        line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
        line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
        line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
        line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
      }
      ellipse(0, 0, 11, 11) //gear center
      translate(0, radiusN*5/2)
// BOTTOM PINION GEAR
      for (var i=0; i<this.numberOfTeeth; i++){
        rotate(this.teethAngle)
        line (gear_x0, gear_y0, gear_x1, gear_y1) // extend
        line (gear_x1, gear_y1, gear_x2, gear_y2) // drawing teeth
        line (gear_x2, gear_y2, gear_x3, gear_y3) // drawing teeth
        line (gear_x3, gear_y3, gear_x4, gear_y4) // drawing teeth
        line (gear_x4, gear_y4, gear_x5, gear_y5) // extend
      }
      ellipse(0, 0, 11, 11) //gear center


    }else if(this.TN==2/3){ // 360 motor
      translate(radiusN*3/2, radiusN*3/2)
      push()
      noFill()
      stroke(0)
      ellipse(0,0, 2*(-this.lineY+this.teethHeight)-1.5, 2*(-this.lineY+this.teethHeight)-1.5)// gear body
      for (var i=0; i<this.numberOfTeeth*this.TN; i++){
        rotate(this.teethAngle)
        fill(255)
        noStroke()
        quad((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight,-this.teethWidth/2, -this.lineY,(this.teethWidth/4)+2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
        stroke(0)
        line((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight,-this.teethWidth/2, -this.lineY)
        line((this.teethWidth/4)+2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
        line(-this.teethWidth/2, -this.lineY,(this.teethWidth/4)+2, -this.lineY)
      }
      ellipse(0,0,11,11) // center

      pop()

      translate(0,radiusN*3)
      push()
      noFill()
      stroke(0)
      ellipse(0,0, 2*(-this.lineY+this.teethHeight)-1.5, 2*(-this.lineY+this.teethHeight)-1.5)// gear body
      for (var i=0; i<this.numberOfTeeth*this.TN; i++){
        rotate(this.teethAngle)
        fill(255)
        noStroke()
        quad((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight,-this.teethWidth/2, -this.lineY,(this.teethWidth/4)+2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
        stroke(0)
        line((-3*this.teethWidth/4)+2, -this.lineY+this.teethHeight,-this.teethWidth/2, -this.lineY)
        line((this.teethWidth/4)+2, -this.lineY, this.teethWidth/2, -this.lineY+this.teethHeight)
        line(-this.teethWidth/2, -this.lineY,(this.teethWidth/4)+2, -this.lineY)
      }
      ellipse(0,0,11,11) // center
      pop()

      }

      // TOP RACK GEAR
      translate(radiusN*2,-radiusN*5/2)
      this.numberOfTeethR = 15
      for (var i=0; i<this.numberOfTeethR; i=i+1.15){
          var gear_Rx0 = (-3*this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth  // extend
          var gear_Ry0 = -this.RlineY+this.teethHeight  // extend
          var gear_Rx1 = -this.teethWidth/2+this.teethWidth*2*i-this.teethWidth  // extend
          var gear_Ry1 = -this.RlineY  // extend
          var gear_Rx2 = (this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth // drawing teeth
          var gear_Ry2 = -this.RlineY // drawing teeth
          var gear_Rx3 = this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
          var gear_Ry3 = -this.RlineY+this.teethHeight
          var gear_Rx4 = (-3*this.teethWidth/4)+this.teethWidth*2*(i+1)-this.teethWidth+4
          line(gear_Rx0,gear_Ry0,gear_Rx1,gear_Ry1)
          line(gear_Rx1,gear_Ry1,gear_Rx2,gear_Ry2)
          line(gear_Rx2,gear_Ry2,gear_Rx3,gear_Ry3)
          line(gear_Rx3,gear_Ry3,gear_Rx4,gear_Ry3)
      }
      this.rack_X_size = 70
      var rack_body_Lx1 = (-3*this.teethWidth/4)-this.teethWidth*2 // left top point X
      var rack_body_Ly1 = -this.RlineY+this.teethHeight // left top point Y
      var rack_x_right = rack_body_Lx1+this.teethWidth*33+3 // right top point X
      line(rack_body_Lx1,rack_body_Ly1,rack_body_Lx1+this.teethWidth,rack_body_Ly1)
      line(rack_body_Lx1,rack_body_Ly1,rack_body_Lx1,rack_body_Ly1+this.rack_X_size)
      line(rack_x_right,rack_body_Ly1,rack_x_right,rack_body_Ly1+this.rack_X_size)
      line(rack_body_Lx1,rack_body_Ly1+this.rack_X_size,rack_x_right,rack_body_Ly1+this.rack_X_size)

        // BOTTOM RACK GEAR
      translate(0,radiusN*3)
      this.numberOfTeethR = 15
      for (var i=0; i<this.numberOfTeethR; i=i+1.15){
              var gear_Rx0 = (-3*this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth  // extend
              var gear_Ry0 = -this.RlineY+this.teethHeight  // extend
              var gear_Rx1 = -this.teethWidth/2+this.teethWidth*2*i-this.teethWidth  // extend
              var gear_Ry1 = -this.RlineY  // extend
              var gear_Rx2 = (this.teethWidth/4)+this.teethWidth*2*i-this.teethWidth // drawing teeth
              var gear_Ry2 = -this.RlineY // drawing teeth
              var gear_Rx3 = this.teethWidth/2+this.teethWidth*2*i-this.teethWidth
              var gear_Ry3 = -this.RlineY+this.teethHeight
              var gear_Rx4 = (-3*this.teethWidth/4)+this.teethWidth*2*(i+1)-this.teethWidth+4
              line(gear_Rx0,gear_Ry0,gear_Rx1,gear_Ry1)
              line(gear_Rx1,gear_Ry1,gear_Rx2,gear_Ry2)
              line(gear_Rx2,gear_Ry2,gear_Rx3,gear_Ry3)
              line(gear_Rx3,gear_Ry3,gear_Rx4,gear_Ry3)
      }
    line(rack_body_Lx1,rack_body_Ly1,rack_body_Lx1+this.teethWidth,rack_body_Ly1)
    line(rack_body_Lx1,rack_body_Ly1,rack_body_Lx1,rack_body_Ly1+this.rack_X_size)
    line(rack_x_right,rack_body_Ly1,rack_x_right,rack_body_Ly1+this.rack_X_size)
    line(rack_body_Lx1,rack_body_Ly1+this.rack_X_size,rack_x_right,rack_body_Ly1+this.rack_X_size)

    return true

  } if (OP_map_page == 2){

    if(_this.saveCase == true){
      var canvasC = createCanvas(1200, 500)
      fill(0)
      text(fileName, 50,400)
    }

      var case_pos_Y = 15
      if (this.TN == 1){
          noFill()
          stroke(0)
          rect(20,case_pos_Y,radiusN*8,radiusN*11/2) // body

    // BODY PARTS
          rect(30+radiusN*8,case_pos_Y, radiusN*8,radiusN*2) // bottom layer 1
          rect(30+radiusN*8,case_pos_Y+radiusN*2+5, radiusN*8,radiusN*2) // bottom layer 2

          rect(30+radiusN*8,case_pos_Y+radiusN*2+5+radiusN*2+5, radiusN*8,22) // boundary
    //      rect(30+radiusN*8,case_pos_Y+radiusN*2+25, radiusN*8,15) // boundary
          rect(30+radiusN*8,case_pos_Y+radiusN*2+5+radiusN*2+5+22+5, radiusN*2.3,radiusN*2.3) // cover top 1 - 45x45mm
          rect(30+radiusN*8+radiusN*2.3+5,case_pos_Y+radiusN*2+5+radiusN*2+5+22+5, radiusN*2.3,radiusN*2.3) // cover top 2 - 45x45mm
          rect(30+radiusN*8+radiusN*2.3+5+radiusN*2.3+5,case_pos_Y+radiusN*2+5+radiusN*2+5+22+5, radiusN*2.3,45) // cover leg 1 - 45x15mm
          rect(30+radiusN*8+radiusN*2.3+5+radiusN*2.3+5,case_pos_Y+radiusN*2+5+radiusN*2+5+22+5+45+5, radiusN*2.3,45) // cover leg 2 - 45x15mm
          // rect(35+radiusN*11,case_pos_Y+radiusN*2+45, radiusN*3,15) // cover top
          // rect(35+radiusN*11,case_pos_Y+radiusN*2+65, radiusN*3,15) // cover top
          translate(radiusN*4+20,radiusN*2)

          if (motor_embed == 0){
            ellipse(0, 0, 12, 12) //motor center
          }else if (motor_embed == 1){
            rect(-(1/4*115),-(1/2*55),115,55) // to embed standard motor
            fill(150)
            ellipse(0, 0, 12, 12) //motor center
          }

    }
  /*  else if(this.TN == 2/3){
      noFill()
      stroke(0)

      var tempRR = 8*(5+4)// radiusN = 8*(5+gearSize)
      rect(20,case_pos_Y,tempRR*8,radiusN*11/2)

      // BODY PARTS
      rect(30+tempRR*8,case_pos_Y, tempRR*8,radiusN*5/2) // bottom layer
      rect(30+tempRR*8,case_pos_Y+radiusN*5/2+5, tempRR*8,15) // boundary
      rect(30+tempRR*8,case_pos_Y+radiusN*5/2+25, tempRR*8,15) // boundary
      rect(30+tempRR*8,case_pos_Y+radiusN*5/2+45, tempRR*7/2,radiusN*2) // cover top
      rect(35+tempRR*8+tempRR*7/2,case_pos_Y+radiusN*5/2+45, tempRR*7/2,15) // cover bottom
      rect(35+tempRR*8+tempRR*7/2,case_pos_Y+radiusN*5/2+65, tempRR*7/2,15) // cover bottom
      rect(35+tempRR*8+tempRR*7/2+tempRR*3/2+5,case_pos_Y+radiusN*5/2+85, tempRR*3/2,radiusN*2) // cover top2
      rect(35+tempRR*8+tempRR*7/2,case_pos_Y+radiusN*5/2+85, tempRR*3/2,15) // cover bottom2
      rect(35+tempRR*8+tempRR*7/2,case_pos_Y+radiusN*5/2+105, tempRR*3/2,15) // cover bottom2

      translate(tempRR*3,radiusN*2)

      if (motor_embed == 0){
        ellipse(0, 0, 10, 10) //motor center
      }else if (motor_embed == 1){
        rect(-(2/3*115),-(1/2*55),115,55) // to embed standard motor
        fill(150)
        ellipse(0, 0, 10, 10) //motor center
      }
    }*/
    return true

  } if (OP_map_page == 3){

      if(_this.savePart == true){
        var canvasL = createCanvas(1200, 500)

        fill(0)
        text(fileName, 50,400)
      }

      var stick_pos_Y = 35//20
      var stick_Y_gap = 18//20
      var stick_pos_X = 30//50
//      var thickness = 70 // 50,70,90,110
      noFill()
      stroke(0)
  //stick 1
      rect(stick_pos_X,stick_pos_Y,30+this.dist_b+this.dist_a+this.dist_c+this.dist_d+thickness,thickness)
  //stick 2
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap+thickness,this.dist_d+this.dist_e+thickness,thickness)

      for(var i=stick_pos_Y; i<stick_pos_Y+thickness; i = i+5){
        line(stick_pos_X+30,i,stick_pos_X+30,i+2) // extra part
      }// stick 1
      for(var i=stick_pos_Y+1; i<stick_pos_Y+thickness; i = i+11){
        line(stick_pos_X+30+this.dist_b,i,stick_pos_X+30+this.dist_b,i+5) //  #1, dist_b
        line(stick_pos_X+30+this.dist_b+this.dist_a,i,stick_pos_X+30+this.dist_b+this.dist_a,i+5)  // #2, dist_a
        line(stick_pos_X+30+this.dist_b+this.dist_a+this.dist_c+this.dist_d,i,stick_pos_X+30+this.dist_b+this.dist_a+this.dist_c+this.dist_d,i+5) // #3, dist_c+d
      }// stick 1

      for(var i =stick_pos_Y+stick_Y_gap+thickness; i<stick_pos_Y+stick_Y_gap+thickness*2; i = i+5){
        line(stick_pos_X+this.dist_d,i,stick_pos_X+this.dist_d,i+2)
        line(stick_pos_X+this.dist_d+this.dist_e,i,stick_pos_X+this.dist_d+this.dist_e,i+2)
      } // stick 2
 // holes for stick_pos_Y
      ellipse(stick_pos_X+30+this.dist_b+this.dist_a+this.dist_c+this.dist_d+thickness*2/5-2,stick_pos_Y+thickness*1/2,8,8)
      ellipse(stick_pos_X+this.dist_d+this.dist_e+thickness*2/5-4,stick_pos_Y+stick_Y_gap+thickness+thickness*1/2,11,11)
      ellipse(stick_pos_X+this.dist_d+this.dist_e+thickness*2/5-4,stick_pos_Y+stick_Y_gap+thickness+thickness*1/2,17,17)
      ellipse(stick_pos_X+this.dist_d+this.dist_e+thickness*3/5+7,stick_pos_Y+stick_Y_gap+thickness+thickness*1/2,8,8)
//stick 3
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap*2+thickness*2,30+this.dist_b+this.dist_a+this.dist_c+this.dist_d+thickness,thickness)
//stick 4
      rect(stick_pos_X,stick_pos_Y+stick_Y_gap*3+thickness*3,this.dist_d+this.dist_e+thickness,thickness)

      for(var i=stick_pos_Y+stick_Y_gap*2+thickness*2+1; i<stick_pos_Y+stick_Y_gap*2+thickness*3; i = i+11){
        line(stick_pos_X+thickness+this.dist_c+this.dist_d+this.dist_a,i,stick_pos_X+thickness+this.dist_c+this.dist_d+this.dist_a,i+5) //  #1, dist_b
        line(stick_pos_X+thickness+this.dist_c+this.dist_d,i,stick_pos_X+thickness+this.dist_c+this.dist_d,i+5) // extra part
        line(stick_pos_X+thickness+this.dist_c+this.dist_d+this.dist_a+this.dist_b,i,stick_pos_X+thickness+this.dist_c+this.dist_d+this.dist_a+this.dist_b,i+5) //  #1, dist_b
      } // stick3
      for(var i=stick_pos_Y+stick_Y_gap*2+thickness*2; i<stick_pos_Y+stick_Y_gap*2+thickness*3; i = i+5){
        line(stick_pos_X+thickness,i,stick_pos_X+thickness,i+2) // extra part
      } // stick3

      for(var i =stick_pos_Y+stick_Y_gap*3+thickness*3; i<stick_pos_Y+stick_Y_gap*3+thickness*4; i = i+5){
        line(stick_pos_X+thickness,i,stick_pos_X+thickness,i+2)
        line(stick_pos_X+thickness+this.dist_e,i,stick_pos_X+thickness+this.dist_e,i+2)
      } // stick 4

// holes for stick_pos_Y
      ellipse(stick_pos_X+thickness*2/5-2,stick_pos_Y+stick_Y_gap*2+thickness*5/2,8,8)
      ellipse(stick_pos_X+thickness*2/5-4,stick_pos_Y+stick_Y_gap*3+thickness*7/2,11,11)
      ellipse(stick_pos_X+thickness*2/5-4,stick_pos_Y+stick_Y_gap*3+thickness*7/2,17,17)
      ellipse(stick_pos_X+thickness*3/5+7,stick_pos_Y+stick_Y_gap*3+thickness*7/2,8,8)

// Instruction #
      textSize(11)
      fill(100)
      noStroke()
      var textY = -5  // where to write #1 ~7 for foldig nets
      text("x", stick_pos_X+10, stick_pos_Y*1+thickness*1+textY)
      text("1", stick_pos_X+30+(1/2*this.dist_b), stick_pos_Y*1+thickness*1+textY)
      text("2", stick_pos_X+30+this.dist_b+(1/2*this.dist_a), stick_pos_Y*1+thickness*1+textY)
      text("3", stick_pos_X+30+this.dist_b+this.dist_a+(1/2*(this.dist_c+this.dist_d)), stick_pos_Y*1+thickness*1+textY)
      text("4", stick_pos_X+30+this.dist_b+this.dist_a+(this.dist_c+this.dist_d)+(1/2*thickness), stick_pos_Y*1+thickness*1+textY)
      text("5", stick_pos_X+(1/2*this.dist_d), stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("6", stick_pos_X+this.dist_d+(1/2*this.dist_e), stick_pos_Y+stick_Y_gap+thickness*2+textY)
      text("7", stick_pos_X+this.dist_d+this.dist_e+(1/2*thickness), stick_pos_Y+stick_Y_gap+thickness*2+textY)

      fill(100)
      noStroke()
      text("x", stick_pos_X+thickness+(this.dist_c+this.dist_d)+this.dist_a+this.dist_b+10, stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("1", stick_pos_X+thickness+(this.dist_c+this.dist_d)+this.dist_a+(1/2*this.dist_b), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("2", stick_pos_X+thickness+(this.dist_c+this.dist_d)+(1/2*this.dist_a), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("3", stick_pos_X+thickness+(1/2*(this.dist_c+this.dist_d)), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("4", stick_pos_X+(1/2*thickness), stick_pos_Y+stick_Y_gap*2+thickness*3+textY)
      text("5", stick_pos_X+thickness+this.dist_e+(1/2*this.dist_d), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("6", stick_pos_X+thickness+(1/2*this.dist_e), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
      text("7", stick_pos_X+(1/2*thickness), stick_pos_Y+stick_Y_gap*3+thickness*4+textY)
/*      }else if(this.pair_petal == 0){}// Or, only one side
  }*/
    return true
  }

}

this.drawPNG = function(){

  noStroke()
  fill(255)
  // rect(0,510,1200,150)

  var map_page = [1,2,3];
  var title = ''
      ,type = 'png'

  fileName = window.prompt('Type your name to save the file: ')

  map_page.forEach(function(index){
    OP_map_page = index

    if(index == 1){
      _this.savePart = true
      _this.drawNet(_this.gearSize,_this.motor_status,1,_this.OPthick,_this.motor_embed)
      title = '_parts'
    }

    if(index == 2){
      _this.saveCase = true
      _this.drawNet(_this.gearSize,_this.motor_status,2,_this.OPthick,_this.motor_embed)
      title = '_case'
    }

    if(index == 3){
      _this.saveLink = true
      _this.drawNet(_this.gearSize,_this.motor_status,3,_this.OPthick,_this.motor_embed)
      title = '_linkage'
    }
    // pdf.save()
    saveCanvas(fileName + title + '_openclose','png')

  });
  createCanvas(temp_windowWidth, temp_windowHeight)//.attribute('id','defaultCanvas')

} //end of drawPNG

// this.delay = function(ms) {
//   var cur_d = new Date();
//   var cur_ticks = cur_d.getTime();
//   var ms_passed = 0;
//   while(ms_passed < ms) {
//     var d = new Date(); // Possible memory leak?
//     var ticks = d.getTime();
//     ms_passed = ticks - cur_ticks;
//     // d = null; // Prevent memory leak?
//   }
// }

  // get functions
  this.getA = function(){return this.dist_a;}
  this.getB = function(){return this.dist_b;}
  this.getC = function(){return this.dist_c;}
  this.getD = function(){return this.dist_d;}
  this.getE = function(){return this.dist_e;}
  this.getF = function(){return this.dist_f;}
  this.getX = function(){return this.x;}
  this.getY = function(){return this.y;}

  this.setA = function(newA){
    this.dist_a = newA
    if (newA > this.dist_aMin && newA < this.dist_aMax){
      this.updateSim()
      return true
    }
    return false
  }
  this.setB = function(newB){
    this.dist_b = newB
    if (newB>this.dist_bMin && newB<this.dist_bMax){
      this.updateSim()
      return true
    }
      return false
  }
  this.setC = function(newC){
    this.dist_c = newC
    if (newC>this.dist_cMin && newC<this.dist_cMax){
      this.updateSim()
      return true
    }
      return false
  }
  this.setD = function(newD){
    this.dist_d = newD
    if (newD > this.dist_dMin && newD < this.dist_dMax){
      this.updateSim()
      return true
    } //need else anyway - if min and max was well defined, this should not happen
      return false
  }
  this.setE = function(newE){
    this.dist_e = newE
    if (newE>this.dist_eMin && newE<this.dist_eMax){
      this.updateSim()
      return true
    }
      return false
  }
  this.setF = function(newF){
    this.dist_f = newF
    if (newF>this.dist_fMin && newF<this.dist_fMax){
      this.updateSim()
      return true
    }
      return false
  }

  this.setX = function(newX){
    this.xx = newX
  }
  this.setY = function(newY){
    this.yy = newY
  }
  this.updateSim = function(){
    this.dist_aMin = abs(this.dist_b-(this.dist_c+this.dist_d))+this.lengthGap
    this.dist_aMax = this.dist_b+this.dist_c+this.dist_d-this.lengthGap

    this.dist_bMin = abs(this.dist_a-(this.dist_c+this.dist_d))+this.lengthGap
    this.dist_bMax = this.dist_a+this.dist_c+this.dist_d-this.lengthGap

    this.dist_cMin = -5
    this.dist_cMax = 400
    //d must be calculated by E and 'part of' C
    this.dist_dMin = abs(this.dist_b-this.dist_a)-this.dist_c+this.lengthGap
    this.dist_dMax = (this.dist_a+this.dist_b)-this.dist_c-this.lengthGap

    this.dist_eMin = abs(this.dist_d-this.dist_g)+this.lengthGap
    this.dist_eMax = this.dist_d+this.dist_g-this.lengthGap

    this.dist_fMin = 0
    this.dist_fMax = 130

    return true
  }

}
