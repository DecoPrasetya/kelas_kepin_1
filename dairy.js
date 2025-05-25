const dairyCont = document.querySelector('.dairy-cont')

button.addEventListener('click', submitDairy)

dairyArr = []

use

// function submitDairy(e){
//     if(user && dairy !== ''){

//         newDairy = {
//         'id': Math.floor((Math.random() * 1000) + 1),
//         'userName': user.value,
//         'userDairy': dairy.value,
//         }
//     dairyArr.push(newDairy)
//     console.log(newDairy)
//     resetForm()
//     addDairy(newDairy)
//     }

//     e.preventDefault()

// }


function addDairy(item){
    const dairyCard = document.createElement('div')
    dairyCard.classList = 'dairy-card receiver'
    dairyCard.id = item.id
    dairyCard.innerHTML = `
        <div class="pic">
                    <img src="/img/deco pp.jpg" alt="">
                </div>
                <div class="chat-cont">
                    <div class="user-info">
                        ${item.userName}
                    </div>
                    <div class="dairy">
                        ${item.userDairy}
                    </div>
                </div>
        `
    dairyCont.insertAdjacentElement('beforeend', dairyCard)
}