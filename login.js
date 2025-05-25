const userAccount = document.querySelector('#username')
const passwordAccount = document.querySelector('#password')
let quote = document.querySelector('.quote')
const login = document.querySelector('.login')
const cancel = document.querySelector('.cancel')
const mulaiNav = document.querySelector('nav .act-btn')
const mulaiDropdown = document.querySelector('.dropdown .act-btn')
const loginCont = document.querySelector('.login-cont')


resetLogin()

mulaiNav.onclick = function (){
    resetLogin()
    loginCont.style.display = 'block'
}

mulaiDropdown.onclick = function (){
    resetLogin()
    loginCont.style.display = 'block'
}


login.onclick = function (){
    if(userAccount.value == 'Deco Prasetya' && passwordAccount.value == '30Desember'){
        window.location.href = "home deco.html"
        quote.textContent = 'Login and Have Fun'
        quote.append(quote)
    } else if (userAccount.value == 'Intan Lutfia Ramadhani' && passwordAccount.value == '20Oktober'){
        window.location.href = "home intan.html"
        quote.textContent = 'Login and Have Fun'
        quote.append(quote)
    } else if(userAccount.value == '' || passwordAccount.value == ''){
        quote.textContent = 'masukan Nama dan Password!'
        quote.append(quote)
    } else {
        quote.textContent = 'Nama atau Password Salah!'
        quote.append(quote)
        resetLogin()
    }

    resetLogin()
}


cancel.onclick = function (){
    loginCont.style.display = 'none'
}

function resetLogin(){
    userAccount.value = ''
    passwordAccount.value = ''
}

