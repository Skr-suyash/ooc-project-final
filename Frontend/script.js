
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.2,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }

})