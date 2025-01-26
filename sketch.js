var a=0
var b=0
var c=3
var d=3
var e=6
var f=6
var g=9
var h=9
var i=12
var j=12
var k=15 
var l=15
var m=18
var n=18

var a1=100
var b1=-5
var c1=103
var d1=-2
var e1=106
var f1=1
var g1=109
var h1=4
var i1=112
var j1=7
var k1=115
var l1=10
var m1=118
var n1=13

var a2=200
var b2=-10
var c2=203
var d2=-7
var e2=206
var f2=-4
var g2=209
var h2=-1
var i2=2
var j2=212
var k2=5
var l2=215
var m2=8
var n2=218

var a3=300
var b3=-15
var c3=303
var d3=-12
var e3=306
var f3=-9
var g3=309
var h3=-6
var i3=312
var j3=-3
var k3=315
var l3=0
var m3=318
var n3=3

function setup(){
    createCanvas (600,400);
}
function draw(){
    background ("#171475")

    //ground and handrail
    fill (0)
    rect(0,300,600,100)
    rect(0,250,600,4)
    rect (10,250,4,50)
    rect (40,250,4,50)
    rect (70,250,4,50)
    rect (100,250,4,50)
    rect (130,250,4,50)
    rect (160,250,4,50)
    rect (190,250,4,50)
    rect (220,250,4,50)
    rect (250,250,4,50)
    rect (280,250,4,50)
    rect (310,250,4,50)
    rect (340,250,4,50)
    rect (370,250,4,50)
    rect (400,250,4,50)
    rect (430,250,4,50)
    rect (460,250,4,50)
    rect (490,250,4,50)
    rect (520,250,4,50)
    rect (550,250,4,50)
    rect (580,250,4,50)

    //Girl
    circle (387,200,30) // head
    rect (372,200,30,40) // hair
    rect (377,240,20,40) // dress
    rect (380,280,4,40) // left leg
    rect (389,280,4,40) // right leg

    circle (372,220,5.5) // left arm
    circle (369,226,5.5) //-3  +6
    circle (366,232,5.5) // 1
    circle (363,238,5.5) // 2
    circle (360,244,5.5) // 3
    circle (357,250,5.5) // 4

    circle (402,220,5.5) // right arm
    circle (405,226,5.5) //+3  +6
    circle (408,232,5.5) // 1
    circle (411,238,5.5) // 2
    circle (414,244,5.5) // 3
    circle (417,250,5.5) // 4


    fill (225)
    circle (200,100,6)
    circle (450,50,6)
    circle (20,30,6)
    circle (100,70,6)
    circle (250,30,6)
    circle (550,80,6)
    circle (350,80,6)
    circle (25,130,6)
    circle (580,30,6)
    circle (450,140,6)
    
    circle (a,b,5)
    a = a+1
    a = a % 150
    b = b+2
    b = b % 300
    circle (c,d,5)
    c = c+1
    c= c % 150
    d = d+2
    d = d % 300
    circle (e,f,5)
    e = e+1
    e= e % 150
    f = f+2
    f = f % 300
    circle (g,h,5)
    g = g+1
    g= g % 150
    h = h+2
    h = h % 300
    circle (i,j,5)
    i = i+1
    i= i % 150
    j = j+2
    j = j % 300
    circle (k,l,5)
    k = k+1
    k= k % 150
    l = l+2
    l = l % 300
    circle (m,n,5)
    m = m+1
    m = m % 150
    n = n+2
    n = n % 300


   circle (a1,b1,5)
   a1 = a1+1
   a1 = a1 % 250
   b1 = b1+2
   b1 = b1 % 250
   circle (c1,d1,5)
   c1 = c1+1
   c1 = c1 % 250
   d1 = d1+2
   d1 = d1 % 250
   circle (e1,f1,5)
   e1 = e1+1
   e1 = e1 % 250
   f1 = f1+2
   f1 = f1 % 250
   circle (g1,h1,5)
   g1 = g1+1
   g1 = g1 % 250
   h1 = h1+2
   h1 = h1 % 250
   circle (i1,j1,5)
   i1 = i1+1
   i1 = i1 % 250
   j1 = j1+2
   j1 = j1 % 250
   circle (k1,l1,5)
   k1 = k1+1
   k1 = k1 % 250
   l1 = l1+2
   l1 = l1 % 250
   circle (m1,n1,5)
   m1 = m1+1
   m1 = m1 % 250
   n1 = n1+2
   n1 = n1 % 250


   circle (a2,b2,5)
   a2 = a2+1
   a2 = a2 % 400
   b2 = b2+2
   b2 = b2 % 300
   circle (c2,d2,5)
   c2 = c2+1
   c2 = c2 % 400
   d2 = d2+2
   d2 = d2 % 300
   circle (e2,f2,5)
   e2 = e2+1
   e2 = e2 % 400
   f2 = f2+2
   f2 = f2 % 300
   circle (g2,h2,5)
   g2 = g2+1
   g2 = g2 % 400
   h2 = h2+2
   h2 = h2 % 300
   circle (i2,j2,5)
   i2 = i2+1
   i2 = i2 % 400
   j2 = j2+2
   j2 = j2 % 300
   circle (k2,l2,5)
   k2 = k2+1
   k2 = k2 % 400
   l2 = l2+2
   l2 = l2 % 300
   circle (m2,n2,5)
   m2 = m2+1
   m2 = m2 % 400
   n2 = n2+2
   n2 = n2 % 300

   circle (a3,b3,5)
   a3 = a3+1
   a3 = a3 % 600
   b3 = b3+2
   b3 = b3 % 300
   circle (c3,d3,5)
   c3 = c3+1
   c3 = c3 % 600
   d3 = d3+2
   d3 = d3 % 300
   circle (e3,f3,5)
   e3 = e3+1
   e3 = e3 % 600
   f3 = f3+2
   f3 = f3 % 300
   circle (g3,h3,5)
   g3 = g3+1
   g3 = g3 % 600
   h3 = h3+2
   h3 = h3 % 300
   circle (i3,j3,5)
   i3 = i3+1
   i3 = i3 % 600
   j3 = j3+2
   j3 = j3 % 300
   circle (k3,l3,5)
   k3 = k3+1
   k3 = k3 % 600
   l3 = l3+2
   l3 = l3 % 300
   circle (m3,n3,5)
   m3 = m3+1
   m3 = m3 % 600
   n3 = n3+2
   n3 = n3 % 300
}