const dropdownAccount = document.querySelector('.dropdown-account')
const imgAccount = document.querySelector('.img-account')
const i = document.querySelector('.i')
const placeLogout = document.querySelector('.place-logout')

imgAccount.onclick = function(){
    dropdownAccount.classList.toggle('open')
    i.classList.toggle('.open')
}