

var rlogo=document.querySelector("#r")
var flag=0

rlogo.addEventListener("click",function(){
   if(flag==0) {
    gsap.to("#r .animal", {
        scale:1.2,
          x : -300,
          rotate:-360,
        
      }) 
      flag=1
   } else{
    gsap.to("#r .animal", {
        scale:1,
          x : 0,
          rotate:0,
        
      }) 
      flag=0
   }
})

var ci=0
rlogo.addEventListener("click",function(){
    if(ci==0){
         gsap.to("#r .plants", {
        scale:1.2,
          x : 200,
          opacity:1,
          
      })
       ci=1
    }else{ gsap.to("#r .plants", {
        scale:1,
          x : 0,
        opacity:0,
        duration:0.2,
          
      })
      ci=0
    }
   
})

Shery.mouseFollower({});
Shery.makeMagnet(".anime,#tags,.image h3,.textelem h3,#dic button,.n1,.n2,.n3,#n4,#n5,#n6,#email,.ppp,.submit");
Shery.makeMagnet("#anime");



gsap.from(".anime,#tags",{
  satgger:.5,
  x:50,
  rotate:1,
  duration:1,
  ease:Power3,
  opacity:0,
  rotate:1,
})


gsap.to(".textelem ",{
  scrollTrigger:{
   trigger:"#rox",
   start:"-50%",
   scrub:1,
   marker:true,
  },
   opacity:2,
  y:-60,
  duration:1,
  rotate:5,
 
})

gsap.to(" #text .textelem ",{
  scrollTrigger:{
   trigger:"#rox",
   start:"-50%",
   scrub:1,
   marker:true,
  },
   opacity:2,
  y:-60,
  duration:1,
  rotate:5,
 
})

gsap.to(" .image",{
  scrollTrigger:{
   trigger:"#page1",
   start:"60%",
   scrub:1,
   marker:true,
  },
   opacity:2,
  y:-100,
  duration:1,
  ease:Power3,  
})

gsap.from("#elem",{
scrollTrigger:{
 trigger:"#rox",
 start:"20%",
 scrub:3,
 marker:true,
},
  satgger:.7,
   y:300,
   rotate:10,
   ease:Power3
  
})

gsap.from(" #box1",{
scrollTrigger:{
 trigger:"#page3",
 start:"50%",
 scrub:3,
 Marker:true,
},
 y:300,
opacity:0,
delay:0.1,
duration:0.2,
stagger:{
  each:.2
},
 rotate:10,

  
})
gsap.from(" #box2",{
scrollTrigger:{
 trigger:"#page3",
 start:"70%",
 scrub:3,
 Marker:true,
},
 y:400,
opacity:0,
delay:2,
duration:0.9,
stagger:1,
rotate:-10,

  
})
gsap.from(" #box3",{
scrollTrigger:{
 trigger:"#page3",
 start:"90%",
 scrub:3,
//  markers:true,
},
 y:300,
opacity:0,
delay:0.5,
duration:0.9,  
stagger:1,


  
})
// gsap.from("#elem3 h1,#elem3 h2", {
//   y: 10,
//   rotate: 10,
//   opacity: 0,
//   delay: 0.3,
//   duration: 0.7
// })

var tl= document.querySelector("#page5 h1");
gsap.to("#elem3 h1",{
  scrollTrigger:{
    trigger:"#page5 ",
    scoller:"#main",
    start:"  60%",
    end:  "top 0",
    scrub:3,
    // markers:true,
  },
  x:-150,
  ease:Power3,
})
gsap.to("#elem3 h2",{
  scrollTrigger:{
    trigger:"#page5 ",
    scoller:"#main",
    start:"  60%",
    end:  "top 0",
    scrub:3,
    // markers:true,
  },
  x:150,
  ease:Power3,
})
gsap.to("#data",{
  scrollTrigger:{
    trigger:"#page5 ",
    scoller:"#main",
    start:"  10%",
    end:  "top 0",
    scrub:3,
    // markers:true,
  },
  width:"95%",
  ease:Power1,
 
})
gsap.from("#datatext h1 ,#data p",{
  scrollTrigger:{
   trigger:"#page5",
   pin:true,
   start:"40%",
   endTrigger:"#data p",
   scrub:3,
   Marker:true,
  },
   y:700,
  opacity:1,
  delay:2,
  duration:0.9,
  stagger:1,
  rotate:-10,
  })

  gsap.from("#text4 h1 ,#paragrah ",{
    scrollTrigger:{
     trigger:"#page6",
     start:"40%",
    //  endTrigger:"#paragrah p",
     scrub:3,
     mrakers:true
    },
     y:700,
     x:800,
     opacity:1,
     delay:1,
     duration:1,
     stagger:.4,
    })
   
    
    gsap.to(".grabage,.dumpster ",{
      scrollTrigger:{
       trigger:"#page7",
       start:"70%",
       end:"110%" ,
      //  endTrigger:"#paragrah p",
       scrub:3,
      //  markers:true,
      
      },
      x:1100,
       opacity:1,
       delay:1,
       duration:4,
     
      })
     
  
      gsap.to("#landing h1",{
        scrollTrigger:{
          trigger:"#page7",
          start:"70%",
          end:"100%" ,
         
        //  endTrigger:"#paragrah p",
         scrub:3,
         
        },
        x:100,
         opacity:1,
         delay:2,
         duration:1,
      
        })
        gsap.to("#page9 #cis",{
          scrollTrigger:{
            trigger:"#page7",
            start:"150%",
            end:"200%" ,
          //  markers:true,
          //  endTrigger:"#paragrah p",
           scrub:3,
           
          },
          width:"95%",
         
        
          })
          gsap.from("#layer",{
            scrollTrigger:{
              trigger:"#page7",
              start:"210%",
              end:"215%" ,
            //  markers:true,
            //  endTrigger:"#paragrah p",
             scrub:3,
             
            },
            opacity:0,
            duration:2,
            delay:1,
              ease:Power1, 
          
   })
 
