const likeIcon = document.querySelector('.icon-love')


likeIcon.addEventListener('click', likePic)

function likePic(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
    } else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`

    }
    
}
