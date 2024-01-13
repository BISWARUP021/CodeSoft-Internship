/*gsap.to("#box",{
    x:1000 ,
    duration:5,
    delay:2,
    rotate:360,
    backgrounColor:"black"
});

gsap.from("#box",{
    x:900 ,
    y:900,
    duration:5,
    delay:2,
    rotate:360,
    backgroundColor:"blue"
})
gsap.to("h1",{
    x:600,
    duration:4,
    delay:1,
    color:"crimson",
    repeat:-1
   
})
gsap.to("h3",{
    x:600,
    duration:4,
    delay:3,
    color:"pink",
    repeat:-1
})
gsap.to("h2",{
    x:600,
    duration:4,
    delay:2,
    color:"blue",
    repeat:-1
   
})
 gsap.to("h1",{
    x:600,
    duration:4,
    delay:1,
    color:"crimson",
    repeat:-1,
    stagger:0.5,
    yoyo:true //⪢eta diye bounce back type animation hoi
   
})*/

/*stagger jkhn kono class ba aki type er elemet er upor gsap lagano hy tkhn sb eklement aksthe chole
seta k erate amra stagger use kri r stagger j value ta debo sei interval e element gulo run hbe mane 
 aktar por akta 1sthe sbn kota hbe nhX
 //GSAP.TIMELINE use kora hoi synchornusly sb kichu chalanor jnno
 //timeline bhi time line mein loop kr skte hai to timeline ke liya thakle loop kr skte hain
let timeLine=   gsap.timeline();
timeLine.to("h1",{
    x:600,
    duration:2,
    repeat:1,
  //  yoyo:true,
    color:"blue"
})
timeLine.to("h2",{
    x:700,
   duration:2,
    repeat:1,
   // yoyo:true,
    color:"yellow"
})
timeLine.to("h3",{
    x:1000,
    duration:2,
    repeat:1,
   // yoyo:true,
    color:"green"
})*/
let tl = gsap.timeline();
tl.from("#nav img,#nav h3,#nav button",{
 y:-300,
 //delay:0.5,
 duration:1,
 opacity:0,

 
})
tl.from("#bodypart h1",{
    y:200,opacity:0,stagger:0.5,duration:1,delay:0.5
})
tl.from("#bodypart img",{
    x:400,
    duration:1,
    stagger:0.5,
    delay:0.5,
    opacity:0,
})

 tl.from(" #bodypart h5",{
    y:50,opacity:0,repeat:-1,yoyo:true,duration:0.6,delay:0.5
})