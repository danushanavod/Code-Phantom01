gsap.fromTo('.red-panel', {width:3000}, {width:600, duration:1.5,ease: "power4.out"});
gsap.fromTo('.red-panel', {width:600}, {width:1085, delay:1.5, duration:1,ease: "power4.out"});
gsap.fromTo('.red-panel',{x:640}, {x:1129, duration:1.5 ,delay:1.5,ease: "power4.out"});
gsap.to('.red-panel', {x:640, duration:1.5,ease: "power4.out"});
gsap.fromTo('.red-panel', {y:-100}, {y:40, duration:1.5,ease: "power4.out"});
gsap.fromTo('.red-panel', {height:900}, {height:617, duration:1.5,ease: "power4.out"});
gsap.fromTo('.hello', {opacity:0}, {opacity:1, duration:1.5});
gsap.to('.he', {opacity:0.15, duration:1.5, delay:1.5});
gsap.to('.ll', {opacity:0.15, duration:1.5, delay:1.5});
gsap.to('.o', {opacity:0.2, duration:1.5, delay:1.5});
gsap.to('.dot', {opacity:0.5, duration:1.5, delay:1.5});
gsap.to('.he', {x:-100, duration:1.8, delay:1.5});
gsap.to('.ll', {x:-100, duration:1.1, delay:1.5});
gsap.to('.o', {x:-100, duration:1.5, delay:1.5});
gsap.to('.dot', {x:-83, duration:1.7, delay:1.5});
gsap.fromTo(".dot", {x: 1000}, {x: 15, duration: 0.5, delay:0.8, ease: "power4.out"});

gsap.from('.logo', {x:-50, duration:0.7, delay:2.2, ease: "power4.out"})
gsap.from('.logo', {opacity:0, duration:0.7, delay:2.2, ease: "power4.out"})

gsap.from('.menu', {x:-50, duration:0.7, delay:2.2, ease: "power4.out"})
gsap.from('.menu', {opacity:0, duration:0.7, delay:2.2, ease: "power4.out"})

gsap.to('.white-line', {opacity:0.2, duration:0.7, delay:1.8, ease: "power4.out"})
gsap.to('.white-line',{opacity:0.1, duration:0.7, delay:2.5, ease: "power4.out"})
gsap.from('.white-line', {x:-50, duration:0.7, delay:1.8, ease: "power4.out"})
gsap.from('.iam', {opacity:0, duration:0.7, delay:2.1, ease: "power4.out"})
gsap.from('.iam', {x:-50, duration:0.7, delay:2.1, ease: "power4.out"})
gsap.from('.dn', {opacity:0, duration:0.7, delay:2.2, ease: "power4.out"})
gsap.from('.dn', {x:-50, duration:0.7, delay:2.2, ease: "power4.out"})
gsap.from('.scroll', {opacity:0, duration:0.7, delay:3, ease: "power4.out"})

document.getElementById('button').addEventListener('click', function () {
    document.querySelector('.who').classList.add('first-title-remove');
    document.querySelector('.am ').classList.add('first-title-remove');
    document.querySelector('.i').classList.add('first-title-remove');
    document.querySelector('.firstabout').classList.add('first-about-remove');
    document.querySelector('.btn-head').classList.add('button-remove');
    document.querySelector('.about-head p').classList.add('about-head-remove');
    document.querySelector('.about-head').classList.add('about-head-remove-line');
    document.querySelector('.second-title').classList.add('second-title-add');
    document.querySelector('.about-gig').classList.add('about-gig-add');
    document.querySelector('.button2').classList.add('button2-add');
    document.querySelector('.about-gig-head').classList.add('about-gig-head-add'); 
});

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
tl.from(".logosect2", 2, {
    opacity:0,
  stagger: {
    from: "onLeave",
  }
});

tl.from(".imgsect1", 1, {
    x:-500,
    opacity:0,
  stagger: {
    from: "onLeave", 
  }
}, '-=3');

tl.from(".sect2allparas", 2, {
    opacity:0,
  stagger: {
    from: "onLeave", 
  }
}, '-=2');

var scene = new ScrollMagic.Scene({
  triggerElement: ".red-panel",
  triggerHook: 0
})
  .setTween(tl)
  .addTo(controller);



t2.from(".first-title", 2, {
    opacity:0,
  stagger: {
    from: "onLeave", 
  }
}, '-=2.5');

t2.from(".about-head", 1, {
    x:50,
    opacity:0,
  stagger: {
    from: "onStart", 
  }
}, '-=2');

t2.from(".about-para", 3, {
    opacity:0,
  stagger: {
    from: "onLeave", 
  }
}, '-=1');

t2.from("#button", 2, {
    opacity:0,
  stagger: {
    from: "onLeave", 
  }
}, '-=3');

var scene = new ScrollMagic.Scene({
  triggerElement: ".section2",
  triggerHook: 0
})
  .setTween(t2)
  .addTo(controller);



t3.to(".thanks",2, {
    opacity:1,
  stagger: {
    from: "onLeave", 
  }
}, '+=0.6');

t3.to(".offer-4",2, {
    opacity:0.8,
  stagger: {
    from: "onLeave", 
  }
}, '-=1.6');

t3.to(".and",2, {
    opacity:1,
  stagger: {
    from: "onLeave", 
  }
},'-=1');

var scene = new ScrollMagic.Scene({
    triggerElement: ".section3",
    triggerHook: 0
  })
    .setTween(t3)
    .addTo(controller);



t4.from(".section5 img",0.5, {
    opacity:0,
    x: -100,
  stagger: {
    from: "onLeave", 
  }
});

t4.to(".section5 p", 2, {
    opacity:0.8,
  stagger: {
    from: "onLeave", 
  }
},'+=0.5');

var scene = new ScrollMagic.Scene({
    triggerElement: ".section4",
    triggerHook: 0
  })
    .setTween(t4)
    .addTo(controller);