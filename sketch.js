let rightWx = 950
let rightWy = 700

let leftWx = 600
let leftWy = 700

let angle = 0
let radius = 70

let y = 700
let speed = 5

let wiggle = 0
let wiggleSpeed = 0.05
let wiggleRange = 50

let x = 600
let y2 = 700
let xSpeed = 2
let ySpeed = 2

let size = 65
let sizeSpeed = 2

let gravity = 0.1
let vy = -10

let bounce = 0
let bounceSpeed = 0.1

let flip = false

let rotation = 0
let flipSpeed = 0.01
let rotateSpeed = 0.01

let leftBounce = 0
let rightBounce = 0
let friction = 0.9

let title
let wheel

let text = 0
let rectfade = 0
let factimage
let imagefade = 0

function setup() {
  createCanvas(1536, 814)

title = loadImage("title.png")
wheel = loadImage("wheel.png")

fact1 = loadImage("fact1.png")
fact2 = loadImage("fact2.png")
fact3 = loadImage("fact3.png")

factimage = title

}

function draw() {
  background(125)
fact1.resize(900,0)
fact2.resize(900,0)
fact3.resize(900,0)

if(text == 1){
imagefade = 255
factimage = fact1
}else if(text == 2) {
imagefade = 255
factimage = fact2
}else if(text == 3){
imagefade = 255
factimage = fact3
}

tint(255,255,255,imagefade)

image(factimage, 1200, 400)


tint(255,255,255,255)
imageMode(CORNER)
title.resize(700,0)
image(title, 50, -100)


  // Animation 1
  if (keyIsDown(49)) {
    leftWy = y + sin(frameCount * 0.1 * speed) * 30
    rightWy = y - sin(frameCount * 0.1 * speed) * 30
  }


  // Animation 3
  if (keyIsDown(51)) {
    leftWx = 600 + sin(frameCount * wiggleSpeed * speed) * wiggleRange
    rightWx = 950 + sin(frameCount * wiggleSpeed * speed) * wiggleRange
    wiggle += 0.1
text = 1
  }

  // Animation 4
  if (keyIsDown(52)) {
    leftWy = y + sin(frameCount * 0.1 * speed) * 30
    rightWy = y - sin(frameCount * 0.05 * speed) * 30
  }

  // Animation 5
  if (keyIsDown(53)) {
    x += xSpeed * speed
    if (x >= 950 || x <= 600) {
      xSpeed *= -1
    }
    leftWx = x
    rightWx = x + 350
  }

  // Animation 6
  if (keyIsDown(54)) {
    size += sizeSpeed * speed
    if (size >= 100 || size <= 50) {
      sizeSpeed *= -1
text = 2
    }
    leftWy = y
    rightWy = y
    ellipse(leftWx, leftWy, size, size)
    ellipse(rightWx, rightWy, size, size)
  }

 // Animation 7
  if (keyIsDown(55)) {
    leftWy += leftBounce
    rightWy += rightBounce
    leftBounce += gravity * speed
    rightBounce += gravity * speed
    if (leftWy >= 700) {
      leftWy = 700
      leftBounce *= -bounceSpeed
      leftBounce *= friction
      if (leftBounce > -0.5) {
        leftBounce = 0
      }
    } else {
      leftBounce *= friction
    }
    if (rightWy >= 700) {
      rightWy = 700
      rightBounce *= -bounceSpeed
      rightBounce *= friction
      if (rightBounce > -0.5) {
        rightBounce = 0
      }
    } else {
      rightBounce *= friction
    }
  }

// Animation 8
  if (keyIsDown(56)) {
    if (!flip) {
      targetRotation = PI
      flip = true
    } else {
      targetRotation = 0
      flip = false
    }
    let deltaRotation = targetRotation - rotation
    rotation += deltaRotation * flipSpeed * speed
    translate((leftWx + rightWx) / 2, (leftWy + rightWy) / 2)
    rotate(rotation)
    translate(-(leftWx + rightWx) / 2, -(leftWy + rightWy) / 2)
  }

  // Animation 9
  if (keyIsDown(57)) {
    rotation += rotateSpeed * speed
    translate((leftWx + rightWx) / 2, (leftWy + rightWy) / 2)
    rotate(rotation)
    translate(-(leftWx + rightWx) / 2, -(leftWy + rightWy) / 2)
text = 3
  }

  // Animation 10
  if (keyIsDown(48)) {
    x += xSpeed * speed
    y2 += ySpeed * speed
    if (x >= 950 || x <= 600) {
      xSpeed *= -1
    }
    if (y2 >= 800 || y2 <= 600) {
      ySpeed *= -1
    }
    leftWx = x
    leftWy = y2
    rightWx = x + 350
    rightWy = y2
  }

  // Draw the skateboard
  stroke(0)
  strokeWeight(1)
  fill(230)
  ellipse(leftWx, leftWy, 65, 65)
  ellipse(rightWx, rightWy, 65, 65)

  noFill()
  stroke(20)
  strokeWeight(20)
  beginShape()
  vertex(leftWx - 80, leftWy - 50)
  vertex(leftWx - 30, leftWy - 35)
  vertex(rightWx + 30, rightWy - 35)
  vertex(rightWx + 80, rightWy - 50)
  endShape()

imageMode(CENTER)
wheel.resize(100,0)
image(wheel,leftWx, leftWy)
image(wheel,rightWx, rightWy)
}