// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();










function timelineone(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            scroller:"#main",
            start:"top top",
            scrub: 1,
            // markers:true,
            pin:true,
            end: "bottom -550%"
    
        }
    })
    tl.to("#circle #btm img ",{
        rotate:"-180deg",
        scale: 1,
        duration:1,
        stagger: 0.1,
        ease:Power1
    },"hello")
    .to("#circle #top img ",{
       
        scale: 1,
        duration:1,
        stagger: .1,
        ease:Power1
    },"hello")
    .to("#centering #cimage ",{
        scale:"0",
        duration:1,
        stagger:.1,
        ease:Power1
    },"hello")
    .to("#centering h5 ",{
        opacity:0,
        // duration:1,
        stagger:.1,
        ease:Power1
    },"hello")
    .to("#circle ",{
        scale:.6,
        // duration:1,
        // stagger:.1,
        ease:Power1
    },"hello")
    .to("#overlay>h1#gallery",{
        bottom:"-50%",
        ease:Power1
    },"hello")
    .to("#gola",{
        top:"50%",
        ease:Power1,
        scale:2
    },"hello")
    .to("#gola",{
        opacity:0,
        // scale:0.3,
        duration:2.2,
        ease:Power1
    },"hello2")
    
    .to("#overlay>h1#pf",{
        rotate:0,
        bottom:"2%",
        ease:Power1
    },"hello2")
    
    .to("#smcircle ",{
        scale:0,
        duration:2,
        // stagger:.1,
        ease:Power1
    },"hello2")
    .to("#circle ",{
        scale:0,
        // duration:1,
        // stagger:.1,
        ease:Power1
    },"hello2")
    .to("#pinkpart ",{
        top: "30%",
        // left:0,
        duration:5,
        // stagger:.1,
        ease:Power1
    },"hello2")
    .to("#pinkpart ",{
        top:"0%",
        // left:0,
        duration:3,
        // stagger:.1,
        ease:Power1
    },"hello2")
}


function timelinetwo(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            scroller:"#main",
            stagger:1,
            start:"top top",
            pin:true,
            scrub:1,
            end:"bottom -150%"
        }
      
    })

    tl2.to(".circle", {
        top: "50%",
        ease:Power1,
        stagger: .1
    })
    .to(".circle", {
        left: "50%",
        ease:Power1,
        stagger: .1
    })
    .to(".pi", {
        scale:"12",

        ease:Power1,
        stagger: .1
    })
    .to(".pi",{
        background:"linear-gradient(to right,#d5a7d4,#b4aad5 )",
        ease:Power1
    })
    .to("#stop h1",{
        left:"-150%",
        duration:5,

    },"a")
    .to("#sbtm #two",{
        opacity:0,
        duration: 3,
        ease:Power1
    },"a")
    .to("#sbtm #one",{
        opacity:1,
        duration:3,
        delay:1,
        ease:Power1
    },"a")

    
}



timelineone();
timelinetwo();