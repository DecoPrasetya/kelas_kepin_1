const button = document.querySelector('button')
const dairy = document.querySelector('#dairy')
const dairyCont = document.querySelector('.dairy-cont')

button.addEventListener('click', submitDairy)

dairyArr = []

function submitDairy(e){
    if(dairy.value !== ''){
        newDairy = {
        'userName' : 'Intan Lutfia Ramadhani',
        'id': Math.floor((Math.random() * 1000) + 1),
        'userDairy': dairy.value,
        }
    dairyArr.push(newDairy)
    console.log(newDairy)
    resetForm()
    addDairy(newDairy)
    }

    e.preventDefault()

}

function resetForm(){
    dairy.value = ''
}

function addDairy(item){
    const dairyCard = document.createElement('div')
    if (item.userName === 'Intan Lutfia Ramadhani'){
        dairyCard.classList = 'dairy-card sent'
        dairyCard.id = item.id
        dairyCard.innerHTML = `
        <div class="pic">
                    <img src="intan pp.jpg" alt="">
                </div>
                <div class="chat-cont">
                    <div class="user-info">
                        <small>${item.userName}</small>
                    </div>
                    <div class="dairy">
                        ${item.userDairy}
                    </div>
                </div>
        `
    } else {
        dairyCard.classList = 'dairy-card receiver'
        dairyCard.id = item.id
        dairyCard.innerHTML = `
        <div class="pic">
                    <img src="/img/deco pp.jpg" alt="">
                </div>
                <div class="chat-cont">
                    <div class="user-info">
                        <small>${item.userName}</small>
                    </div>
                    <div class="dairy">
                        ${item.userDairy}
                    </div>
                </div>
        `
    }
    dairyCont.insertAdjacentElement('beforeend', dairyCard)
}