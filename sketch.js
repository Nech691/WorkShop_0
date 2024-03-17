let A = 200
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // v line one v
  //red 
  if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(0, 0, 70, 100)
  //yellow
  if (mouseX > A){
    fill(227,227,227)
  } else{
  fill(255, 255, 0)}
  rect(70, 0, 100, 60)
  //white 
  fill(255, 255, 255)
  rect(170, 0, 90, 80)
  //blue
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  rect(260, 0, 70, 80)
  //black
  fill(0)
  rect(330, 0, 70, 60)
  //red
   if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(330, 60, 70, 20)
  //line (x1, y1, x2, y2)
  line(70, 100, 170, 100)
  line(170, 100, 170, 70)
  // v line two v
  //blue
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  rect(0, 100, 120, 80)
  //black 
  fill(0)
  rect(120, 100, 50, 40)
  //red
  if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(120, 140, 50, 40)
  //yellow 
    if (mouseX > A){
    fill(227,227,227)
  } else{
  fill(255, 255, 0)}
  rect(170, 80, 50, 140)
  //line(x1, y1, x2, y2)
  line(220, 150, 300, 150)
  line(300, 150, 300, 80)
  //white 
  fill(255, 255, 255)
  rect(300, 80, 100, 35)
  //white 
  fill(255, 255, 255)
  rect(300, 115, 100, 35)
  // v sides v
  //white
  fill(255, 255, 255)
  rect(0, 180, 100, 70)
  //red
   if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(0, 250, 40, 60)
  //line (x1, y1, x2, y2)
  line(40, 310, 40, 350)
  //blue
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  rect(360, 150, 40)
  //yellow
    if (mouseX > A){
    fill(227,227,227)
  } else{
  fill(255, 255, 0)}
  square(290, 190, 110)
  // v centre v
  //yellow
  if (mouseX > A){
    fill(227,227,227)
  } else{
  fill(255, 255, 0)}
  rect(40, 250, 60, 100)
  //line (x1, y1, x2, y2)
  line(100, 220, 170, 220)
  //blue 
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  square(100, 220, 50)
  //black 
  fill(0)
  square(100, 270, 40)
  //line (x1, y1, x2, y2)
  line(150, 270, 150, 310)
  //white
  fill(255, 255, 255)
  rect(150, 220, 70, 25)
  //white
  fill(255, 255, 255)
  rect(150, 245, 70, 25)
  //red
   if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(150, 265, 70, 75)
  //black
  fill(0)
  rect(220, 190, 70, 60)
  //red
   if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(220, 150, 140, 40)
  //red
  if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  square(290, 300, 20)
  //blue
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  square(220, 250, 70)
  //line (x1, y1, x2, y2)
  line(220, 320, 220, 340)
  // v last line v
  //black 
  fill(0)
  rect(0, 350, 100, 50)
  //white 
  fill(255, 255, 255)
  rect(100, 310, 50, 90)
  //red
   if (mouseX > A){
    fill(76,76,76);
  } else {
  fill(255, 0, 0)}
  rect(150, 370, 90, 30)
  //line (x1, y1, x2, y2)
  line(150, 340, 240, 340)
  line(240, 340, 240, 370)
  //yellow
   if (mouseX > A){
    fill(227,227,227)
  } else{
  fill(255, 255, 0)}
  rect(240, 320, 70, 100)
  //blue 
  if (mouseX > A){
    fill(28,28,28)
  } else {
  fill(0, 0, 255)}
  square(310, 355, 45)
  //white
  fill(255, 255, 255)
  square(355, 355, 45)
  //black
  fill(0)
  rect(310, 300, 90, 65)

}