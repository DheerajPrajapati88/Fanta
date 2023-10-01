function loadingAnim(){

const anim=gsap.timeline();
anim.from(".one h1",{
    scale:0,
})
anim.from(".one #fanta",{
    opacity:0,
    y:50,
    ease:Power2
})
anim.from(".one #halfOrange",{
    opacity:0,
    x:-50,
    ease:Power2
},"z")
anim.from(".one #orange",{
    opacity:0,
    x:50,
    ease:Power2
},"z")
anim.from(".one #leaf1,#leaf3",{
    opacity:0,
    x:-50,
    scale:0,
    ease:Power2
})
anim.from(".one #leaf4",{
    opacity:0,
    y:-100,
    rotate:"180deg",
    scale:0,
    ease:Power2
})

}
loadingAnim();

gsap.to(".one h1",{
    x:10,
    repeat:-1,
    yoyo:true,
    ease:"linear",
    duration:1
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    scroller:"body",
    start:"0% 90%",
    end:"60% 60%",
    scrub:true,
}
})
tl.to("#fanta",{
    top:"110%",
    left:"5%",
},"a")
tl.to(".one>#halfOrange",{
    top:"150%",
    left:"25%",
},"a")
tl.to(".one #orange",{
    top:"155%",
    left:"75%",
},"a")
tl.to(".one #leaf3",{
    rotate:"-130deg",
    top:"150%",
    left:"65%",
},"a")
tl.to(".one #leaf1",{
    rotate:"-90deg",
    top:"160%",
    left:"6%",
},"a")

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"-40% 50%",
    scroller:"body",
    end:"50% 50%",
    scrub:true,    
}
})
tl2.to(".main",{
    backgroundColor:"#000",
    // ease:"none",
    scrollTrigger:{
        trigger:".three",
        start:"0% 50%",
        end:"50% 50%",
        scrub:2
    }
  })
tl2.from("#apple",{
    rotate:"-90deg",
    top:"100%",
    left:"-30%"
},"b")
tl2.from("#lipton",{
    rotate:"-90deg",
        top:"100%",
},"b")
tl2.from("#sprite",{
    rotate:"90deg",
    top:"100%",
},"b")
tl2.from("#greenOrange",{
    rotate:"90deg",
    top:"100%",
    right:"-30%"
},"b")
tl2.to("#fanta",{
    top:"225%",
    left:"37%",
    width:"25%"
 
},"b")
tl2.to("#halfOrange",{
    top:"209%",
    left:"41%",
    width:"17%"
 
},"b")
tl2.to("#leaf1",{
    top:"200%",
    left:"-10%",
    rotate:"90deg"
 
},"b")

// create

function media(){
let mm = gsap.matchMedia();

mm.add("(max-width:375px)", () => {
    tl.to("#fanta",{
        left:"-20%",
   
    },"a")

    tl.to(".one>#halfOrange",{
        top:"160%",
        left:"25%",
    },"a")
    tl.to(".one #orange",{
        top:"160%",
        left:"60%",
        width:"20%"
    },"a")

    tl2.to("#fanta",{
        width:"40%",
        left:"30%",
        top:"250%"
    })
    
    tl2.to("#halfOrange",{
        width:"30%",
        left:"35%",
        top:"240%"
    })

});

}
media();
