//Shadow
const shadow = document.querySelector('.shadow')
//Hair
const hair = document.querySelector('.hair')
//Torso
const torso = document.querySelector('#torso')
//Hands
const hands = document.querySelector('#hands')
//Face
const face = document.querySelector('#face')
//Beard
const beard = document.querySelector('#beard')
//Hat
const hat = document.querySelector('#hat')
//Laag_20
const content = document.querySelectorAll('[data-animate-after]')
const title = document.querySelector('h1')

let wizardComponents = []
wizardComponents.push(hair, torso, hands, face, beard, hat)
console.log(content)
window.onload = animateWizard()

function animateWizard() {
    wizardComponents.forEach(function(comp){
        comp.setAttribute('data-animate', '')
    })
    let animatable = document.querySelectorAll('[data-animate]');
    
    TweenMax.from(shadow, 1, 
        {
            transformOrigin: '50% 50%',
            scale: 0,
            force3D: true
        })
    TweenMax.staggerFrom(animatable, 1, 
        {   
            transformOrigin: 'top',
            y: -500,
            scale: 0, 
            opacity:0, 
            delay:1, 
            ease:Power2.easeOut, 
            force3D:true
        }, 0.05);    
    TweenMax.from(title, 1,
        {
            delay: 2.5,
            transformOrigin: 'bottom',
            y: -50,
            opacity: 0,
            // scale: 0,
            ease:Power2.easeOut,                     
        })
    TweenMax.staggerFrom(content, 2,
        {
            delay: 3.5,
            transformOrigin: 'bottom',
            y: 50,
            opacity: 0,
            // scale: 0,
            ease:Power2.easeOut,                     
        }, 0.5)
}