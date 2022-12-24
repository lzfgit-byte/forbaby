// const sound = new Howl({
//     src: ['sounds/fireworks.mp3'],
//     autoplay: true,
//     loop: true,
//     volume: 1.0,
// });
//
// sound.play();
//
// const sound2 = new Howl({
//     src: ['sounds/LoveStory.mp3'],
//     autoplay: true,
//     loop: true,
//     volume: 0.3,
// });
// sound2.play();
let fireworks = document.getElementById('fireworks');
let loveStory = document.getElementById('LoveStory');
loveStory.volume = 0.3;
const aa = setInterval(()=>{
    if (fireworks.paused && config.start){
        fireworks.play();
        loveStory.play();
    }else {
        config.start && clearInterval(aa)
    }
},200)