gsap.from(".n1 ",{
  scrollTrigger:{
    trigger:"#page9",
    start:"60%",

  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  duration:1,
  ease:Power3,
  opacity:0,
  satgger:2,
})
gsap.from(".n2 ",{
  scrollTrigger:{
    trigger:"#page9",
    start:"65%",
   
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  duration:1,
  delay:0.2,
  ease:Power3,
  opacity:0,
  satgger:2,
})
gsap.from(".n3 ",{
  scrollTrigger:{
    trigger:"#page9",
    start:"70%",
   
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  satgger:2,
})

gsap.from("#n4 ",{
  scrollTrigger:{
    trigger:"#page9",
    start:"71%",
   
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  satgger:2,
})
gsap.from("#n5 ",{
  scrollTrigger:{
    trigger:"#page9",
    start:"72%",
   
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  satgger:2,
})
gsap.from("#n6",{
  scrollTrigger:{
    trigger:"#page9",
    start:"73%",
   
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  },
 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  satgger:2,
})

gsap.from("#rise ",{
  scrollTrigger:{
    trigger:"#page10",
    start:"68%",
    // end:"79%",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  }, 
  width:"50%",
  duration:2,
  ease:Power3
})

gsap.to("#tary1 ",{
  scrollTrigger:{
    trigger:"#page11",
    // pin:"7%",
    start:"7%",
    end:"120%",
    // endTrigger:"#tary1",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  }, 
  x:600,
  // opacity:1,
  delay:2,
  duration:0.9,
  stagger:1,
  
})

gsap.from("#tary2 ",{
  scrollTrigger:{
    trigger:"#page11",
    // pin:"7%",
    start:"10%",
    end:"120%",
    // endTrigger:"#tary1",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  }, 
  x:-1000,
  // opacity:1,
  delay:2,
  duration:0.9,
  stagger:1,
  
})

gsap.from("#textcontain ",{
  scrollTrigger:{
    trigger:"#page11",
    start:"68%",
    end:"90%",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  
   
  }, 
  x:300,
  // width:"1000%",
  duration:1,
  ease:Power3,
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
gsap.from("#cridetpage h1",{
  scrollTrigger:{
    trigger:"#page12",
    start:"55%",
    end:"90%",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  x: 100,
  delay:0.4,
  duration:1,
  ease:Power3,
  // opacity:0,
  // rotate:10,

})

// gsap.from("#animation",{
//   scrollTrigger:{
//     trigger:"#page12",
//     start:"68%",
//     end:"90%",
//    scrub:2,
//    markers:true,
//   //  endTrigger:"#paragrah p",
//   }, 
//   y: 20,
//   delay:0.4,
//   duration:1,
//   ease:Power3,
//   opacity:0,
//   // rotate:10,
  

// })
gsap.from("#credit",{
  scrollTrigger:{
    trigger:"#page12",
    start:"68%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  

})
gsap.from("#credit2",{
  scrollTrigger:{
    trigger:"#page12",
    start:"70%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:1,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  

})

gsap.from("#credit3",{
  scrollTrigger:{
    trigger:"#page12",
    start:"75%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  

})
gsap.from("#cre",{
  scrollTrigger:{
    trigger:"#page12",
    start:"78%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:1,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  

})

gsap.from("#team",{
  scrollTrigger:{
    trigger:"#page12",
    start:"80%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:0.4,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  
})    
gsap.from("#members",{
  scrollTrigger:{
    trigger:"#page12",
    start:"85%",
    end:"90%",
  //  scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  y: 20,
  delay:1,
  duration:1,
  ease:Power3,
  opacity:0,
  // rotate:10,
  
}) 
gsap.from("#thnaks",{
  scrollTrigger:{
    trigger:"#page12",
    start:"110%",
    // end:"90%",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
 x:-40,
  // rotate:-10,
  duration:1,

}) 
          
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll("#page13").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();     



gsap.to("#page13",{
  scrollTrigger:{
    trigger:"#page12",
    start:"113%",
    // end:"90%",
   scrub:2,
  //  markers:true,
  //  endTrigger:"#paragrah p",
  }, 
  backgroundColor:"#000",
  color:"#fff",


}) 








