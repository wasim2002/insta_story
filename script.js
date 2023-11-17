let tl = gsap.timeline()
tl.from(".lander-insta", {
    duration: 1,
    scale: 2
})
tl.to(".lander", {
    opacity: 0,
    durataion: 0.1

})
tl.to(".lander", {
    display: "none"
})

let arr = [
    { name: "Elon musk", dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ", story: "https://m.media-amazon.com/images/M/MV5BMzZkNDZiNWUtYjFkNi00NjFkLThiOTAtNDAxZWVjNzZlZjc2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_FMjpg_UX1000_.jpg" }, { name: "Tim Cook", dp: "https://cdn.outsideonline.com/wp-content/uploads/2020/12/07/tim-cook-apple_s.jpg", story: "https://etimg.etb2bimg.com/photo/99662790.cms" },
    { name: "virat_kohli", dp: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg", story: "https://m.timesofindia.com/photo/104569821/104569821.jpg" },
    { name: "sara_tendulkar", dp: "https://images.moneycontrol.com/static-mcnews/2022/04/Sara-Tendulkar-Instagram.jpg?impolicy=website&width=770&height=431", story: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI5SXR0cFxJzqRO3oZVA9g4cqMHT0-Llhg9TR6nTIxmWKIgGj_" },
    { name: "roman_1", dp: "https://e.rpp-noticias.io/xlarge/2020/05/08/280828_938997.jpg", story: "https://i.cbc.ca/1.4874921.1540320344!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/reigns-leukemia-wrestling.jpg" },
    { name: "The_rock", dp: "https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/16:9/w_1280,c_limit/The-Rock-2020-Potential-Run.jpg", story: "https://assets.gqindia.com/photos/5cdc274636f6907f7a478b4f/1:1/w_1080,h_1080,c_limit/Dwayne-Rock-Johnson-fitness-muscle.jpg" },
    { name: "Aman_boat", dp: "https://images.ottplay.com/images/aman-gupta-394.jpg", story: "https://static.zoomnews.com/photo/95262249/95262249.jpg" }]
let printdatastore = ''
arr.forEach(function (data, index) {
    printdatastore += `<div class="story">
<img id="${index}" src="${data.dp}"
    alt="">
<p>${data.name}</p>
</div>`
})
let showStorySec = document.querySelector(".show-story-sec")
showStorySec.innerHTML = printdatastore

let fullScreen = document.querySelector(".full-screen")
showStorySec.addEventListener("click", function (dets) {
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(() => {
        fullScreen.style.display = "none"
    }, 3000);
})
fullScreen.addEventListener("click", function () {
    fullScreen.style.display = `none`
})
let like = document.querySelector(".like")
let likeBtn = document.querySelector(".like-btn")
let likedBtn = document.querySelector(".liked-btn")
document.querySelector(".ps-img img").addEventListener("dblclick", function () {
    like.style.opacity = 1
    like.style.scale = 1
    setTimeout(() => {
        like.style.opacity = 0
        like.style.scale = 0.8
        likeBtn.style.display = "none"
        likedBtn.style.display = "block"
    }, 1000);
})
likeBtn.addEventListener("click", function () {
    likeBtn.style.display = "none"
    likedBtn.style.display = "block"
})
likedBtn.addEventListener("click", function () {
    likedBtn.style.display = "none"
    likeBtn.style.display = "block"
})
