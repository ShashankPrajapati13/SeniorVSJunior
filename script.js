
    
        
var timeline = gsap.timeline();   
timeline
.from(".a",{
    duration:2,
    slutter: 1,
    opacity: 0,
    x:-100,
    ease: Expo.InOut,
})
.from(".c",{
    duration:1,
    opacity: 0,
    y:-100,
    ease: Expo.InOut,
    slutter: 1,
})
.from(".b",{
    duration:1,
    opacity: 0,
    y:100,
    ease: Expo.InOut,
    slutter: 1,
})
.from(".d",{
    duration:1,
    opacity: 0,
    x:100,
    ease: Expo.InOut,
    slutter: 1,
})
.from(".e",{
    duration:1,
    opacity: 0,
    y:-100,
    ease: Expo.InOut,
    slutter: 1,
})

var animate = document.querySelectorAll(".animate");
setTimeout(function(){
    gsap.set(animate,{opacity:0})
animate.forEach(function(elem){
  gsap.to(elem,{
    
    opacity:1,
    onStart:function(){
      $(elem).textillate({
        in:{
          effect:`fadeInUp`,
          duration:3
        }
      })
    }
  })
});
},2150);

