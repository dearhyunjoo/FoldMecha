function OpenClose(){

  var _this = this
  this.lengthGap = 5
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
