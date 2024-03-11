const menu = () => {
    const menuBtn = document.querySelector('.header__btn-menu')
    const menu = document.querySelector('.modal')
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open')
        console.log(menu)
    })

}
export default menu