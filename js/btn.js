// love.js
const likeBtn = document.getElementById('likeBtn');
const heart = document.getElementById('heart')
// likeBtn.addEventListener('mousemove', () => {
//     heart.classList.add('heratPop')
//
// })
//
// likeBtn.addEventListener('mouseout', () => {
//     heart.classList.remove('heratPop')
// })
likeBtn.addEventListener("click", function () {
    addHearts(likeBtn)
    setTimeout(()=>{
        const startDiv = document.getElementById('startDiv')
        startDiv.classList.add('animate__fadeOutDown')
        config.start = true;
    },500)
})
// love.js
function addHearts(content) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const fullHeart = document.createElement('div');
            fullHeart.classList.add('hearts');
            fullHeart.innerHTML = '<span class="heart"></span>';
            fullHeart.style.left = Math.random() * 100 + '%';
            fullHeart.style.top = Math.random() * 100 + '%';
            fullHeart.style.transform = `translate(-50%, -50%) scale(${Math.random() + 0.3}) `
            fullHeart.style.animationDuration = Math.random() * 2 + 3 + 's';
            fullHeart.firstChild.style.backgroundColor = '#ed3056'
            content.appendChild(fullHeart);
            setTimeout(() => {
                fullHeart.remove();
            }, 3000);
        }, i * 100)
    }
}
